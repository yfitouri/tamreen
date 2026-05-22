"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  saved_count?: number;
  is_saved?: number;
};

export default function GymsPage() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadGyms() {
    try {
      setLoading(true);

      const token = localStorage.getItem("tamreen-token");

      const res = await fetch("http://45.141.36.132:5000/api/gyms", {
        headers: token
          ? {
            Authorization: `Bearer ${token}`,
          }
          : {},
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not load gyms.");
        return;
      }

      setGyms(data.gyms || []);
    } catch (error) {
      console.error(error);
      setMessage("Cannot load gyms. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGyms();
  }, []);

  async function saveGym(gymId: number) {
    setMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to save gyms.");
      return;
    }

    try {
      const res = await fetch(`http://45.141.36.132:5000/api/gyms/${gymId}/save`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not save gym.");
        return;
      }

      await loadGyms();
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_380px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Gyms
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find gyms across Libya.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Discover verified gyms, training spaces, ladies-only gyms, strength gyms,
                fitness clubs and places to train near you.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20">
                  All Gyms
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900">
                  Verified
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900">
                  Near Me
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Live directory</p>
              <h3 className="mt-2 text-5xl font-black">{gyms.length}</h3>
              <p className="mt-1 text-zinc-300">active gyms</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">🏋️</p>
                  <p className="text-xs text-zinc-300">Strength</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">💪</p>
                  <p className="text-xs text-zinc-300">Fitness</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        {message && (
          <div className="mb-5 rounded-3xl bg-red-50 p-5 text-sm font-black text-red-700">
            {message}
          </div>
        )}

        <div className="mb-8">
          <p className="font-bold text-green-700">Explore</p>
          <h2 className="text-4xl font-black tracking-tight">Gym listings</h2>
        </div>

        {loading ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center font-black shadow-sm">
            Loading gyms...
          </div>
        ) : gyms.length === 0 ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center shadow-sm">
            <h3 className="text-3xl font-black">No gyms yet</h3>
            <p className="mt-2 text-zinc-500">
              Gyms will appear here once added to the database.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gyms.map((gym) => (
              <article
                key={gym.id}
                className="overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className="relative h-56 bg-zinc-100">
                  <Image
                    src={gym.image_url || "/images/gym-power.jpg"}
                    alt={gym.name}
                    fill
                    className="object-cover"
                  />

                  {gym.is_verified ? (
                    <span className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white">
                      Verified
                    </span>
                  ) : (
                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-zinc-900">
                      Listed
                    </span>
                  )}

                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-zinc-900">
                      ⭐ {gym.rating || "New"}
                    </span>

                    <button
                      onClick={() => saveGym(gym.id)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-lg shadow-sm transition hover:scale-110 ${gym.is_saved
                        ? "bg-red-600 text-white"
                        : "bg-white text-zinc-900"
                        }`}
                      title={gym.is_saved ? "Saved" : "Save gym"}
                    >
                      {gym.is_saved ? "♥" : "♡"}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                      {gym.city || "Libya"}
                    </span>

                    {gym.area && (
                      <span className="rounded-full bg-[#f6f8f5] px-3 py-1 text-xs font-black text-zinc-600">
                        {gym.area}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black leading-tight">{gym.name}</h3>

                  <p className="mt-3 line-clamp-3 leading-7 text-zinc-600">
                    {gym.description || "No description added yet."}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#f6f8f5] p-4">
                      <p className="text-xs font-bold text-zinc-500">Hours</p>
                      <p className="mt-1 font-black">
                        {gym.opening_hours || "Ask gym"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-4">
                      <p className="text-xs font-bold text-green-700">Price</p>
                      <p className="mt-1 font-black text-green-700">
                        {gym.price_range || "Ask"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <Link
                      href={`/gyms/${gym.id}`}
                      className="rounded-full bg-green-600 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-green-700"



                    >

                      View Gym
                    </Link>

                    {gym.whatsapp && (
                      <a
                        href={`https://wa.me/${gym.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-black text-zinc-900"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}