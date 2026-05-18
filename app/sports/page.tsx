import Link from "next/link";

const sports = [
  {
    name: "Football",
    icon: "⚽",
    description: "Find pitches, teams, friendly matches and players near you.",
    places: "245 venues",
    people: "1.3K players",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Padel",
    icon: "🎾",
    description: "Find courts, partners, doubles games and tournaments.",
    places: "64 courts",
    people: "612 players",
    color: "from-red-500 to-orange-700",
  },
  {
    name: "Cycling",
    icon: "🚴",
    description: "Join rides, discover routes and meet cycling groups.",
    places: "475 routes",
    people: "820 riders",
    color: "from-blue-500 to-sky-700",
  },
  {
    name: "Swimming",
    icon: "🏊",
    description: "Find pools, swimming coaches and open swim sessions.",
    places: "256 pools",
    people: "540 swimmers",
    color: "from-cyan-500 to-blue-700",
  },
  {
    name: "Running",
    icon: "🏃",
    description: "Join city runs, 5K groups, challenges and park sessions.",
    places: "88 groups",
    people: "1.1K runners",
    color: "from-orange-500 to-red-700",
  },
  {
    name: "Hiking",
    icon: "🥾",
    description: "Find weekend hiking groups, trails and outdoor crews.",
    places: "212 trails",
    people: "390 hikers",
    color: "from-lime-500 to-green-700",
  },
  {
    name: "Diving",
    icon: "🤿",
    description: "Find dive centres, trips, courses and dive buddies.",
    places: "32 centres",
    people: "220 divers",
    color: "from-sky-500 to-cyan-800",
  },
  {
    name: "Boxing / MMA",
    icon: "🥊",
    description: "Find boxing gyms, MMA coaches and sparring sessions.",
    places: "78 gyms",
    people: "430 fighters",
    color: "from-zinc-800 to-red-700",
  },
];

const featured = [
  {
    title: "Football tonight in Tripoli",
    sport: "Football",
    city: "Tripoli",
    time: "Tonight • 8:00 PM",
    people: "Need 2 players",
  },
  {
    title: "Padel doubles partner needed",
    sport: "Padel",
    city: "Benghazi",
    time: "Tomorrow • 6:00 PM",
    people: "Need 1 partner",
  },
  {
    title: "Friday cycling ride",
    sport: "Cycling",
    city: "Misrata",
    time: "Friday • 7:00 AM",
    people: "Open group",
  },
];

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_380px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Explore Sports
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Every sport, every crew, one place.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Tamreen is not only for gyms. It helps people find football games,
                padel partners, cycling groups, swimming pools, hikes, diving trips,
                boxing gyms and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/community"
                  className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  Find Your Crew
                </Link>
                <Link
                  href="/events"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  View Events
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Most active today</p>
              <h3 className="mt-2 text-3xl font-black">Football + Padel</h3>
              <p className="mt-3 text-zinc-300">
                Most people are looking for football players and padel partners today.
              </p>

              <div className="mt-6 space-y-3">
                {featured.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black">{item.title}</p>
                        <p className="mt-1 text-xs text-zinc-300">
                          {item.city} • {item.time}
                        </p>
                      </div>
                      <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-black">
                        {item.sport}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-red-300">{item.people}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Categories</p>
            <h2 className="text-4xl font-black tracking-tight">Choose your sport</h2>
          </div>
          <Link href="/community" className="font-bold text-green-700">
            Create a sport post →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport) => (
            <article
              key={sport.name}
              className="group overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className={`h-3 bg-gradient-to-r ${sport.color}`} />

              <div className="p-6">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f6f8f5] text-4xl transition group-hover:scale-110">
                  {sport.icon}
                </div>

                <h3 className="text-2xl font-black">{sport.name}</h3>
                <p className="mt-3 min-h-[84px] leading-7 text-zinc-600">
                  {sport.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Places</p>
                    <p className="mt-1 font-black">{sport.places}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">People</p>
                    <p className="mt-1 font-black">{sport.people}</p>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:bg-green-600">
                  Explore {sport.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-[3rem] bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
            <div>
              <p className="font-bold text-red-600">The big idea</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">
                “I want to do something active today.”
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
                Tamreen should answer that question fast. Where can I go? Who can I
                go with? What is happening today? That is what makes people keep using it.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white">
              <h3 className="text-2xl font-black">App feeling</h3>
              <div className="mt-5 space-y-3">
                {["Simple", "Social", "Local", "Motivating", "Cool"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/15 p-4 font-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}