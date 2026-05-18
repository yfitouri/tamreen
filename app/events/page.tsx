import Link from "next/link";

const filters = ["All", "Today", "This Week", "Football", "Padel", "Running", "Cycling", "Hiking", "Fitness"];

const events = [
  {
    id: 1,
    title: "Tamreen Padel Cup",
    city: "Tripoli",
    location: "Win Arena, Tripoli",
    date: "May 24",
    time: "7:00 PM",
    sport: "Padel",
    price: "30 LYD",
    people: "32 joined",
    image: "/images/padel-event.svg",
    featured: true,
  },
  {
    id: 2,
    title: "City Run Tripoli",
    city: "Tripoli",
    location: "Tripoli Corniche",
    date: "May 31",
    time: "6:30 PM",
    sport: "Running",
    price: "Free",
    people: "120 joined",
    image: "/images/event-run.svg",
    featured: true,
  },
  {
    id: 3,
    title: "Friday Football Night",
    city: "Benghazi",
    location: "Al Hawari Stadium",
    date: "Jun 2",
    time: "9:00 PM",
    sport: "Football",
    price: "15 LYD",
    people: "18 joined",
    image: "/images/football-event.svg",
    featured: false,
  },
  {
    id: 4,
    title: "Beach Bootcamp",
    city: "Zuwara",
    location: "Zuwara Beach",
    date: "Jun 7",
    time: "8:00 AM",
    sport: "Fitness",
    price: "25 LYD",
    people: "44 joined",
    image: "/images/city-libya.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Misrata Cycling Ride",
    city: "Misrata",
    location: "City Centre Start Point",
    date: "Jun 9",
    time: "7:00 AM",
    sport: "Cycling",
    price: "Free",
    people: "21 joined",
    image: "/images/city-libya.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Weekend Hiking Group",
    city: "Derna",
    location: "Mountain Route",
    date: "Jun 14",
    time: "8:00 AM",
    sport: "Hiking",
    price: "20 LYD",
    people: "16 joined",
    image: "/images/hiking.svg",
    featured: false,
  },
];

const stats = [
  { label: "Events this week", value: "84" },
  { label: "People joined", value: "2.4K" },
  { label: "Cities active", value: "12" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-black text-red-700">
                Events
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Join games, runs, tournaments and weekend activities.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Discover what is happening near you. Football nights, padel cups,
                running groups, cycling rides, bootcamps, hikes and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  + Create Event
                </button>
                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                  Near me
                </button>
                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                  This week
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Featured today</p>
              <h3 className="mt-2 text-3xl font-black">City Run Tripoli</h3>
              <p className="mt-3 text-zinc-300">
                Sunset 5K run on the Corniche. Easy pace, all levels welcome.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs text-zinc-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white">
                Join event
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

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Upcoming</p>
            <h2 className="text-4xl font-black tracking-tight">Events near you</h2>
          </div>
          <Link href="/community" className="font-bold text-green-700">
            Find people to go with →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="relative h-52 bg-zinc-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
                  <p className="text-sm font-black text-red-600">{event.date}</p>
                  <p className="text-xs font-bold text-zinc-500">{event.time}</p>
                </div>

                {event.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {event.sport}
                  </span>
                  <span className="text-sm font-black text-zinc-500">{event.people}</span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{event.title}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  {event.location}
                </p>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#f6f8f5] p-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-500">Price</p>
                    <p className="text-lg font-black">{event.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-500">City</p>
                    <p className="text-lg font-black">{event.city}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                    Join
                  </button>
                  <button className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-900 transition hover:border-green-300">
                    Share
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}