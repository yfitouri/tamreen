import Image from "next/image";
import Link from "next/link";

const trainers = [
  {
    id: "1",
    name: "Ahmed Khaled",
    city: "Tripoli",
    area: "Ain Zara",
    image: "/images/trainer-ahmed.jpg",
    rating: "4.9",
    reviews: "86",
    speciality: "Strength • Conditioning • Fat Loss",
    price: "60 LYD/session",
    package4: "220 LYD",
    package8: "400 LYD",
    online: true,
    verified: true,
    experience: "6 years",
    clients: "120+",
    bio: "Ahmed helps people build strength, lose fat, and train with proper technique. He focuses on simple plans, consistency, and safe progress.",
    skills: ["Strength", "Fat Loss", "Conditioning", "Meal Guidance", "Beginner Friendly", "Online Coaching"],
    certifications: ["NASM Certified", "Strength & Conditioning", "Nutrition Basics"],
  },
  {
    id: "2",
    name: "Khaled Mansour",
    city: "Benghazi",
    area: "Al Hawari",
    image: "/images/trainer-khaled.jpg",
    rating: "4.8",
    reviews: "74",
    speciality: "Bodybuilding • Muscle Gain",
    price: "55 LYD/session",
    package4: "200 LYD",
    package8: "370 LYD",
    online: true,
    verified: true,
    experience: "8 years",
    clients: "160+",
    bio: "Khaled specialises in muscle gain, bodybuilding and gym confidence. His coaching is direct, structured and focused on progress.",
    skills: ["Bodybuilding", "Muscle Gain", "Strength", "Pose Coaching", "Gym Plans", "Online Coaching"],
    certifications: ["Bodybuilding Coach", "Personal Trainer", "Sports Nutrition"],
  },
  {
    id: "3",
    name: "Sara Ali",
    city: "Tripoli",
    area: "Ben Ashour",
    image: "/images/trainer-sara.jpg",
    rating: "5.0",
    reviews: "91",
    speciality: "Women’s Fitness • Fat Loss",
    price: "70 LYD/session",
    package4: "260 LYD",
    package8: "490 LYD",
    online: false,
    verified: true,
    experience: "5 years",
    clients: "100+",
    bio: "Sara supports women with confidence, fat loss, strength and healthy habits in a comfortable and professional environment.",
    skills: ["Women’s Fitness", "Fat Loss", "Strength", "Mobility", "Beginner Friendly", "Habit Building"],
    certifications: ["Certified PT", "Women’s Fitness", "Mobility Training"],
  },
];

const reviews = [
  {
    name: "Mariam A.",
    rating: "5.0",
    text: "Very professional and explains everything clearly. I felt confident from the first session.",
  },
  {
    name: "Omar M.",
    rating: "4.9",
    text: "Good plan, simple exercises and real progress every week.",
  },
  {
    name: "Ali R.",
    rating: "4.8",
    text: "Great coach. Helped me fix my technique and stay consistent.",
  },
];

export default async function TrainerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trainer = trainers.find((item) => item.id === id) || trainers[0];

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Link href="/trainers" className="mb-5 inline-flex font-black text-green-700">
          ← Back to trainers
        </Link>

        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[440px_1fr]">
            <div className="relative h-[560px] bg-zinc-100">
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={700}
                height={900}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute left-5 top-5 flex gap-3">
                {trainer.verified && (
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-green-700 shadow-lg">
                    ✓ Verified
                  </span>
                )}
                <span className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-black text-white shadow-lg">
                  ⭐ {trainer.rating}
                </span>
              </div>
            </div>

            <div className="relative p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />

              <div className="relative">
                <p className="font-bold text-green-700">Trainer profile</p>

                <h1 className="mt-3 text-5xl font-black leading-tight tracking-tight md:text-7xl">
                  {trainer.name}
                </h1>

                <p className="mt-3 text-xl font-bold text-zinc-700">
                  {trainer.speciality}
                </p>

                <p className="mt-2 text-zinc-500">
                  {trainer.area}, {trainer.city} • {trainer.online ? "Online + in person" : "In person only"}
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                  {trainer.bio}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-3xl bg-[#f6f8f5] p-5">
                    <p className="text-sm font-bold text-zinc-500">Experience</p>
                    <p className="mt-1 text-2xl font-black">{trainer.experience}</p>
                  </div>
                  <div className="rounded-3xl bg-[#f6f8f5] p-5">
                    <p className="text-sm font-bold text-zinc-500">Clients</p>
                    <p className="mt-1 text-2xl font-black">{trainer.clients}</p>
                  </div>
                  <div className="rounded-3xl bg-[#f6f8f5] p-5">
                    <p className="text-sm font-bold text-zinc-500">Reviews</p>
                    <p className="mt-1 text-2xl font-black">{trainer.reviews}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                    Book session
                  </button>
                  <button className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-black text-zinc-950 transition hover:-translate-y-1 hover:border-green-300">
                    Message on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Skills</p>
            <h2 className="mt-2 text-3xl font-black">What they can help with</h2>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {trainer.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-3xl border border-zinc-100 bg-[#f6f8f5] p-5 text-center font-black"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Certifications</p>
            <h2 className="mt-2 text-3xl font-black">Qualifications</h2>

            <div className="mt-6 grid gap-3">
              {trainer.certifications.map((cert) => (
                <div key={cert} className="rounded-3xl bg-[#f6f8f5] p-5 font-black">
                  ✓ {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Reviews</p>
            <h2 className="mt-2 text-3xl font-black">Client feedback</h2>

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
            <h3 className="text-2xl font-black">Session prices</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-[#f6f8f5] p-4">
                <p className="text-xs font-bold text-zinc-500">1 Session</p>
                <p className="mt-1 text-xl font-black">{trainer.price}</p>
              </div>
              <div className="rounded-2xl bg-[#f6f8f5] p-4">
                <p className="text-xs font-bold text-zinc-500">4 Sessions</p>
                <p className="mt-1 text-xl font-black">{trainer.package4}</p>
              </div>
              <div className="rounded-2xl bg-[#f6f8f5] p-4">
                <p className="text-xs font-bold text-zinc-500">8 Sessions</p>
                <p className="mt-1 text-xl font-black">{trainer.package8}</p>
              </div>
            </div>

            <button className="mt-5 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
              Book now
            </button>
          </div>

          <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Training style</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Simple plans, clear coaching, and progress that users can actually follow.
            </p>

            <div className="mt-5 grid gap-3">
              {["Goal focused", "Beginner friendly", "Progress tracking"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 font-black">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Not sure?</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Ask the community for trainer recommendations near your city.
            </p>
            <Link
              href="/community"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
            >
              Ask community
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}