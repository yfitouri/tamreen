import { foodBusinesses } from "@/lib/data";
import { ListingCard } from "@/components/Cards";
export default function FoodPage(){return <main className="container"><section className="page-hero"><span className="kicker">Healthy food</span><h1>Eat clean. Train better.</h1><div className="filters"><input className="input" placeholder="Search meals, protein, delivery..."/></div></section><div className="grid grid-2">{foodBusinesses.map(x=><ListingCard key={x.id} item={x} type="food"/>)}</div></main>}
