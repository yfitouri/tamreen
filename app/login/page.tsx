"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://45.141.36.132:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      localStorage.setItem("tamreen-token", data.token);
      localStorage.setItem("tamreen-user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        router.push("/admin");
      } else if (
        data.user.role === "gym_owner" ||
        data.user.role === "food_business" ||
        data.user.role === "health_professional"
      ) {
        router.push("/business-dashboard");
      } else if (data.user.role === "trainer") {
        router.push("/trainer-dashboard");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-5 py-8 lg:grid-cols-[1fr_480px] lg:px-8">
        <div className="hidden overflow-hidden rounded-[3rem] bg-white shadow-sm lg:block">
          <div className="relative flex h-full min-h-[720px] flex-col justify-between bg-[url('/images/city-libya.jpg')] bg-cover bg-center p-10">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

            <div className="relative">
              <Link
                href="/"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
              >
                ← Back to Tamreen
              </Link>
            </div>

            <div className="relative max-w-2xl text-white">
              <p className="font-bold text-green-300">Welcome back</p>
              <h1 className="mt-3 text-6xl font-black leading-tight">
                Find your sport, your gym, your crew.
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                Login to join events, save gyms, find partners and track your progress.
              </p>
            </div>

            <div className="relative h-4 rounded-full bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full rounded-[3rem] bg-white p-7 shadow-sm md:p-10">
            <div className="mb-8">
              <Link href="/" className="font-black text-green-700 lg:hidden">
                ← Back to Tamreen
              </Link>

              <h2 className="mt-5 text-4xl font-black tracking-tight">Login</h2>
              <p className="mt-2 text-zinc-500">
                Continue to your Tamreen account.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-black text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm font-bold text-zinc-600">
                  <input type="checkbox" className="h-4 w-4" />
                  Remember me
                </label>

                <button type="button" className="text-sm font-black text-green-700">
                  Forgot password?
                </button>
              </div>

              {message && (
                <div className="rounded-2xl bg-red-50 p-4 text-sm font-black text-red-700">
                  {message}
                </div>
              )}

              <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="w-full rounded-full bg-green-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="mt-6 rounded-3xl bg-[#f6f8f5] p-5">
              <p className="text-sm font-bold text-zinc-500">Demo account</p>
              <p className="mt-1 font-black">yousef@test.com</p>
              <p className="text-sm font-bold text-zinc-500">password: demo123</p>
            </div>

            <p className="mt-8 text-center text-sm font-bold text-zinc-500">
              Don’t have an account?{" "}
              <Link href="/register" className="text-green-700">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}