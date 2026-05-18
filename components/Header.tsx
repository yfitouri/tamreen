import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Challenges", href: "/challenges" },
  { name: "Sports", href: "/sports" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 text-lg font-black text-white">
            T
          </div>
          <div>
            <p className="text-xl font-black leading-none text-zinc-950">Tamreen</p>
            <p className="text-xs font-bold text-zinc-500">Libya fitness community</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-black text-zinc-700 transition hover:bg-green-50 hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-900 transition hover:border-green-300 md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
          >
            Join
          </Link>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-zinc-100 px-5 py-3 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="whitespace-nowrap rounded-full bg-[#f6f8f5] px-4 py-2 text-xs font-black text-zinc-700"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}