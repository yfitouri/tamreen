"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ChatMessage = {
  id: number;
  conversation_id: number;
  sender_id: number;
  sender_name: string;
  message: string;
  is_read: number;
  created_at: string;
};

type TamreenUser = {
  id: number;
  full_name: string;
  email: string;
  role: string;
};

export default function ChatPage() {
  const params = useParams();
  const conversationId = params.id as string;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentUser, setCurrentUser] = useState<TamreenUser | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [pageMessage, setPageMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    const token = localStorage.getItem("tamreen-token");
    const savedUser = localStorage.getItem("tamreen-user");

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    if (!token) {
      setPageMessage("Please login first to view this chat.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`http://45.141.36.132:5000/api/messages/${conversationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setPageMessage(data.message || "Could not load chat.");
        return;
      }

      setMessages(data.messages || []);
    } catch (error) {
      console.error(error);
      setPageMessage("Cannot connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage() {
    setPageMessage("");

    const token = localStorage.getItem("tamreen-token");

    if (!token) {
      setPageMessage("Please login first.");
      return;
    }

    if (!newMessage.trim()) {
      return;
    }

    try {
      const res = await fetch(`http://45.141.36.132:5000/api/messages/${conversationId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: newMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPageMessage(data.message || "Could not send message.");
        return;
      }

      setNewMessage("");
      await loadMessages();
    } catch (error) {
      console.error(error);
      setPageMessage("Cannot connect to backend.");
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-8 lg:px-8">
        <div className="mb-5 rounded-[2.5rem] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Link href="/messages" className="font-black text-green-700">
                ← Back to messages
              </Link>

              <h1 className="mt-3 text-4xl font-black tracking-tight">
                Chat
              </h1>

              <p className="mt-1 text-sm font-bold text-zinc-500">
                Conversation #{conversationId}
              </p>
            </div>

            <Link
              href="/community"
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white"
            >
              Community
            </Link>
          </div>
        </div>

        {pageMessage && (
          <div className="mb-5 rounded-3xl bg-red-50 p-5 text-sm font-black text-red-700">
            {pageMessage}
          </div>
        )}

        <div className="flex flex-1 flex-col rounded-[2.5rem] bg-white p-5 shadow-sm">
          <div className="flex-1 space-y-4 overflow-y-auto rounded-[2rem] bg-[#f6f8f5] p-4">
            {loading ? (
              <p className="p-5 font-black">Loading chat...</p>
            ) : messages.length === 0 ? (
              <div className="p-8 text-center">
                <h2 className="text-3xl font-black">No messages yet</h2>
                <p className="mt-2 text-zinc-500">
                  Send the first message.
                </p>
              </div>
            ) : (
              messages.map((msg) => {
                const isMine = currentUser?.id === msg.sender_id;

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-[2rem] p-4 ${
                        isMine
                          ? "bg-green-600 text-white"
                          : "bg-white text-zinc-950"
                      }`}
                    >
                      <p
                        className={`mb-1 text-xs font-black ${
                          isMine ? "text-green-100" : "text-zinc-500"
                        }`}
                      >
                        {isMine ? "You" : msg.sender_name}
                      </p>

                      <p className="leading-7">{msg.message}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-5 flex gap-3">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Write a message..."
              className="min-w-0 flex-1 rounded-full border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-green-500"
            />

            <button
              onClick={sendMessage}
              className="rounded-full bg-green-600 px-7 py-4 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}