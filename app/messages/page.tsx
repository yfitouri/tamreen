"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Conversation = {
  id: number;
  user_one_id: number;
  user_two_id: number;
  other_user_id: number;
  other_user_name: string;
  last_message?: string;
  last_message_at?: string;
  created_at: string;
};

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadConversations() {
    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setMessage("Please login first to view messages.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Could not load messages.");
        return;
      }

      setConversations(data.conversations || []);
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadConversations();
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
        <div className="rounded-[3rem] bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Messages
              </span>

              <h1 className="mt-5 text-5xl font-black tracking-tight">
                Your chats
              </h1>

              <p className="mt-3 text-zinc-500">
                Chat with people from community posts, events and groups.
              </p>
            </div>

            <Link
              href="/community"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-black text-white"
            >
              Back to Community
            </Link>
          </div>
        </div>

        {message && (
          <div className="mt-6 rounded-3xl bg-red-50 p-5 text-sm font-black text-red-700">
            {message}
          </div>
        )}

        <div className="mt-6 rounded-[2.5rem] bg-white p-5 shadow-sm">
          {loading ? (
            <p className="p-5 font-black">Loading messages...</p>
          ) : conversations.length === 0 ? (
            <div className="p-8 text-center">
              <h2 className="text-3xl font-black">No chats yet</h2>
              <p className="mt-2 text-zinc-500">
                Go to Community and message someone interested in a post.
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              {conversations.map((conversation) => (
                <Link
                  key={conversation.id}
                  href={`/messages/${conversation.id}`}
                  className="flex items-center justify-between gap-4 rounded-[2rem] bg-[#f6f8f5] p-5 transition hover:bg-green-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-950 text-lg font-black text-white">
                      {conversation.other_user_name?.[0] || "U"}
                    </div>

                    <div>
                      <h3 className="font-black">
                        {conversation.other_user_name}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-zinc-500">
                        {conversation.last_message || "No messages yet"}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-green-700">
                    Open
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}