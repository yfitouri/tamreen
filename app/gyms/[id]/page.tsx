import Image from "next/image";
import Link from "next/link";

const gyms = [
  {
    id: "1",
    name: "Power House Gym",
    city: "Tripoli",
    area: "Ain Zara",
    address: "Ain Zara, Tripoli, Libya",
    image: "/images/gym-power.jpg",
    rating: "4.8",
    reviews: "128",
    price: "199 LYD/month",
    dayPass: "25 LYD",
    gender: "Mixed",
    verified: true,
    description:
      "Premium equipment, expert coaches and a motivating community in central Tripoli. Perfect for strength training, cardio, functional workouts and personal coaching.",
    facilities: ["Weights", "Cardio", "CrossFit", "Parking", "Showers", "Personal Training", "Lockers", "Classes"],
    openingHours: [
      ["Monday - Thursday", "6:00 AM - 11:00 PM"],
      ["Friday", "2:00 PM - 11:00 PM"],
      ["Saturday - Sunday", "8:00 AM - 10:00 PM"],
    ],
  },
  {
    id: "2",
    name: "Benghazi Fitness Club",
    city: "Benghazi",
    area: "Al Hawari",
    address: "Al Hawari, Benghazi, Libya",
    image: "/images/gym-benghazi.jpg",
    rating: "4.6",
    reviews: "97",
    price: "160 LYD/month",
    dayPass: "20 LYD",
    gender: "Male",
    verified: true,
    description:
      "Modern gym with weights, boxing, cardio and functional training zones. A strong option for serious training in Benghazi.",
    facilities: ["Weights", "Boxing", "Cardio", "Showers", "Parking", "Personal Training"],
    openingHours: [
      ["Monday - Thursday", "7:00 AM - 11:00 PM"],
      ["Friday", "3:00 PM - 11:00 PM"],
      ["Saturday - Sunday", "9:00 AM - 10:00 PM"],
    ],
  },
  {
    id: "3",
    name: "Ladies Active Studio",
    city: "Tripoli",
    area: "Ben Ashour",
    address: "Ben Ashour, Tripoli, Libya",
    image: "/images/gym-ladies.jpg",
    rating: "4.9",
    reviews: "86",
    price: "180 LYD/month",
    dayPass: "25 LYD",
    gender: "Women-only",
    verified: true,
    description:
      "Clean women-only training studio with cardio, classes, personal training and a comfortable privacy-focused environment.",
    facilities: ["Classes", "Cardio", "Personal Training", "Privacy", "Showers", "Lockers"],
    openingHours: [
      ["Monday - Thursday", "8:00 AM - 10:00 PM"],
      ["Friday", "Closed"],
      ["Saturday - Sunday", "9:00 AM - 9:00 PM"],
    ],
  },
];

const reviews = [
  {
    name: "Omar M.",
    rating: "5.0",
    text: "Clean gym, good machines and really nice staff. Great atmosphere.",
  },
  {
    name: "Sara A.",
    rating: "4.8",
    text: "Good equipment and the WhatsApp contact makes it easy to ask about prices.",
  },
  {
    name: "Ali R.",
    rating: "4.7",
    text: "Nice place for strength training. Parking helps a lot.",
  },
];

export default async function GymProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gym = gyms.find((item) => item.id === id) || gyms[0];

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href="/gyms" className="mb-5 inline-flex font-black text-green-700">
          ← Back to gyms
        </Link>

        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative h-[420px]">
            <Image
              src={gym.image}
              alt={gym.name}
              width={1400}
              height={800}
              className="h-full w-full object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="mb-4 flex flex-wrap gap-3">
                {gym.verified && (
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-green-700">
                    ✓ Verified
                  </span>
                )}
                <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white">
                  {gym.gender}
                </span>
                <span className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-black text-white">
                  ⭐ {gym.rating} ({gym.reviews} reviews)
                </span>
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                {gym.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-zinc-200">
                {gym.area}, {gym.city}
              </p>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">About this gym</p>
            <h2 className="mt-2 text-3xl font-black">Overview</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
              {gym.description}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Membership</p>
                <p className="mt-1 text-2xl font-black">{gym.price}</p>
              </div>
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Day pass</p>
                <p className="mt-1 text-2xl font-black">{gym.dayPass}</p>
              </div>
              <div className="rounded-3xl bg-[#f6f8f5] p-5">
                <p className="text-sm font-bold text-zinc-500">Rating</p>
                <p className="mt-1 text-2xl font-black">⭐ {gym.rating}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Facilities</p>
            <h2 className="mt-2 text-3xl font-black">What they offer</h2>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gym.facilities.map((facility) => (
                <div
                  key={facility}
                  className="rounded-3xl border border-zinc-100 bg-[#f6f8f5] p-5 text-center font-black"
                >
                  {facility}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Reviews</p>
            <h2 className="mt-2 text-3xl font-black">What people say</h2>

            <div className="mt-6 grid gap-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-3xl bg-[#f6f8f5] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 font-black text-white">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-black">{review.name}</p>
                        <p className="text-sm font-bold text-green-700">⭐ {review.rating}</p>
                      </div>
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
            <h3 className="text-2xl font-black">Contact</h3>
            <p className="mt-2 text-sm text-zinc-500">{gym.address}</p>

            <div className="mt-5 grid gap-3">
              <button className="rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                Message on WhatsApp
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-green-300">
                Call gym
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-green-300">
                Get directions
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Opening hours</h3>

            <div className="mt-5 space-y-3">
              {gym.openingHours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4">
                  <p className="font-bold">{day}</p>
                  <p className="text-sm font-bold text-green-400">{time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Need a gym partner?</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Find someone training at this gym or nearby. This is what makes Tamreen social.
            </p>
            <Link
              href="/community"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
            >
              Find Your Crew
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}