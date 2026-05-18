import Link from "next/link";

const filters = [
  "All",
  "Beginner",
  "Fat Loss",
  "Muscle Gain",
  "Home Workout",
  "Gym Workout",
  "Women’s Fitness",
  "Mobility",
];

const plans = [
  {
    id: 1,
    title: "Beginner Gym Plan",
    goal: "Beginner",
    level: "Easy",
    duration: "4 weeks",
    days: "3 days/week",
    description:
      "Simple full-body gym plan for people starting from zero. Focus on confidence, form and consistency.",
    icon: "🏋️",
    color: "from-green-500 to-emerald-700",
    schedule: ["Full body", "Rest", "Full body", "Rest", "Full body", "Walk", "Rest"],
  },
  {
    id: 2,
    title: "Fat Loss Starter",
    goal: "Fat Loss",
    level: "Beginner",
    duration: "6 weeks",
    days: "4 days/week",
    description:
      "Mix of strength training, cardio and daily steps to help users start losing fat without overcomplicating it.",
    icon: "🔥",
    color: "from-red-500 to-orange-700",
    schedule: ["Upper", "Lower", "Steps", "Full body", "Rest", "Cardio", "Rest"],
  },
  {
    id: 3,
    title: "Muscle Gain Builder",
    goal: "Muscle Gain",
    level: "Intermediate",
    duration: "8 weeks",
    days: "5 days/week",
    description:
      "Structured gym split for people who want to build muscle and track progress week by week.",
    icon: "💪",
    color: "from-zinc-800 to-green-700",
    schedule: ["Push", "Pull", "Legs", "Rest", "Upper", "Lower", "Rest"],
  },
  {
    id: 4,
    title: "Home Workout",
    goal: "Home",
    level: "Easy",
    duration: "4 weeks",
    days: "3 days/week",
    description:
      "No gym needed. Simple bodyweight workouts for people training at home or starting slowly.",
    icon: "🏠",
    color: "from-blue-500 to-sky-700",
    schedule: ["Workout A", "Walk", "Workout B", "Rest", "Workout C", "Stretch", "Rest"],
  },
  {
    id: 5,
    title: "Mobility Reset",
    goal: "Mobility",
    level: "All levels",
    duration: "2 weeks",
    days: "Daily",
    description:
      "Short daily mobility sessions for hips, shoulders and back. Good for office workers and lifters.",
    icon: "🧘",
    color: "from-purple-500 to-indigo-700",
    schedule: ["Hips", "Back", "Shoulders", "Full", "Hips", "Back", "Rest"],
  },
  {
    id: 6,
    title: "Football Fitness",
    goal: "Performance",
    level: "Intermediate",
    duration: "6 weeks",
    days: "4 days/week",
    description:
      "Fitness plan for football players focusing on speed, stamina, legs and injury prevention.",
    icon: "⚽",
    color: "from-lime-500 to-green-700",
    schedule: ["Speed", "Strength", "Rest", "Stamina", "Mobility", "Match", "Rest"],
  },
];

const videos = [
  {
    title: "How to squat safely",
    category: "Technique",
    time: "6 min",
    icon: "🏋️",
  },
  {
    title: "Beginner push workout",
    category: "Workout",
    time: "18 min",
    icon: "💪",
  },
  {
    title: "Meal prep basics",
    category: "Nutrition",
    time: "9 min",
    icon: "🥗",
  },
  {
    title: "Warm-up before football",
    category: "Performance",
    time: "7 min",
    icon: "⚽",
  },
];

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_390px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Plans & Videos
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Simple plans people can actually follow.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Beginner plans, fat loss, muscle gain, home workouts, football fitness,
                mobility and short exercise videos. Keep it simple and practical.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Start plan
                </button>
                <Link
                  href="/calories"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  Calculate calories
                </Link>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">This week</p>
              <h3 className="mt-2 text-3xl font-black">Beginner Gym Plan</h3>
              <p className="mt-3 text-zinc-300">
                A simple 3-day plan to build confidence and consistency.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {["Mon", "Wed", "Fri"].map((day) => (
                  <div
                    key={day}
                    className="rounded-2xl bg-green-500 p-4 text-center font-black"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950">
                View schedule
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

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-6">
          <div>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-bold text-green-700">Workout plans</p>
                <h2 className="text-4xl font-black tracking-tight">Choose your plan</h2>
              </div>
              <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
                Sort by level
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  <div className={`h-3 bg-gradient-to-r ${plan.color}`} />

                  <div className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f6f8f5] text-3xl">
                        {plan.icon}
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                        {plan.goal}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black">{plan.title}</h3>
                    <p className="mt-3 leading-7 text-zinc-600">{plan.description}</p>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-[#f6f8f5] p-4">
                        <p className="text-xs font-bold text-zinc-500">Level</p>
                        <p className="mt-1 font-black">{plan.level}</p>
                      </div>
                      <div className="rounded-2xl bg-[#f6f8f5] p-4">
                        <p className="text-xs font-bold text-zinc-500">Duration</p>
                        <p className="mt-1 font-black">{plan.duration}</p>
                      </div>
                      <div className="rounded-2xl bg-[#f6f8f5] p-4">
                        <p className="text-xs font-bold text-zinc-500">Days</p>
                        <p className="mt-1 font-black">{plan.days}</p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-7 gap-2">
                      {plan.schedule.map((day, index) => (
                        <div
                          key={`${plan.title}-${index}`}
                          className={`rounded-2xl p-2 text-center text-[10px] font-black ${
                            day === "Rest"
                              ? "bg-zinc-100 text-zinc-400"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:bg-green-600">
                      View plan
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Exercise videos</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Short videos to teach users the basics.
            </p>

            <div className="mt-5 space-y-3">
              {videos.map((video) => (
                <div key={video.title} className="rounded-2xl bg-[#f6f8f5] p-4">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl">
                      {video.icon}
                    </div>
                    <div>
                      <p className="font-black">{video.title}</p>
                      <p className="mt-1 text-sm font-semibold text-zinc-500">
                        {video.category} • {video.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Weekly schedule</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Later users can save a plan and see today’s workout inside their profile.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Workout", "Steps", "Water", "Protein"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 font-black">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Keep it simple</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              The best app is not the one with 1000 plans. It’s the one that helps people start today.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}