import Link from "next/link";

export function SectionHead({ title, sub, href = "#" }: { title: string; sub?: string; href?: string }) {
  return <div className="section-head"><div><h2>{title}</h2>{sub && <p>{sub}</p>}</div><Link className="view-link" href={href}>See all</Link></div>;
}

export function CategoryCard({ item }: { item: any }) {
  return <Link href={item.href || "/explore"} className="card category-card animate"><span className="category-icon">{item.icon}</span><strong>{item.title}</strong><small className="muted">{item.count}</small></Link>;
}

export function ListingCard({ item, type }: { item: any; type: "gym" | "trainer" | "food" }) {
  const base = type === "gym" ? "/gyms" : type === "trainer" ? "/trainers" : "/food";
  return <Link href={`${base}/${item.id}`} className="card animate">
    <img className="image" src={item.image} alt={item.name} />
    <div className="card-pad">
      <div className="space"><span className="rating">★ {item.rating} <span className="muted">({item.reviews})</span></span>{item.verified && <span className="verified">✓ Verified</span>}</div>
      <h3 className="card-title">{item.name}</h3>
      <p className="muted">📍 {item.area ? `${item.area}, ` : ""}{item.city}</p>
      <p>{item.description || item.bio}</p>
      <div className="row">{(item.facilities || [item.speciality, item.type]).filter(Boolean).slice(0,4).map((x: string) => <span key={x} className="pill">{x}</span>)}</div>
      <div className="space" style={{ marginTop: 14 }}><strong>{item.price}</strong><span className="btn btn-soft">View</span></div>
    </div>
  </Link>;
}

export function CommunityCard({ post, large = false }: { post: any; large?: boolean }) {
  return <div className="card card-pad animate">
    <div className="space"><div className="row"><span className="avatar" style={{ width: 34, height: 34 }} /><div><strong>{post.name}</strong><br/><small className="muted">{post.city}</small></div></div><small className="muted">2h</small></div>
    {large && <img className="image" src={post.image} alt={post.sport} style={{ margin: "16px 0", borderRadius: 20 }} />}
    <h3 className="card-title">{post.title} <span className={post.sport === "Padel" ? "green" : "red"}>{post.highlight}</span></h3>
    <span className="pill">{post.sport}</span>
    <p className="muted">🕒 {post.time} · 📍 {post.place}</p>
    <div className="space"><div className="row"><span className="avatar" style={{ width: 26, height: 26 }} /><span className="avatar" style={{ width: 26, height: 26 }} /><span className="avatar" style={{ width: 26, height: 26 }} /><small className="muted">+{post.going}</small></div><button className="btn btn-primary">I’m In</button></div>
  </div>
}

export function EventCard({ event }: { event: any }) {
  return <div className="card animate"><div style={{ position: "relative" }}><img className="image" src={event.image} alt={event.title}/><span className="pill pill-red" style={{ position:"absolute", top:14, left:14 }}>{event.date}</span></div><div className="card-pad"><h3 className="card-title">{event.title}</h3><p className="muted">📍 {event.place}, {event.city}</p><span className="pill">{event.sport}</span></div></div>;
}

export function ChallengeCard({ c }: { c: any }) {
  return <div className="card card-pad animate"><div className="row"><span className="category-icon">{c.icon}</span><div><h3 className="card-title" style={{ margin:0 }}>{c.title}</h3><p className="muted" style={{ margin:"4px 0" }}>{c.desc}</p></div></div><div className="progress" style={{ marginTop: 18 }}><i style={{ width: `${c.progress}%` }} /></div><div className="space" style={{ marginTop: 12 }}><small className="green">{c.progress}% complete</small><small className="muted">{c.joined}</small></div></div>;
}
