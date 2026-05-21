"use client";

import { useEffect, useState } from "react";

type CommunityPost = {
  id: number;
  user_id: number;
  full_name: string;
  city: string;
  sport: string;
  title: string;
  description?: string;
  event_time?: string;
  needed_people: number;
  whatsapp?: string;
  status: string;
  created_at: string;
};

const sports = [
  "Football",
  "Padel",
  "Gym",
  "Cycling",
  "Running",
  "Swimming",
  "Hiking",
  "Diving",
  "Boxing",
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [sport, setSport] = useState("Football");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [neededPeople, setNeededPeople] = useState(0);
  const [whatsapp, setWhatsapp] = useState("");

  const [message, setMessage] = useState("");

  async function loadPosts() {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/community");
      const data = await res.json();

      setPosts(data.posts || []);
    } catch (error) {
      console.error(error);
      setMessage("Cannot load community posts. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function createPost() {
    setMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to create a post.");
      return;
    }

    if (!title || !sport) {
      setMessage("Please add sport and title.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sport,
          title,
          description,
          event_time: eventTime,
          needed_people: neededPeople,
          whatsapp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not create post.");
        return;
      }

      setTitle("");
      setDescription("");
      setEventTime("");
      setNeededPeople(0);
      setWhatsapp("");
      setShowForm(false);

      await loadPosts();
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
                Community
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find people to train, play and move with.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Post what you want to do today. Find football players, padel partners,
                gym buddies, cycling groups, hiking friends and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  + Create Post
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                  Nearby
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                  All Sports
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Live community</p>
              <h3 className="mt-2 text-5xl font-black">{posts.length}</h3>
              <p className="mt-1 text-zinc-300">active posts</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">⚽</p>
                  <p className="text-xs text-zinc-300">Football</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">🎾</p>
                  <p className="text-xs text-zinc-300">Padel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        {message && (
          <div className="mb-5 rounded-3xl bg-red-50 p-5 text-sm font-black text-red-700">
            {message}
          </div>
        )}

        {showForm && (
          <div className="mb-8 rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Create post</p>
            <h2 className="mt-2 text-3xl font-black">What are you looking for?</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-black text-zinc-700">Sport</label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                >
                  {sports.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">
                  Time / date
                </label>
                <input
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  placeholder="Tonight 8PM, Friday morning..."
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-black text-zinc-700">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Need 2 players tonight"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-black text-zinc-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell people more details..."
                  rows={4}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">
                  Needed people
                </label>
                <input
                  type="number"
                  value={neededPeople}
                  onChange={(e) => setNeededPeople(Number(e.target.value))}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">
                  WhatsApp optional
                </label>
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+218..."
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={createPost}
                className="rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Post now
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-black text-zinc-900 transition hover:border-green-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">Find Your Crew</p>
            <h2 className="text-4xl font-black tracking-tight">Latest posts</h2>
          </div>
        </div>

        {loading ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center font-black shadow-sm">
            Loading posts...
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center shadow-sm">
            <h3 className="text-3xl font-black">No posts yet</h3>
            <p className="mt-2 text-zinc-500">
              Be the first person to create a community post.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 font-black text-white">
                      {post.full_name?.[0] || "U"}
                    </div>
                    <div>
                      <p className="font-black">{post.full_name}</p>
                      <p className="text-sm font-semibold text-zinc-500">
                        {post.city || "Libya"}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {post.sport}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{post.title}</h3>

                {post.description && (
                  <p className="mt-3 leading-7 text-zinc-600">{post.description}</p>
                )}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Time</p>
                    <p className="mt-1 font-black">
                      {post.event_time || "Flexible"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Need</p>
                    <p className="mt-1 font-black">
                      {post.needed_people || 0} people
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-full bg-green-600 px-5 py-3 text-sm font-black text-white transition hover:bg-green-700">
                    I’m interested
                  </button>

                  {post.whatsapp && (
                    <a
                      href={`https://wa.me/${post.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-black text-zinc-900 transition hover:border-green-300"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}