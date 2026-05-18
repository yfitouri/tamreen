import Link from "next/link";

const links = [
  { name: "Explore", href: "/explore" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Gyms", href: "/gyms" },
  { name: "Trainers", href: "/trainers" },
  { name: "Healthy Food", href: "/food" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 text-lg font-black text-white">
                T
              </div>
              <div>
                <p className="text-xl font-black leading-none text-zinc-950">Tamreen</p>
                <p className="text-xs font-bold text-zinc-500">
                  Stronger Together. Better Every Day.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-zinc-600">
              Libya’s sports, fitness and community platform for gyms, trainers,
              healthy food, events, challenges and people who want to move.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-[#f6f8f5] px-4 py-2 text-sm font-black text-zinc-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 h-3 rounded-full bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />

        <p className="mt-6 text-sm font-bold text-zinc-500">
          © 2026 Tamreen. Frontend demo version.
        </p>
      </div>
    </footer>
  );
}