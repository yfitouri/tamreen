import Link from "next/link";

const stats = [
  { label: "Check-ins", value: "18" },
  { label: "Events joined", value: "7" },
  { label: "Challenges", value: "4" },
  { label: "Saved places", value: "12" },
];

const badges = [
  { icon: "🔥", name: "7 Day Streak" },
  { icon: "💪", name: "Strength Starter" },
  { icon: "⚽", name: "Football Regular" },
  { icon: "🥗", name: "Healthy Eater" },
  { icon: "👟", name: "10K Steps" },
  { icon: "💧", name: "Hydration Hero" },
];

const saved = [
  {
    title: "Power House Gym",
    type: "Gym",
    location: "Ain Zara, Tripoli",
    rating: "4.8",
  },
  {
    title: "Ahmed Khaled",
    type: "Trainer",
    location: "Tripoli",
    rating: "4.9",
  },
  {
    title: "Green Bowls",
    type: "Healthy Food",
    location: "Ben Ashour, Tripoli",
    rating: "4.7",
  },
];

const activity = [
  {
    title: "Joined City Run Tripoli",
    time: "Today",
    icon: "🏃",
  },
  {
    title: "Checked in at Power House Gym",
    time: "Yesterday",
    icon: "🏋️",
  },
  {
    title: "Completed 10K Steps Daily",
    time: "2 days ago",
    icon: "👟",
  },
  {
    title: "Saved Green Bowls",
    time: "3 days ago",
    icon: "🥗",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-zinc-950 text-5xl font-black text-white">
                    Y
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                        Normal user
                      </span>
                      <span className="rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700">
                        7 day streak
                      </span>
                    </div>

                    <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
                      Yousef Fitouri
                    </h1>

                    <p className="mt-2 text-lg font-semibold text-zinc-500">
                      Tripoli • Fitness, football, gym and healthy food
                    </p>
                  </div>
                </div>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
                  Your Tamreen profile keeps your check-ins, badges, saved gyms,
                  joined events and fitness progress in one place.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                    Edit profile
                  </button>
                  <Link
                    href="/community"
                    className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                  >
                    Find Your Crew
                  </Link>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white">
                <p className="text-sm font-bold text-green-400">Today</p>
                <h3 className="mt-2 text-5xl font-black">7,842</h3>
                <p className="mt-1 text-zinc-300">steps so far</p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-green-500" />
                </div>

                <p className="mt-3 text-sm font-bold text-zinc-300">
                  78% of your 10K goal
                </p>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-8 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-black">{stat.value}</p>
            <p className="mt-1 text-sm font-bold text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Badges</p>
            <h2 className="mt-2 text-3xl font-black">Your achievements</h2>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className="rounded-3xl border border-zinc-100 bg-[#f6f8f5] p-5 text-center"
                >
                  <div className="text-4xl">{badge.icon}</div>
                  <p className="mt-3 font-black">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Saved</p>
            <h2 className="mt-2 text-3xl font-black">Saved places and people</h2>

            <div className="mt-6 grid gap-4">
              {saved.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#f6f8f5] p-5"
                >
                  <div>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                      {item.type}
                    </span>
                    <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-zinc-500">
                      {item.location}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-black">⭐ {item.rating}</p>
                    <button className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-black">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Recent activity</h3>

            <div className="mt-5 space-y-3">
              {activity.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl bg-[#f6f8f5] p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-black">{item.title}</p>
                    <p className="text-sm font-bold text-zinc-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Keep going</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Join one event this week and complete one challenge to keep your streak alive.
            </p>
            <Link
              href="/events"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
            >
              Find event
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}