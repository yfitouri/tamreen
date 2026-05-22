"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Gym = {
  id: number;
  name: string;
  city?: string;
  area?: string;
  address?: string;
  description?: string;
  facilities?: string;
  opening_hours?: string;
  price_range?: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  image_url?: string;
  rating?: number;
  is_verified?: number;
  status: string;
  created_at: string;
};

export default function GymDetailsPage() {
  const params = useParams();
  const gymId = params.id as string;

  const [gym, setGym] = useState<Gym | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadGym() {
    try {
      setLoading(true);

      const res = await fetch(`http://45.141.36.132:5000/api/gyms/${gymId}`);
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not load gym.");
        return;
      }

      setGym(data.gym);
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGym();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f8f5] px-5 py-20 text-zinc-950">
        <section className="mx-auto max-w-4xl rounded-[3rem] bg-white p-8 text-center shadow-sm">
          <h1 className="text-4xl font-black">Loading gym...</h1>
        </section>
      </main>
    );
  }

  if (!gym) {
    return (
      <main className="min-h-screen bg-[#f6f8f5] px-5 py-20 text-zinc-950">
        <section className="mx-auto max-w-4xl rounded-[3rem] bg-white p-8 text-center shadow-sm">
          <h1 className="text-4xl font-black">Gym not found</h1>
          {message && <p className="mt-3 font-bold text-red-600">{message}</p>}
          <Link
            href="/gyms"
            className="mt-6 inline-flex rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white"
          >
            Back to gyms
          </Link>
        </section>
      </main>
    );
  }

  const facilities = gym.facilities
    ? gym.facilities.split(",").map((item) => item.trim())
    : [];

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative h-[420px] bg-zinc-200">
            <Image
              src={gym.image_url || "/images/gym-power.jpg"}
              alt={gym.name}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

            <div className="absolute left-6 top-6">
              <Link
                href="/gyms"
                className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950"
              >
                ← Back to gyms
              </Link>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="mb-4 flex flex-wrap gap-3">
                {gym.is_verified ? (
                  <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-black text-white">
                    Verified gym
                  </span>
                ) : (
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-zinc-950">
                    Listed gym
                  </span>
                )}

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-black backdrop-blur">
                  ⭐ {gym.rating || "New"}
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-black backdrop-blur">
                  {gym.city || "Libya"}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                {gym.name}
              </h1>

              <p className="mt-3 text-lg font-bold text-zinc-200">
                {gym.area || "Area TBC"} • {gym.address || "Address TBC"}
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
            <h2 className="mt-2 text-3xl font-black">Gym overview</h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              {gym.description || "No description added yet."}
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Facilities</p>
            <h2 className="mt-2 text-3xl font-black">What they offer</h2>

            {facilities.length === 0 ? (
              <p className="mt-5 text-zinc-500">No facilities listed yet.</p>
            ) : (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {facilities.map((facility) => (
                  <div
                    key={facility}
                    className="rounded-2xl bg-[#f6f8f5] p-4 font-black"
                  >
                    ✅ {facility}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Reviews</p>
            <h2 className="mt-2 text-3xl font-black">Member reviews</h2>

            <div className="mt-6 rounded-3xl bg-[#f6f8f5] p-5">
              <p className="font-black">Reviews coming soon</p>
              <p className="mt-2 text-sm text-zinc-500">
                Later we’ll let users rate gyms and leave feedback.
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Gym details</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-[#f6f8f5] p-4">
                <p className="text-xs font-bold text-zinc-500">Opening hours</p>
                <p className="mt-1 font-black">
                  {gym.opening_hours || "Ask gym"}
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-4">
                <p className="text-xs font-bold text-green-700">Price range</p>
                <p className="mt-1 font-black text-green-700">
                  {gym.price_range || "Ask gym"}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6f8f5] p-4">
                <p className="text-xs font-bold text-zinc-500">Location</p>
                <p className="mt-1 font-black">
                  {gym.address || gym.area || gym.city || "Location TBC"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Contact gym</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Message the gym directly or check their social media.
            </p>

            <div className="mt-5 grid gap-3">
              {gym.whatsapp && (
                <a
                  href={`https://wa.me/${gym.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  className="rounded-full bg-green-600 px-5 py-3 text-center text-sm font-black text-white"
                >
                  WhatsApp
                </a>
              )}

              {gym.phone && (
                <a
                  href={`tel:${gym.phone}`}
                  className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-zinc-950"
                >
                  Call gym
                </a>
              )}

              {gym.instagram && (
                <p className="rounded-full bg-white/10 px-5 py-3 text-center text-sm font-black text-white">
                  Instagram: {gym.instagram}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Own this gym?</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Later gym owners can claim this listing, update details and get verified.
            </p>
            <button className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950">
              Claim listing
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}