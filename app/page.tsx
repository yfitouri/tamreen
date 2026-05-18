import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Gyms", icon: "🏋️", count: "1,245 gyms", href: "/gyms" },
  { name: "Trainers", icon: "💪", count: "482 trainers", href: "/trainers" },
  { name: "Football", icon: "⚽", count: "1,328 games", href: "/sports" },
  { name: "Padel", icon: "🎾", count: "612 courts", href: "/sports" },
  { name: "Cycling", icon: "🚴", count: "475 routes", href: "/sports" },
  { name: "Swimming", icon: "🏊", count: "256 pools", href: "/sports" },
  { name: "Hiking", icon: "🥾", count: "212 trails", href: "/sports" },
  { name: "Healthy Food", icon: "🥗", count: "689 places", href: "/food" },
];

const crewPosts = [
  {
    name: "Omar M.",
    city: "Tripoli",
    title: "Need 2 players tonight",
    sport: "Football",
    time: "Tonight • 8:00 PM",
    people: "+3",
  },
  {
    name: "Salma K.",
    city: "Benghazi",
    title: "Looking for a padel partner",
    sport: "Padel",
    time: "Tomorrow • 6:00 PM",
    people: "+2",
  },
  {
    name: "Ali R.",
    city: "Misrata",
    title: "Friday morning ride",
    sport: "Cycling",
    time: "Friday • 7:00 AM",
    people: "+5",
  },
];

const events = [
  {
    date: "May 24",
    title: "Tamreen Padel Cup",
    location: "Win Arena, Tripoli",
    type: "Padel",
  },
  {
    date: "May 31",
    title: "City Run Tripoli",
    location: "Tripoli Corniche",
    type: "Running",
  },
  {
    date: "Jun 7",
    title: "Beach Bootcamp",
    location: "Zuwara Beach",
    type: "Fitness",
  },
];

const challenges = [
  {
    title: "30-Day Move",
    text: "Move 30 minutes every day",
    joined: "1.2K joined",
    progress: "72%",
  },
  {
    title: "10K Steps Daily",
    text: "Hit your daily steps goal",
    joined: "2.8K joined",
    progress: "58%",
  },
  {
    title: "Hydration Hero",
    text: "Drink 2L of water daily",
    joined: "945 joined",
    progress: "45%",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5fff8] to-[#eef8f0]" />
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-red-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              🇱🇾 Libya’s sports & fitness community
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Find your sport,
              <br />
              your <span className="text-green-600">gym</span>,
              <br />
              your <span className="text-red-600">crew.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Tamreen helps people in Libya find gyms, trainers, football games,
              padel partners, cycling groups, events, challenges, and healthy food
              all in one simple app.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/gyms"
                className="rounded-full bg-green-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Explore Now
              </Link>
              <Link
                href="/community"
                className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-bold text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:border-green-300"
              >
                Find Your Crew
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black">12K+</p>
                <p className="text-xs font-semibold text-zinc-500">Active people</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black">450+</p>
                <p className="text-xs font-semibold text-zinc-500">Places</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black">80+</p>
                <p className="text-xs font-semibold text-zinc-500">Weekly events</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-zinc-900/10">
              <Image
                src="/images/final-ui-concept.png"
                alt="Tamreen Libya fitness community"
                width={1000}
                height={700}
                className="h-[520px] w-full rounded-[2rem] object-cover"
                priority
              />

              <div className="absolute inset-x-6 bottom-6 rounded-[2rem] bg-white/85 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-700">Live today</p>
                    <h3 className="text-2xl font-black">Football tonight in Tripoli</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-600">
                      4 going • Need 2 more players
                    </p>
                  </div>
                  <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white">
                    I’m in
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 hidden rounded-3xl bg-white p-5 shadow-xl lg:block">
              <p className="text-sm font-bold text-zinc-500">Verified gym</p>
              <p className="text-xl font-black">Power House Gym</p>
              <p className="mt-1 text-sm text-zinc-600">⭐ 4.8 • Tripoli • 2.1 km</p>
            </div>
          </div>
        </div>

        <div className="relative h-5 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Explore</p>
            <h2 className="text-4xl font-black tracking-tight">Find what moves you</h2>
          </div>
          <Link href="/sports" className="font-bold text-green-700">
            View all sports →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl transition group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-black">{item.name}</h3>
              <p className="mt-1 text-sm font-semibold text-zinc-500">{item.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* COMMUNITY + EVENTS */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-bold text-red-600">Community</p>
              <h2 className="text-3xl font-black">Find Your Crew</h2>
              <p className="mt-1 text-zinc-500">Train together. Play together. Stay active.</p>
            </div>
            <Link href="/community" className="font-bold text-green-700">
              See all →
            </Link>
          </div>

          <div className="grid gap-4">
            {crewPosts.map((post) => (
              <div
                key={post.title}
                className="rounded-[2rem] border border-zinc-100 bg-[#fbfcfb] p-5 transition hover:border-green-200 hover:bg-green-50/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 font-black text-white">
                        {post.name[0]}
                      </div>
                      <div>
                        <p className="font-black">{post.name}</p>
                        <p className="text-sm font-semibold text-zinc-500">{post.city}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black">{post.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-500">{post.time}</p>
                  </div>

                  <div className="text-right">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                      {post.sport}
                    </span>
                    <p className="mt-4 text-sm font-black text-red-600">{post.people}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
          <div className="mb-6">
            <p className="font-bold text-green-400">Events</p>
            <h2 className="text-3xl font-black">Upcoming Events</h2>
          </div>

          <div className="grid gap-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15"
              >
                <div className="mb-4 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-black">
                  {event.date}
                </div>
                <h3 className="text-xl font-black">{event.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{event.location}</p>
                <p className="mt-3 text-sm font-bold text-green-400">{event.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Motivation</p>
            <h2 className="text-4xl font-black tracking-tight">Challenges that keep people coming back</h2>
          </div>
          <Link href="/challenges" className="font-bold text-green-700">
            Join challenge →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {challenges.map((challenge) => (
            <div key={challenge.title} className="rounded-[2.5rem] bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                🔥
              </div>
              <h3 className="text-2xl font-black">{challenge.title}</h3>
              <p className="mt-2 text-zinc-500">{challenge.text}</p>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-red-500"
                  style={{ width: challenge.progress }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-bold text-zinc-500">{challenge.joined}</p>
                <p className="text-sm font-black text-green-700">{challenge.progress}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-gradient-to-r from-green-600 via-zinc-950 to-red-600 p-1">
          <div className="rounded-[2.8rem] bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-4xl font-black tracking-tight">
                  Tamreen Pass is coming.
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-zinc-600">
                  One membership. Multiple gyms. Across Libya. This is the future
                  feature after we get gyms and communities onboard.
                </p>
              </div>
              <Link
                href="/register"
                className="rounded-full bg-zinc-950 px-8 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}