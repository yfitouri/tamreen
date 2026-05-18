import Link from "next/link";

const stats = [
  { label: "Gyms", value: "128", change: "+12 this month" },
  { label: "Trainers", value: "312", change: "+24 this month" },
  { label: "Food businesses", value: "89", change: "+8 this month" },
  { label: "Users", value: "12.4K", change: "+1.2K this month" },
];

const verification = [
  {
    name: "Titan Gym Tripoli",
    type: "Gym",
    city: "Tripoli",
    status: "Pending",
  },
  {
    name: "Coach Mariam",
    type: "Trainer",
    city: "Benghazi",
    status: "Pending",
  },
  {
    name: "Clean Plate Libya",
    type: "Food business",
    city: "Misrata",
    status: "Pending",
  },
];

const recentListings = [
  {
    name: "Power House Gym",
    type: "Gym",
    city: "Tripoli",
    verified: true,
  },
  {
    name: "Ahmed Khaled",
    type: "Trainer",
    city: "Tripoli",
    verified: true,
  },
  {
    name: "Green Bowls",
    type: "Healthy Food",
    city: "Tripoli",
    verified: true,
  },
  {
    name: "Friday Football Night",
    type: "Event",
    city: "Benghazi",
    verified: false,
  },
];

const actions = [
  { title: "Add gym", text: "Create a new gym listing", href: "/admin", icon: "🏋️" },
  { title: "Add trainer", text: "Create a trainer profile", href: "/admin", icon: "💪" },
  { title: "Add food business", text: "Create a healthy food listing", href: "/admin", icon: "🥗" },
  { title: "Review verification", text: "Approve verified badges", href: "/admin", icon: "✅" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <span className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm font-black text-white">
                  Admin Panel
                </span>

                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                  Manage Tamreen listings, users and verification.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                  This is the future control room for adding gyms, trainers, healthy food
                  businesses, events, challenges and verified badges.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-full bg-green-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
                    + Add listing
                  </button>
                  <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-black text-zinc-900 transition hover:-translate-y-1">
                    Verification queue
                  </button>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-zinc-950 p-6 text-white">
                <p className="text-sm font-bold text-green-400">Today</p>
                <h3 className="mt-2 text-5xl font-black">27</h3>
                <p className="mt-1 text-zinc-300">new platform actions</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">9</p>
                    <p className="text-xs text-zinc-300">New users</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">6</p>
                    <p className="text-xs text-zinc-300">New posts</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">4</p>
                    <p className="text-xs text-zinc-300">Events</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">8</p>
                    <p className="text-xs text-zinc-300">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-8 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-black">{stat.value}</p>
            <p className="mt-1 text-sm font-bold text-zinc-500">{stat.label}</p>
            <p className="mt-3 text-xs font-black text-green-700">{stat.change}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Quick actions</p>
            <h2 className="mt-2 text-3xl font-black">What do you want to manage?</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {actions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className="rounded-3xl border border-zinc-100 bg-[#f6f8f5] p-5 transition hover:-translate-y-1 hover:border-green-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
                    {action.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{action.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-zinc-500">
                    {action.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
            <p className="font-bold text-green-700">Listings</p>
            <h2 className="mt-2 text-3xl font-black">Recent listings</h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-100">
              {recentListings.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-wrap items-center justify-between gap-4 p-5 ${
                    index !== recentListings.length - 1 ? "border-b border-zinc-100" : ""
                  }`}
                >
                  <div>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                      {item.type}
                    </span>
                    <h3 className="mt-3 text-lg font-black">{item.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-zinc-500">{item.city}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black ${
                        item.verified
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.verified ? "Verified" : "Not verified"}
                    </span>
                    <button className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-black text-white">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Verification queue</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Businesses and professionals waiting for approval.
            </p>

            <div className="mt-5 space-y-3">
              {verification.map((item) => (
                <div key={item.name} className="rounded-2xl bg-[#f6f8f5] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{item.name}</p>
                      <p className="mt-1 text-sm font-semibold text-zinc-500">
                        {item.type} • {item.city}
                      </p>
                    </div>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-full bg-green-600 px-4 py-2 text-xs font-black text-white">
                      Approve
                    </button>
                    <button className="flex-1 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-black text-zinc-950">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Next backend step</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Later, this page will connect to MySQL so admin can add, edit, delete and verify real listings.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}