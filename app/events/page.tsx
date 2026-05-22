"use client";

import { useEffect, useState } from "react";

type EventItem = {
  id: number;
  title: string;
  city?: string;
  location?: string;
  sport?: string;
  event_date?: string;
  event_time?: string;
  description?: string;
  organiser_name?: string;
  whatsapp?: string;
  max_people?: number;
  status: string;
  created_at: string;
  joined_count?: number;
  is_joined?: number;
};

const sports = [
  "Football",
  "Padel",
  "Running",
  "Cycling",
  "Gym",
  "Swimming",
  "Hiking",
  "Boxing",
  "Fitness",
];

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("Tripoli");
  const [location, setLocation] = useState("");
  const [sport, setSport] = useState("Football");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [maxPeople, setMaxPeople] = useState(0);

  async function loadEvents() {
    try {
      setLoading(true);

      const token = localStorage.getItem("tamreen-token");

      const res = await fetch("http://45.141.36.132:5000/api/events", {
        headers: token
          ? {
            Authorization: `Bearer ${token}`,
          }
          : {},
      });
      const data = await res.json();

      setEvents(data.events || []);
    } catch (error) {
      console.error(error);
      setMessage("Cannot load events. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function createEvent() {
    setMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to create an event.");
      return;
    }

    if (!title.trim()) {
      setMessage("Please add an event title.");
      return;
    }

    try {
      const res = await fetch("http://45.141.36.132:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          city,
          location,
          sport,
          event_date: eventDate,
          event_time: eventTime,
          description,
          whatsapp,
          max_people: maxPeople,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not create event.");
        return;
      }

      setTitle("");
      setLocation("");
      setEventDate("");
      setEventTime("");
      setDescription("");
      setWhatsapp("");
      setMaxPeople(0);
      setShowForm(false);

      await loadEvents();
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    }
  }
  async function joinEvent(eventId: number) {
    setMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to join an event.");
      return;
    }

    try {
      const res = await fetch(`http://45.141.36.132:5000/api/events/${eventId}/join`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not join event.");
        return;
      }

      await loadEvents();
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
                Events
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Find events, games and activities across Libya.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Join football matches, padel cups, city runs, hiking trips, cycling groups,
                beach workouts and fitness events.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
                >
                  + Create Event
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900">
                  This Week
                </button>

                <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900">
                  All Sports
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Live events</p>
              <h3 className="mt-2 text-5xl font-black">{events.length}</h3>
              <p className="mt-1 text-zinc-300">active events</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">⚽</p>
                  <p className="text-xs text-zinc-300">Games</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">🏃</p>
                  <p className="text-xs text-zinc-300">Fitness</p>
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
            <p className="font-bold text-green-700">Create event</p>
            <h2 className="mt-2 text-3xl font-black">Add a new activity</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-sm font-black text-zinc-700">Event title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Friday Football Match"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

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
                <label className="text-sm font-black text-zinc-700">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                >
                  <option>Tripoli</option>
                  <option>Benghazi</option>
                  <option>Misrata</option>
                  <option>Zawiya</option>
                  <option>Derna</option>
                  <option>Sabha</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Date</label>
                <input
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  placeholder="Friday / 25 May"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Time</label>
                <input
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  placeholder="8:00 PM"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-black text-zinc-700">Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ain Zara pitch"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-black text-zinc-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell people what this event is about..."
                  rows={4}
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-black text-zinc-700">Max people</label>
                <input
                  type="number"
                  value={maxPeople}
                  onChange={(e) => setMaxPeople(Number(e.target.value))}
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
                onClick={createEvent}
                className="rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Create event
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-black text-zinc-900"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="font-bold text-green-700">Upcoming</p>
          <h2 className="text-4xl font-black tracking-tight">Latest events</h2>
        </div>

        {loading ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center font-black shadow-sm">
            Loading events...
          </div>
        ) : events.length === 0 ? (
          <div className="rounded-[2.5rem] bg-white p-8 text-center shadow-sm">
            <h3 className="text-3xl font-black">No events yet</h3>
            <p className="mt-2 text-zinc-500">
              Create the first activity for the Tamreen community.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                    {event.sport || "Event"}
                  </span>

                  <span className="rounded-full bg-[#f6f8f5] px-4 py-2 text-xs font-black text-zinc-600">
                    {event.city || "Libya"}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">{event.title}</h3>

                <p className="mt-3 text-sm font-bold text-zinc-500">
                  📍 {event.location || "Location TBC"}
                </p>

                <div className="mt-5 grid grid-cols-4 gap-3">
                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Date</p>
                    <p className="mt-1 font-black">{event.event_date || "TBC"}</p>
                  </div>

                  <div className="rounded-2xl bg-[#f6f8f5] p-4">
                    <p className="text-xs font-bold text-zinc-500">Time</p>
                    <p className="mt-1 font-black">{event.event_time || "TBC"}</p>
                  </div>

                  <div className="rounded-2xl bg-green-50 p-4">
                    <p className="text-xs font-bold text-green-700">Max</p>
                    <p className="mt-1 font-black text-green-700">
                      {event.max_people || "Open"}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-red-50 p-4">
                    <p className="text-xs font-bold text-red-700">Joined</p>
                    <p className="mt-1 font-black text-red-700">
                      {event.joined_count || 0}
                    </p>
                  </div>
                </div>

                {event.description && (
                  <p className="mt-5 leading-7 text-zinc-600">{event.description}</p>
                )}

                <div className="mt-5 grid gap-3">
                  <div className="flex gap-3">
                    <button
                      onClick={() => joinEvent(event.id)}
                      className={`flex-1 rounded-full px-5 py-3 text-sm font-black text-white transition ${event.is_joined
                        ? "bg-zinc-950 hover:bg-red-600"
                        : "bg-green-600 hover:bg-green-700"
                        }`}
                    >
                      {event.is_joined ? "Joined ✓" : "Join event"}
                    </button>

                    {event.whatsapp && (
                      <a
                        href={`https://wa.me/${event.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-black text-zinc-900"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                  <a
                    href={`/events/${event.id}`}
                    className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-black text-zinc-900 transition hover:border-green-300"
                  >
                    View Event
                  </a>
                  <a
                    href={`/events/${event.id}/chat`}
                    className={`rounded-full px-5 py-3 text-center text-sm font-black transition ${event.is_joined
                      ? "bg-green-50 text-green-700 hover:bg-green-100"
                      : "pointer-events-none bg-zinc-100 text-zinc-400"
                      }`}
                  >
                    {event.is_joined ? "Open Event Chat" : "Join to unlock chat"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}