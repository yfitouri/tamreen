import { events } from "@/lib/data";
import { EventCard } from "@/components/Cards";
export default function Events(){return <main className="container"><section className="page-hero"><span className="kicker">Events</span><h1>Join matches, runs, tournaments and weekend activities.</h1><div className="filters"><input className="input" placeholder="Search events in Tripoli, Benghazi, Misrata..."/></div></section><div className="grid grid-3">{events.map(e=><EventCard key={e.id} event={e}/>)}</div></main>}
