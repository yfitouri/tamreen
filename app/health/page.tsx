import Link from "next/link";

const filters = [
  "All",
  "Nutritionist",
  "Physio",
  "Sports Doctor",
  "Body Check",
  "Blood Test",
  "Injury Recovery",
  "Fitness Assessment",
];

const professionals = [
  {
    id: 1,
    name: "Dr. Nadia Sports Clinic",
    type: "Sports Doctor",
    city: "Tripoli",
    area: "Ben Ashour",
    rating: "4.9",
    reviews: "76",
    verified: true,
    services: ["Sports injuries", "Fitness assessment", "Recovery plan"],
    price: "120 LYD consultation",
  },
  {
    id: 2,
    name: "FitLife Nutrition",
    type: "Nutritionist",
    city: "Benghazi",
    area: "Al Hawari",
    rating: "4.8",
    reviews: "64",
    verified: true,
    services: ["Diet plans", "Fat loss", "Muscle gain"],
    price: "90 LYD consultation",
  },
  {
    id: 3,
    name: "Recovery Physio Centre",
    type: "Physiotherapist",
    city: "Tripoli",
    area: "Ain Zara",
    rating: "4.7",
    reviews: "58",
    verified: true,
    services: ["Injury recovery", "Mobility", "Back pain"],
    price: "100 LYD session",
  },
  {
    id: 4,
    name: "Body Composition Lab",
    type: "Body Check",
    city: "Misrata",
    area: "City Centre",
    rating: "4.6",
    reviews: "42",
    verified: true,
    services: ["Body fat scan", "Muscle mass", "Progress report"],
    price: "50 LYD check",
  },
];

const checks = [
  {
    title: "Body Composition",
    text: "Check body fat, muscle mass and progress properly.",
    icon: "⚖️",
  },
  {
    title: "Nutrition Plan",
    text: "Get a simple meal plan that matches your goal.",
    icon: "🥗",
  },
  {
    title: "Injury Recovery",
    text: "Find physios and recovery support near you.",
    icon: "🩹",
  },
  {
    title: "Fitness Assessment",
    text: "Understand your current level before starting.",
    icon: "📋",
  },
];

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_390px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Health & Performance
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find health experts that support your fitness.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Nutritionists, physiotherapists, sports doctors, body checks, blood
                test clinics and fitness assessments — all in one clean place.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Find professional
                </button>
                <Link
                  href="/calories"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  Open calculator
                </Link>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Popular checks</p>
              <h3 className="mt-2 text-3xl font-black">Know your body</h3>
              <p className="mt-3 text-zinc-300">
                People should not only train hard — they should train smart.
              </p>

              <div className="mt-6 grid gap-3">
                {checks.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <p className="font-black">{item.title}</p>
                        <p className="mt-1 text-sm text-zinc-300">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Directory</p>
            <h2 className="text-4xl font-black tracking-tight">Health professionals</h2>
          </div>
          <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
            Sort by rating
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {professionals.map((item) => (
            <article
              key={item.id}
              className="rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {item.type}
                  </span>
                  <h3 className="mt-4 text-2xl font-black">{item.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-zinc-500">
                    {item.area}, {item.city}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-black">⭐ {item.rating}</p>
                  <p className="text-xs font-bold text-zinc-500">{item.reviews} reviews</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#f6f8f5] px-3 py-1 text-xs font-bold text-zinc-700"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-3xl bg-[#f6f8f5] p-5">
                <div>
                  <p className="text-xs font-bold text-zinc-500">Starting from</p>
                  <p className="text-lg font-black">{item.price}</p>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-green-700">
                  ✓ Verified
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                  Book
                </button>
                <button className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-900 transition hover:border-green-300">
                  WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}