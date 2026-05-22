"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<EventItem | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadEvent() {
    try {
      setLoading(true);

      const token = localStorage.getItem("tamreen-token");

      const res = await fetch(`http://45.141.36.132:5000/api/events`, {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not load event.");
        return;
      }

      const foundEvent = (data.events || []).find(
        (item: EventItem) => Number(item.id) === Number(eventId)
      );

      if (!foundEvent) {
        setMessage("Event not found.");
        return;
      }

      setEvent(foundEvent);
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  async function joinEvent() {
    setMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to join this event.");
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

      await loadEvent();
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    }
  }

  useEffect(() => {
    loadEvent();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f8f5] px-5 py-20 text-zinc-950">
        <section className="mx-auto max-w-4xl rounded-[3rem] bg-white p-8 text-center shadow-sm">
          <h1 className="text-4xl font-black">Loading event...</h1>
        </section>
      </main>
    );
  }

  if (!event) {
    return (
      <main className="min-h-screen bg-[#f6f8f5] px-5 py-20 text-zinc-950">
        <section className="mx-auto max-w-4xl rounded-[3rem] bg-white p-8 text-center shadow-sm">
          <h1 className="text-4xl font-black">Event not found</h1>
          {message && <p className="mt-3 font-bold text-red-600">{message}</p>}
          <Link
            href="/events"
            className="mt-6 inline-flex rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white"
          >
            Back to events
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <Link href="/events" className="font-black text-green-700">
                ← Back to events
              </Link>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                  {event.sport || "Event"}
                </span>

                <span className="rounded-full bg-[#f6f8f5] px-4 py-2 text-sm font-black text-zinc-600">
                  {event.city || "Libya"}
                </span>

                {event.is_joined ? (
                  <span className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-black text-white">
                    Joined ✓
                  </span>
                ) : (
                  <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">
                    Not joined
                  </span>
                )}
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                {event.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
                {event.description || "No description has been added yet."}
              </p>

              {message && (
                <div className="mt-6 rounded-3xl bg-red-50 p-5 text-sm font-black text-red-700">
                  {message}
                </div>
              )}

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="rounded-[2rem] bg-[#f6f8f5] p-5">
                  <p className="text-sm font-bold text-zinc-500">Date</p>
                  <p className="mt-1 text-xl font-black">
                    {event.event_date || "TBC"}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-[#f6f8f5] p-5">
                  <p className="text-sm font-bold text-zinc-500">Time</p>
                  <p className="mt-1 text-xl font-black">
                    {event.event_time || "TBC"}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-green-50 p-5">
                  <p className="text-sm font-bold text-green-700">Joined</p>
                  <p className="mt-1 text-xl font-black text-green-700">
                    {event.joined_count || 0}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-red-50 p-5">
                  <p className="text-sm font-bold text-red-700">Max</p>
                  <p className="mt-1 text-xl font-black text-red-700">
                    {event.max_people || "Open"}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[2.5rem] bg-zinc-950 p-6 text-white">
                <p className="text-sm font-bold text-green-400">Location</p>
                <h2 className="mt-2 text-3xl font-black">
                  {event.location || "Location TBC"}
                </h2>
                <p className="mt-2 text-zinc-300">
                  Organised by {event.organiser_name || "Tamreen member"}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={joinEvent}
                  className={`rounded-full px-7 py-4 text-sm font-black text-white transition ${
                    event.is_joined
                      ? "bg-zinc-950 hover:bg-red-600"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {event.is_joined ? "Leave event" : "Join event"}
                </button>

                <Link
                  href={`/events/${event.id}/chat`}
                  className={`rounded-full px-7 py-4 text-sm font-black transition ${
                    event.is_joined
                      ? "bg-green-50 text-green-700 hover:bg-green-100"
                      : "pointer-events-none bg-zinc-100 text-zinc-400"
                  }`}
                >
                  {event.is_joined ? "Open Event Chat" : "Join to unlock chat"}
                </Link>

                {event.whatsapp && (
                  <a
                    href={`https://wa.me/${event.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-black text-zinc-900"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>
    </main>
  );
}