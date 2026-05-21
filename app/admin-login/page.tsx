import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-5 py-8 lg:grid-cols-[1fr_480px] lg:px-8">
        <div className="hidden overflow-hidden rounded-[3rem] bg-white shadow-sm lg:block">
          <div className="relative flex h-full min-h-[720px] flex-col justify-between bg-[url('/images/gym-power.jpg')] bg-cover bg-center p-10">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent" />

            <div className="relative">
              <Link
                href="/"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
              >
                ← Back to Tamreen
              </Link>
            </div>

            <div className="relative max-w-2xl text-white">
              <p className="font-bold text-green-300">Admin access</p>
              <h1 className="mt-3 text-6xl font-black leading-tight">
                Control listings, verification and content.
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                Manage gyms, trainers, food businesses, health professionals, events,
                challenges and community posts from one place.
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

              <span className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-xs font-black text-white">
                Admin only
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Admin login
              </h2>

              <p className="mt-2 text-zinc-500">
                Login to manage the Tamreen platform.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-black text-zinc-700">
                  Admin email
                </label>
                <input
                  type="email"
                  placeholder="admin@tamreen.ly"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <Link
                href="/admin"
                className="block w-full rounded-full bg-green-600 px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Enter admin dashboard
              </Link>
            </form>

            <div className="mt-6 rounded-3xl bg-[#f6f8f5] p-5">
              <p className="text-sm font-bold text-zinc-500">Demo access</p>
              <p className="mt-1 font-black">admin@tamreen.ly</p>
              <p className="text-sm font-bold text-zinc-500">password: demo123</p>
            </div>

            <p className="mt-8 text-center text-sm font-bold text-zinc-500">
              Business owner?{" "}
              <Link href="/verification" className="text-green-700">
                Request verification
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}