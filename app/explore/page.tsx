import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Gyms",
    icon: "🏋️",
    text: "Find gyms, compare prices and facilities.",
    href: "/gyms",
    count: "1,245 places",
  },
  {
    title: "Trainers",
    icon: "💪",
    text: "Find verified coaches and online coaching.",
    href: "/trainers",
    count: "482 trainers",
  },
  {
    title: "Community",
    icon: "🤝",
    text: "Find people to train, play and move with.",
    href: "/community",
    count: "42 active posts",
  },
  {
    title: "Events",
    icon: "📅",
    text: "Join games, tournaments and group activities.",
    href: "/events",
    count: "84 this week",
  },
  {
    title: "Sports",
    icon: "⚽",
    text: "Football, padel, cycling, hiking and more.",
    href: "/sports",
    count: "12 sports",
  },
  {
    title: "Healthy Food",
    icon: "🥗",
    text: "Meal prep, restaurants and macro-friendly meals.",
    href: "/food",
    count: "689 places",
  },
  {
    title: "Health",
    icon: "🩺",
    text: "Nutritionists, physios and sports doctors.",
    href: "/health",
    count: "96 professionals",
  },
  {
    title: "Plans",
    icon: "📋",
    text: "Workout plans, videos and weekly schedules.",
    href: "/plans",
    count: "28 plans",
  },
];

const popular = [
  {
    title: "Power House Gym",
    type: "Gym",
    location: "Ain Zara, Tripoli",
    image: "/images/gym-power.jpg",
    rating: "4.8",
    href: "/gyms/1",
  },
  {
    title: "Ahmed Khaled",
    type: "Trainer",
    location: "Tripoli",
    image: "/images/trainer-ahmed.jpg",
    rating: "4.9",
    href: "/trainers/1",
  },
  {
    title: "Green Bowls",
    type: "Healthy Food",
    location: "Ben Ashour, Tripoli",
    image: "/images/food-green.jpg",
    rating: "4.7",
    href: "/food/1",
  },
];

const today = [
  {
    title: "Need 2 players tonight",
    type: "Football",
    city: "Tripoli",
    time: "Today • 8:00 PM",
    href: "/community",
  },
  {
    title: "City Run Tripoli",
    type: "Running",
    city: "Tripoli Corniche",
    time: "May 31 • 6:30 PM",
    href: "/events",
  },
  {
    title: "10K Steps Daily",
    type: "Challenge",
    city: "All Libya",
    time: "Active now",
    href: "/challenges",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Explore Tamreen
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find what you need in seconds.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Search gyms, trainers, sports, events, community posts, healthy food,
                health professionals and workout plans in one simple place.
              </p>

              <div className="mt-7 max-w-2xl rounded-full border border-zinc-200 bg-[#f6f8f5] p-2 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="pl-4 text-xl">⌕</div>
                  <input
                    placeholder="Search gyms, trainers, sports, events..."
                    className="w-full bg-transparent px-2 py-3 font-bold outline-none"
                  />
                  <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white">
                    Search
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Tripoli", "Benghazi", "Padel", "Football", "Women-only gym"].map(
                  (item) => (
                    <button
                      key={item}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-black text-zinc-700 transition hover:border-green-300 hover:text-green-700"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Quick view</p>
              <h3 className="mt-2 text-3xl font-black">What’s active today?</h3>

              <div className="mt-6 space-y-3">
                {today.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black">{item.title}</p>
                        <p className="mt-1 text-sm text-zinc-300">
                          {item.city} • {item.time}
                        </p>
                      </div>
                      <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-black">
                        {item.type}
                      </span>
                    </div>
                  </Link>
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
            <p className="font-bold text-green-700">Everything in one app</p>
            <h2 className="text-4xl font-black tracking-tight">Explore categories</h2>
          </div>
          <Link href="/community" className="font-bold text-green-700">
            Find people now →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f6f8f5] text-4xl transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 min-h-[56px] leading-7 text-zinc-600">{item.text}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                  {item.count}
                </span>
                <span className="font-black text-zinc-400 transition group-hover:text-green-600">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Popular</p>
            <h2 className="text-4xl font-black tracking-tight">Popular near you</h2>
          </div>
          <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
            Tripoli
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {popular.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="relative h-64 bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-green-700 shadow-lg">
                  {item.type}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    Verified
                  </span>
                  <span className="text-sm font-black text-zinc-500">
                    ⭐ {item.rating}
                  </span>
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  {item.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-[3rem] bg-gradient-to-r from-green-600 via-zinc-950 to-red-600 p-1">
          <div className="rounded-[2.8rem] bg-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <p className="font-bold text-red-600">Why Explore matters</p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">
                  This is the front door of Tamreen.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
                  People should open Tamreen and instantly find what to do today:
                  gym, event, football match, food, trainer, or someone to train with.
                </p>
              </div>

              <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white">
                <h3 className="text-2xl font-black">Simple goal</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Less thinking. More moving. That’s how the app keeps people coming back.
                </p>
                <Link
                  href="/community"
                  className="mt-5 inline-flex rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white"
                >
                  Find Your Crew
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}