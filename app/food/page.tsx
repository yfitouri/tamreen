import Image from "next/image";
import Link from "next/link";

const filters = [
  "All",
  "Tripoli",
  "Benghazi",
  "Meal Prep",
  "Healthy Restaurant",
  "Protein",
  "Delivery",
  "Calories shown",
];

const foodBusinesses = [
  {
    id: 1,
    name: "Green Bowls",
    city: "Tripoli",
    area: "Ben Ashour",
    image: "/images/food-green.jpg",
    rating: "4.7",
    reviews: "89",
    type: "Healthy Restaurant",
    delivery: true,
    calories: true,
    verified: true,
    featured: true,
    popular: "Grilled Chicken Bowl",
    price: "28 LYD",
    macros: "520 kcal • 42g protein",
  },
  {
    id: 2,
    name: "Lean Meal Prep",
    city: "Benghazi",
    area: "Al Hawari",
    image: "/images/food-protein.jpg",
    rating: "4.8",
    reviews: "64",
    type: "Meal Prep",
    delivery: true,
    calories: true,
    verified: true,
    featured: false,
    popular: "Chicken Rice Box",
    price: "25 LYD",
    macros: "610 kcal • 48g protein",
  },
  {
    id: 3,
    name: "Protein Power Kitchen",
    city: "Misrata",
    area: "City Centre",
    image: "/images/food-protein-2.jpg",
    rating: "4.6",
    reviews: "51",
    type: "Protein Meals",
    delivery: false,
    calories: true,
    verified: true,
    featured: true,
    popular: "High Protein Bowl",
    price: "30 LYD",
    macros: "680 kcal • 55g protein",
  },
];

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Healthy Food
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Eat clean. Train better.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Find healthy restaurants, meal prep businesses, protein meals and food
                places that show calories and macros where available.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                  Find healthy food
                </button>
                <Link
                  href="/calories"
                  className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1"
                >
                  Calories calculator
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-4 text-white">
              <Image
                src="/images/food-green.jpg"
                alt="Healthy food"
                width={700}
                height={700}
                className="h-72 w-full rounded-[2rem] object-cover"
              />

              <div className="p-4">
                <p className="text-sm font-bold text-green-400">Popular today</p>
                <h3 className="mt-1 text-3xl font-black">Grilled Chicken Bowl</h3>
                <p className="mt-2 text-zinc-300">520 kcal • 42g protein • 28 LYD</p>
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
            <h2 className="text-4xl font-black tracking-tight">Healthy places</h2>
          </div>
          <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-900 shadow-sm">
            Sort by rating
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foodBusinesses.map((business) => (
            <article
              key={business.id}
              className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              <div className="relative h-64 bg-zinc-100">
                <Image
                  src={business.image}
                  alt={business.name}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />

                {business.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white shadow-lg">
                    Featured
                  </div>
                )}

                {business.verified && (
                  <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-green-700 shadow-lg">
                    ✓ Verified
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {business.type}
                  </span>
                  <span className="text-sm font-black text-zinc-500">
                    ⭐ {business.rating} ({business.reviews})
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{business.name}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  {business.area}, {business.city}
                </p>

                <div className="mt-5 rounded-3xl bg-[#f6f8f5] p-5">
                  <p className="text-xs font-bold text-zinc-500">Popular meal</p>
                  <p className="mt-1 text-lg font-black">{business.popular}</p>
                  <p className="mt-2 text-sm font-bold text-green-700">
                    {business.macros}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Price</p>
                    <p className="mt-1 font-black">{business.price}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Delivery</p>
                    <p className="mt-1 font-black">{business.delivery ? "Yes" : "No"}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/food/${business.id}`}
                    className="flex-1 rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-green-600"
                  >
                    View menu
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