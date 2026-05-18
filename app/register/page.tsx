import Link from "next/link";

const roles = [
  "Normal user",
  "Gym owner",
  "Trainer",
  "Food business",
  "Health professional",
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-5 py-8 lg:grid-cols-[1fr_520px] lg:px-8">
        <div className="hidden overflow-hidden rounded-[3rem] bg-white shadow-sm lg:block">
          <div className="relative flex h-full min-h-[760px] flex-col justify-between bg-[url('/images/city-libya.jpg')] bg-cover bg-center p-10">
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
              <p className="font-bold text-green-300">Join the movement</p>
              <h1 className="mt-3 text-6xl font-black leading-tight">
                Build Libya’s sports community.
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                Create your account to save gyms, join events, find people, follow
                challenges and discover healthy places near you.
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

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Create account
              </h2>

              <p className="mt-2 text-zinc-500">
                Start using Tamreen today.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-black text-zinc-700">Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Phone / WhatsApp</label>
                <input
                  type="text"
                  placeholder="+218 91 000 0000"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">City</label>
                <select className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500">
                  <option>Tripoli</option>
                  <option>Benghazi</option>
                  <option>Misrata</option>
                  <option>Zawiya</option>
                  <option>Derna</option>
                  <option>Sabha</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Account type</label>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {roles.map((role, index) => (
                    <label
                      key={role}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 font-bold transition hover:border-green-300"
                    >
                      <input
                        type="radio"
                        name="role"
                        defaultChecked={index === 0}
                        className="h-4 w-4"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-green-500"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-green-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Create account
              </button>
            </form>

            <p className="mt-8 text-center text-sm font-bold text-zinc-500">
              Already have an account?{" "}
              <Link href="/login" className="text-green-700">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}