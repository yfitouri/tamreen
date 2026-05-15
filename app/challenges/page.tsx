import { challenges } from "@/lib/data";
import { ChallengeCard } from "@/components/Cards";
export default function Challenges(){return <main className="container"><section className="page-hero"><span className="kicker">Motivation</span><h1>Challenges, streaks and badges to keep people coming back.</h1></section><div className="grid grid-4">{challenges.map(c=><ChallengeCard key={c.id} c={c}/>)}</div></main>}
