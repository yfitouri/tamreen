import Image from "next/image";
import Link from "next/link";

const foodBusinesses = [
  {
    id: "1",
    name: "Green Bowls",
    city: "Tripoli",
    area: "Ben Ashour",
    address: "Ben Ashour, Tripoli, Libya",
    image: "/images/food-green.jpg",
    rating: "4.7",
    reviews: "89",
    type: "Healthy Restaurant",
    delivery: true,
    calories: true,
    verified: true,
    description:
      "Fresh healthy bowls, grilled chicken meals, salads and balanced meals for people who train and want to eat better without making life complicated.",
    menu: [
      { name: "Grilled Chicken Bowl", calories: "520 kcal", protein: "42g protein", price: "28 LYD" },
      { name: "Protein Power Bowl", calories: "680 kcal", protein: "55g protein", price: "30 LYD" },
      { name: "Lean Salad Box", calories: "430 kcal", protein: "35g protein", price: "24 LYD" },
    ],
  },
  {
    id: "2",
    name: "Lean Meal Prep",
    city: "Benghazi",
    area: "Al Hawari",
    address: "Al Hawari, Benghazi, Libya",
    image: "/images/food-protein.jpg",
    rating: "4.8",
    reviews: "64",
    type: "Meal Prep",
    delivery: true,
    calories: true,
    verified: true,
    description:
      "Weekly meal prep boxes with high-protein meals, clean carbs and simple macros for people on fat loss or muscle gain plans.",
    menu: [
      { name: "Chicken Rice Box", calories: "610 kcal", protein: "48g protein", price: "25 LYD" },
      { name: "Lean Beef Box", calories: "720 kcal", protein: "52g protein", price: "32 LYD" },
      { name: "Low Calorie Chicken Box", calories: "460 kcal", protein: "44g protein", price: "27 LYD" },
    ],
  },
  {
    id: "3",
    name: "Protein Power Kitchen",
    city: "Misrata",
    area: "City Centre",
    address: "City Centre, Misrata, Libya",
    image: "/images/food-protein-2.jpg",
    rating: "4.6",
    reviews: "51",
    type: "Protein Meals",
    delivery: false,
    calories: true,
    verified: true,
    description:
      "Protein-focused meals for gym users, athletes and anyone who wants a filling meal with clear calories and macros.",
    menu: [
      { name: "High Protein Bowl", calories: "680 kcal", protein: "55g protein", price: "30 LYD" },
      { name: "Egg & Chicken Plate", calories: "740 kcal", protein: "60g protein", price: "34 LYD" },
      { name: "Power Salad", calories: "500 kcal", protein: "40g protein", price: "26 LYD" },
    ],
  },
];

const reviews = [
  {
    name: "Sara A.",
    rating: "5.0",
    text: "Fresh food and the calories are really helpful when tracking meals.",
  },
  {
    name: "Omar M.",
    rating: "4.8",
    text: "Good protein portions and easy to order through WhatsApp.",
  },
  {
    name: "Ali R.",
    rating: "4.7",
    text: "Perfect after gym. Simple, clean and tastes good.",
  },
];

export default async function FoodProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const business = foodBusinesses.find((item) => item.id === id) || foodBusinesses[0];

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href="/food" className="mb-5 inline-flex font-black text-green-700">
          ← Back to healthy food
        </Link>

        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative h-[460px]">
            <Image
              src={business.image}
              alt={business.name}
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="mb-4 flex flex-wrap gap-3">
                {business.verified && (
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-green-700">
                    ✓ Verified
                  </span>
                )}
                <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white">
                  {business.type}
                </span>
                <span className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-black text-white">
                  ⭐ {business.rating} ({business.reviews} reviews)
                </span>
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                {business.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-zinc-200">
                {business.area}, {business.city}
              </p>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">About</p>
            <h2 className="mt-2 text-3xl font-black">Overview</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
              {business.description}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Delivery</p>
                <p className="mt-1 text-2xl font-black">{business.delivery ? "Yes" : "No"}</p>
              </div>
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Calories</p>
                <p className="mt-1 text-2xl font-black">{business.calories ? "Shown" : "Ask"}</p>
              </div>
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Rating</p>
                <p className="mt-1 text-2xl font-black">⭐ {business.rating}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Menu</p>
            <h2 className="mt-2 text-3xl font-black">Popular meals</h2>

            <div className="mt-6 grid gap-4">
              {business.menu.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-zinc-100 bg-[#f6f8f5] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="mt-2 font-bold text-green-700">
                        {item.calories} • {item.protein}
                      </p>
                    </div>
                    <p className="rounded-full bg-white px-4 py-2 text-sm font-black text-zinc-950">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Reviews</p>
            <h2 className="mt-2 text-3xl font-black">Customer feedback</h2>

            <div className="mt-6 grid gap-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-3xl bg-[#f6f8f5] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 font-black text-white">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-black">{review.name}</p>
                      <p className="text-sm font-bold text-green-700">⭐ {review.rating}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-7 text-zinc-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Order</h3>
            <p className="mt-2 text-sm text-zinc-500">{business.address}</p>

            <div className="mt-5 grid gap-3">
              <button className="rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                Order on WhatsApp
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-green-300">
                Call business
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-green-300">
                Get directions
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Macro friendly</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Meals with calories and protein make it easier for users to track food
              and stay consistent.
            </p>

            <div className="mt-5 grid gap-3">
              {["Calories shown", "High protein", "Clean meals"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 font-black">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Track your calories</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Use Tamreen’s calculator to estimate your maintenance, cutting and bulking calories.
            </p>
            <Link
              href="/calories"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
            >
              Open calculator
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}