import { categories, gyms, trainers, foodBusinesses, communityPosts, events, challenges } from "@/lib/data";
import { CategoryCard, SectionHead, ListingCard, CommunityCard, EventCard, ChallengeCard } from "@/components/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <span className="kicker">🇱🇾 Libya’s sports movement</span>
          <h1>Find your sport,<br/>your <span className="green">gym</span>,<br/>your <span className="red">crew.</span></h1>
          <p>Libya’s all-in-one sports, fitness & community platform. Discover places, meet people, join events and stay motivated.</p>
          <div className="actions"><Link className="btn btn-primary" href="/explore">Explore Now</Link><Link className="btn btn-soft" href="/register">Join Tamreen</Link></div>
        </div>
        <div className="flag-ribbon" />
        <div className="hero-glass">
          <div className="glass-stat"><strong>1,245+</strong><span>gyms & places</span></div>
          <div className="glass-stat"><strong>482+</strong><span>trainers</span></div>
          <div className="glass-stat"><strong>1,328+</strong><span>community events</span></div>
          <div className="glass-stat"><strong>689+</strong><span>healthy food places</span></div>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <SectionHead title="Explore" sub="Find what moves you" href="/explore" />
          <div className="grid grid-4">{categories.map((x) => <CategoryCard key={x.title} item={x} />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Find Your Crew" sub="Connect. Share. Get stronger together." href="/community" />
          <div className="grid grid-3">{communityPosts.map((x) => <CommunityCard key={x.id} post={x} />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Upcoming Events" sub="Join matches, runs, tournaments and weekend activities." href="/events" />
          <div className="grid grid-3">{events.map((x) => <EventCard key={x.id} event={x} />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Challenges" sub="Build streaks, earn badges and stay active." href="/challenges" />
          <div className="grid grid-4">{challenges.map((x) => <ChallengeCard key={x.id} c={x} />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Top Rated Gyms" sub="Verified places people love." href="/gyms" />
          <div className="grid grid-3">{gyms.map((x) => <ListingCard key={x.id} item={x} type="gym" />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Featured Trainers" sub="Book sessions, coaching and fitness plans." href="/trainers" />
          <div className="grid grid-3">{trainers.map((x) => <ListingCard key={x.id} item={x} type="trainer" />)}</div>
        </section>

        <section className="section">
          <SectionHead title="Healthy Food" sub="Eat clean. Train better." href="/food" />
          <div className="grid grid-2">{foodBusinesses.map((x) => <ListingCard key={x.id} item={x} type="food" />)}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

function Footer() {
  const items = [["✅", "Verified", "Gyms & Trainers"], ["👥", "Real Community", "Real Connections"], ["📅", "Events & Challenges", "Stay Motivated"], ["💚", "Healthy Lifestyle", "All in One Place"]];
  return <footer className="footer"><div className="footer-inner"><div><div className="logo"><span className="logo-mark" />Tamreen</div><p>Stronger Together. Better Every Day.</p></div>{items.map(([i,t,s]) => <div className="feature" key={t}><span>{i}</span><div><strong>{t}</strong><br/><small>{s}</small></div></div>)}</div></footer>
}
