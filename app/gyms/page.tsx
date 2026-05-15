import { gyms } from "@/lib/data";
import { ListingCard } from "@/components/Cards";
export default function GymsPage(){return <main className="container"><section className="page-hero"><span className="kicker">Verified gyms</span><h1>Find your next gym in Libya.</h1><div className="filters"><input className="input" placeholder="Search by city, area, gym name..."/></div></section><div className="grid grid-3">{gyms.map(x=><ListingCard key={x.id} item={x} type="gym"/>)}</div></main>}
