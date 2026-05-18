import Image from "next/image";
import Link from "next/link";

const filters = ["All", "Tripoli", "Benghazi", "Misrata", "Women-only", "Mixed", "Cardio", "Boxing", "CrossFit"];

const gyms = [
  {
    id: 1,
    name: "Power House Gym",
    city: "Tripoli",
    area: "Ain Zara",
    image: "/images/gym-power.jpg",
    rating: "4.8",
    reviews: "128",
    price: "199 LYD/month",
    dayPass: "25 LYD",
    gender: "Mixed",
    verified: true,
    featured: true,
    facilities: ["Weights", "Cardio", "CrossFit", "Parking"],
  },
  {
    id: 2,
    name: "Benghazi Fitness Club",
    city: "Benghazi",
    area: "Al Hawari",
    image: "/images/gym-benghazi.jpg",
    rating: "4.6",
    reviews: "97",
    price: "160 LYD/month",
    dayPass: "20 LYD",
    gender: "Male",
    verified: true,
    featured: false,
    facilities: ["Weights", "Boxing", "Cardio", "Showers"],
  },
  {
    id: 3,
    name: "Ladies Active Studio",
    city: "Tripoli",
    area: "Ben Ashour",
    image: "/images/gym-ladies.jpg",
    rating: "4.9",
    reviews: "86",
    price: "180 LYD/month",
    dayPass: "25 LYD",
    gender: "Women-only",
    verified: true,
    featured: true,
    facilities: ["Classes", "Cardio", "PT", "Privacy"],
  },
];

export default function GymsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Gyms
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find the right gym for your goal.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Browse gyms across Libya, compare prices, check facilities, view ratings
                and contact gyms directly through WhatsApp.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Find gyms near me
                </button>
                <Link
                  href="/community"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  Find gym partner
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-4 text-white">
              <Image
                src="/images/gym-power.jpg"
                alt="Featured gym"
                width={700}
                height={500}
                className="h-64 w-full rounded-[2rem] object-cover"
              />

              <div className="p-4">
                <p className="text-sm font-bold text-green-400">Featured gym</p>
                <h3 className="mt-1 text-3xl font-black">Power House Gym</h3>
                <p className="mt-2 text-zinc-300">⭐ 4.8 • Tripoli • Mixed</p>

                <div className="mt-4 flex gap-2">
                  {["Weights", "Cardio", "CrossFit"].map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                      {item}
                    </span>
                  ))}
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

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Directory</p>
            <h2 className="text-4xl font-black tracking-tight">Top rated gyms</h2>
          </div>
          <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
            Sort by rating
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gyms.map((gym) => (
            <article
              key={gym.id}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="relative h-64 bg-zinc-100">
                <Image
                  src={gym.image}
                  alt={gym.name}
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />

                {gym.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white shadow-lg">
                    Featured
                  </div>
                )}

                {gym.verified && (
                  <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-green-700 shadow-lg">
                    ✓ Verified
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {gym.gender}
                  </span>
                  <span className="text-sm font-black text-zinc-500">
                    ⭐ {gym.rating} ({gym.reviews})
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{gym.name}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  {gym.area}, {gym.city}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {gym.facilities.map((facility) => (
                    <span
                      key={facility}
                      className="rounded-full bg-[#f6f8f5] px-3 py-1 text-xs font-bold text-zinc-700"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Membership</p>
                    <p className="mt-1 font-black">{gym.price}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Day pass</p>
                    <p className="mt-1 font-black">{gym.dayPass}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/gyms/${gym.id}`}
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