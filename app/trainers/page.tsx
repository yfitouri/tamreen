import { trainers } from "@/lib/data";
import { ListingCard } from "@/components/Cards";
export default function TrainersPage(){return <main className="container"><section className="page-hero"><span className="kicker">Coaches</span><h1>Find a trainer that matches your goal.</h1><div className="filters"><input className="input" placeholder="Search body building, weight loss, boxing..."/></div></section><div className="grid grid-3">{trainers.map(x=><ListingCard key={x.id} item={x} type="trainer"/>)}</div></main>}
