const filters = ["All", "Gym", "Steps", "Running", "Nutrition", "Water", "Beginner", "Community"];

const challenges = [
  {
    id: 1,
    title: "30-Day Move",
    category: "Fitness",
    description: "Move your body for 30 minutes every day. Walk, gym, football, cycling — anything counts.",
    joined: "1.2K joined",
    daysLeft: "22 days left",
    progress: 72,
    reward: "Active badge",
    icon: "🔥",
    color: "from-green-500 to-emerald-700",
  },
  {
    id: 2,
    title: "10K Steps Daily",
    category: "Walking",
    description: "Hit 10,000 steps every day and build a simple healthy habit.",
    joined: "2.8K joined",
    daysLeft: "16 days left",
    progress: 58,
    reward: "Steps badge",
    icon: "👟",
    color: "from-blue-500 to-sky-700",
  },
  {
    id: 3,
    title: "Hydration Hero",
    category: "Health",
    description: "Drink 2L of water daily. Small habit, big difference.",
    joined: "945 joined",
    daysLeft: "18 days left",
    progress: 45,
    reward: "Hydration badge",
    icon: "💧",
    color: "from-cyan-500 to-blue-700",
  },
  {
    id: 4,
    title: "Strength Starter",
    category: "Gym",
    description: "Complete 3 strength workouts per week and start building consistency.",
    joined: "1.1K joined",
    daysLeft: "24 days left",
    progress: 63,
    reward: "Strength badge",
    icon: "💪",
    color: "from-red-500 to-orange-700",
  },
  {
    id: 5,
    title: "Ramadan Fitness",
    category: "Seasonal",
    description: "Stay active with light workouts, walking and simple healthy eating.",
    joined: "740 joined",
    daysLeft: "Coming soon",
    progress: 20,
    reward: "Limited badge",
    icon: "🌙",
    color: "from-zinc-800 to-green-700",
  },
  {
    id: 6,
    title: "Healthy Plate Week",
    category: "Nutrition",
    description: "Eat one high-protein healthy meal every day for a full week.",
    joined: "680 joined",
    daysLeft: "7 days left",
    progress: 50,
    reward: "Nutrition badge",
    icon: "🥗",
    color: "from-lime-500 to-green-700",
  },
];

const leaderboard = [
  { name: "Omar M.", city: "Tripoli", points: "8,420 pts", badge: "🔥" },
  { name: "Sara A.", city: "Benghazi", points: "7,980 pts", badge: "💪" },
  { name: "Ali R.", city: "Misrata", points: "7,540 pts", badge: "🚴" },
  { name: "Nora F.", city: "Derna", points: "6,880 pts", badge: "🥾" },
];

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Motivation
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Challenges that keep people coming back.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Build habits, earn badges, compete with friends and stay active every week.
                Simple, fun, and made for the Tamreen community.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Join a Challenge
                </button>
                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                  View Leaderboard
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Your streak</p>
              <h3 className="mt-2 text-6xl font-black">7</h3>
              <p className="mt-1 text-zinc-300">days active in a row</p>

              <div className="mt-6 grid grid-cols-7 gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div
                    key={`${day}-${index}`}
                    className={`flex h-10 items-center justify-center rounded-full text-xs font-black ${
                      index < 5 ? "bg-green-500 text-white" : "bg-white/10 text-zinc-300"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950">
                Check in today
              </button>
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
        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <article
              key={challenge.id}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className={`h-3 bg-gradient-to-r ${challenge.color}`} />

              <div className="p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f6f8f5] text-3xl">
                    {challenge.icon}
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {challenge.category}
                  </span>
                </div>

                <h2 className="text-2xl font-black leading-tight">{challenge.title}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{challenge.description}</p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${challenge.color}`}
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-zinc-500">{challenge.joined}</p>
                  <p className="text-sm font-black text-green-700">{challenge.progress}%</p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Reward</p>
                    <p className="mt-1 font-black">{challenge.reward}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Time</p>
                    <p className="mt-1 font-black">{challenge.daysLeft}</p>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                  Join Challenge
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Leaderboard</h3>
            <p className="mt-2 text-sm text-zinc-500">Top active people this week.</p>

            <div className="mt-5 space-y-3">
              {leaderboard.map((user, index) => (
                <div key={user.name} className="flex items-center gap-3 rounded-2xl bg-[#f6f8f5] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-black text-white">
                    #{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-black">{user.name}</p>
                    <p className="text-sm font-semibold text-zinc-500">{user.city}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl">{user.badge}</p>
                    <p className="text-xs font-black text-green-700">{user.points}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-red-600 via-zinc-950 to-green-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Badges</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Earn badges for showing up, joining events, eating healthy and building consistency.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {["🔥", "💪", "👟", "🥗", "💧", "⚽"].map((badge) => (
                <div key={badge} className="flex h-16 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}