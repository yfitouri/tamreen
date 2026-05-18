import Link from "next/link";

const filters = ["All", "Football", "Padel", "Gym Partner", "Cycling", "Running", "Hiking", "Swimming"];

const posts = [
  {
    id: 1,
    name: "Omar M.",
    city: "Tripoli",
    area: "Ain Zara",
    sport: "Football",
    title: "Need 2 players tonight",
    description:
      "Friendly 6-a-side match. All levels welcome, just come ready to play and have fun.",
    time: "Tonight • 8:00 PM",
    people: "4 going",
    needed: "2 needed",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: "Salma K.",
    city: "Benghazi",
    area: "Al Hawari",
    sport: "Padel",
    title: "Looking for a padel partner",
    description:
      "Beginner/intermediate level. Chilled game tomorrow evening, need one partner.",
    time: "Tomorrow • 6:00 PM",
    people: "2 going",
    needed: "1 needed",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    name: "Ali R.",
    city: "Misrata",
    area: "City Centre",
    sport: "Cycling",
    title: "Friday morning ride",
    description:
      "Easy 25km ride, coffee stop after. Good for anyone who wants to start cycling with people.",
    time: "Friday • 7:00 AM",
    people: "8 going",
    needed: "Open group",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 4,
    name: "Lina A.",
    city: "Tripoli",
    area: "Ben Ashour",
    sport: "Gym Partner",
    title: "Need gym partner 3 days a week",
    description:
      "Training for fat loss and strength. Looking for someone consistent after work.",
    time: "Mon/Wed/Fri • 7:00 PM",
    people: "1 going",
    needed: "1 partner",
    tagColor: "bg-zinc-100 text-zinc-700",
  },
  {
    id: 5,
    name: "Yousef A.",
    city: "Tripoli",
    area: "Corniche",
    sport: "Running",
    title: "Sunset run by the sea",
    description:
      "Slow pace 5K run, no pressure. Come for the vibe, stay for the community.",
    time: "Today • 6:30 PM",
    people: "12 going",
    needed: "Open group",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    name: "Nora F.",
    city: "Derna",
    area: "Mountain Route",
    sport: "Hiking",
    title: "Weekend hiking group",
    description:
      "Morning hike with views, bring water and comfortable shoes. Beginners welcome.",
    time: "Saturday • 8:00 AM",
    people: "9 going",
    needed: "Open group",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
];

const trending = [
  "Football tonight in Tripoli",
  "Padel partners in Benghazi",
  "Women-only gym groups",
  "Cycling routes in Misrata",
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                  Find Your Crew
                </span>

                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                  Find people to train, play and move with.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                  Join football games, find padel partners, discover running groups,
                  meet gym partners, and keep active with people near you.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                    + Create Post
                  </button>
                  <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                    Nearby
                  </button>
                  <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                    All Sports
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-zinc-950 p-6 text-white">
                <p className="text-sm font-bold text-green-400">Today in Libya</p>
                <h3 className="mt-2 text-2xl font-black">42 active posts</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  People are looking for teammates, gym partners and weekend groups.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">18</p>
                    <p className="text-xs text-zinc-300">Football</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">9</p>
                    <p className="text-xs text-zinc-300">Padel</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">7</p>
                    <p className="text-xs text-zinc-300">Gym</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">8</p>
                    <p className="text-xs text-zinc-300">Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition ${
                index === 0
                  ? "bg-zinc-950 text-white"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-green-300 hover:text-green-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-lg font-black text-white">
                    {post.name[0]}
                  </div>
                  <div>
                    <p className="font-black">{post.name}</p>
                    <p className="text-sm font-semibold text-zinc-500">
                      {post.city} • {post.area}
                    </p>
                  </div>
                </div>

                <span className={`rounded-full px-3 py-1 text-xs font-black ${post.tagColor}`}>
                  {post.sport}
                </span>
              </div>

              <h2 className="text-2xl font-black leading-tight">{post.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{post.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-xs font-bold text-zinc-500">Time</p>
                  <p className="mt-1 text-sm font-black">{post.time}</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-xs font-bold text-zinc-500">People</p>
                  <p className="mt-1 text-sm font-black">{post.people}</p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3">
                  <p className="text-xs font-bold text-zinc-500">Needed</p>
                  <p className="mt-1 text-sm font-black text-red-600">{post.needed}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                  I’m In
                </button>
                <button className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-900 transition hover:border-green-300">
                  WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Trending now</h3>
            <div className="mt-5 space-y-3">
              {trending.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f8f5] p-4">
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 to-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Keep it safe</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Meet in public places, confirm details before going, and report anything
              that looks wrong.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
            >
              Safety tips
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}