import Image from "next/image";
import Link from "next/link";

const filters = [
  "All",
  "Tripoli",
  "Benghazi",
  "Women’s Fitness",
  "Bodybuilding",
  "Fat Loss",
  "Boxing",
  "Online Coaching",
  "Rehab",
];

const trainers = [
  {
    id: 1,
    name: "Ahmed Khaled",
    city: "Tripoli",
    area: "Ain Zara",
    image: "/images/trainer-ahmed.jpg",
    rating: "4.9",
    reviews: "86",
    speciality: "Strength • Conditioning • Fat Loss",
    price: "60 LYD/session",
    online: true,
    verified: true,
    featured: true,
    experience: "6 years",
  },
  {
    id: 2,
    name: "Khaled Mansour",
    city: "Benghazi",
    area: "Al Hawari",
    image: "/images/trainer-khaled.jpg",
    rating: "4.8",
    reviews: "74",
    speciality: "Bodybuilding • Muscle Gain",
    price: "55 LYD/session",
    online: true,
    verified: true,
    featured: false,
    experience: "8 years",
  },
  {
    id: 3,
    name: "Sara Ali",
    city: "Tripoli",
    area: "Ben Ashour",
    image: "/images/trainer-sara.jpg",
    rating: "5.0",
    reviews: "91",
    speciality: "Women’s Fitness • Fat Loss",
    price: "70 LYD/session",
    online: false,
    verified: true,
    featured: true,
    experience: "5 years",
  },
];

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Trainers
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find coaches who match your goal.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Discover verified trainers for strength, fat loss, bodybuilding,
                women’s fitness, boxing, mobility, rehab and online coaching.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Find a trainer
                </button>
                <Link
                  href="/community"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  Ask community
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Featured coach</p>

              <div className="mt-5 flex items-center gap-4">
                <Image
                  src="/images/trainer-ahmed.jpg"
                  alt="Featured trainer"
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-3xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-black">Ahmed Khaled</h3>
                  <p className="mt-1 text-sm text-zinc-300">Strength • Fat Loss</p>
                  <p className="mt-2 text-sm font-bold text-green-400">
                    ⭐ 4.9 • Verified
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">6</p>
                  <p className="text-xs text-zinc-300">Years</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">120+</p>
                  <p className="text-xs text-zinc-300">Clients</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">4.9</p>
                  <p className="text-xs text-zinc-300">Rating</p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white">
                Book session
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
            <p className="font-bold text-green-700">Directory</p>
            <h2 className="text-4xl font-black tracking-tight">Verified trainers</h2>
          </div>
          <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
            Sort by rating
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="relative h-80 bg-zinc-100">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />

                {trainer.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white shadow-lg">
                    Featured
                  </div>
                )}

                {trainer.verified && (
                  <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-green-700 shadow-lg">
                    ✓ Verified
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {trainer.online ? "Online + In person" : "In person"}
                  </span>
                  <span className="text-sm font-black text-zinc-500">
                    ⭐ {trainer.rating} ({trainer.reviews})
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{trainer.name}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  {trainer.area}, {trainer.city}
                </p>
                <p className="mt-3 font-bold text-zinc-700">{trainer.speciality}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Price</p>
                    <p className="mt-1 font-black">{trainer.price}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Experience</p>
                    <p className="mt-1 font-black">{trainer.experience}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/trainers/${trainer.id}`}
                    className="flex-1 rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-green-600"
                  >
                    View profile
                  </Link>
                  <button className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-900 transition hover:border-green-300">
                    WhatsApp
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