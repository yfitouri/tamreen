"use client";

import { useMemo, useState } from "react";

const activityLevels = [
  { label: "Low", value: 1.2, text: "Desk job, little movement" },
  { label: "Light", value: 1.375, text: "1-3 workouts per week" },
  { label: "Moderate", value: 1.55, text: "3-5 workouts per week" },
  { label: "Active", value: 1.725, text: "6+ workouts per week" },
];

const goals = ["Fat loss", "Maintain", "Muscle gain"];

export default function CaloriesPage() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(80);
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState("Fat loss");

  const results = useMemo(() => {
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const maintenance = Math.round(bmr * activity);
    const cutting = maintenance - 400;
    const bulking = maintenance + 300;
    const proteinLow = Math.round(weight * 1.8);
    const proteinHigh = Math.round(weight * 2.2);
    const water = Math.round((weight * 35) / 1000 * 10) / 10;

    const target =
      goal === "Fat loss" ? cutting : goal === "Muscle gain" ? bulking : maintenance;

    return {
      bmr: Math.round(bmr),
      maintenance,
      cutting,
      bulking,
      proteinLow,
      proteinHigh,
      water,
      target,
    };
  }, [gender, age, height, weight, activity, goal]);

  return (
    <main className="min-h-screen bg-[#f6f8f5] text-zinc-950">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-sm">
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Calories Calculator
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Know your target. Make food simple.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Estimate your maintenance, cutting and bulking calories, plus protein
                and water targets. Simple numbers to help users start.
              </p>
            </div>

            <div className="relative rounded-[2.5rem] bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold text-green-400">Your daily target</p>
              <h3 className="mt-2 text-6xl font-black">{results.target}</h3>
              <p className="mt-1 text-zinc-300">calories for {goal.toLowerCase()}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">
                    {results.proteinLow}-{results.proteinHigh}g
                  </p>
                  <p className="text-xs text-zinc-300">Protein</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">{results.water}L</p>
                  <p className="text-xs text-zinc-300">Water</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-gradient-to-r from-red-600 via-zinc-950 to-green-600" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-20 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-8">
          <p className="font-bold text-green-700">Your details</p>
          <h2 className="mt-2 text-3xl font-black">Calculate your calories</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-black text-zinc-700">Gender</label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {["male", "female"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setGender(item)}
                    className={`rounded-2xl px-5 py-4 text-sm font-black capitalize ${
                      gender === item
                        ? "bg-zinc-950 text-white"
                        : "border border-zinc-200 bg-white text-zinc-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-black text-zinc-700">Goal</label>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {goals.map((item) => (
                  <button
                    key={item}
                    onClick={() => setGoal(item)}
                    className={`rounded-2xl px-4 py-4 text-sm font-black ${
                      goal === item
                        ? "bg-green-600 text-white"
                        : "border border-zinc-200 bg-white text-zinc-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <NumberInput label="Age" value={age} setValue={setAge} suffix="years" />
            <NumberInput label="Height" value={height} setValue={setHeight} suffix="cm" />
            <NumberInput label="Weight" value={weight} setValue={setWeight} suffix="kg" />

            <div>
              <label className="text-sm font-black text-zinc-700">Activity level</label>
              <div className="mt-3 grid gap-3">
                {activityLevels.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActivity(item.value)}
                    className={`rounded-2xl p-4 text-left transition ${
                      activity === item.value
                        ? "bg-zinc-950 text-white"
                        : "border border-zinc-200 bg-white text-zinc-950 hover:border-green-300"
                    }`}
                  >
                    <p className="font-black">{item.label}</p>
                    <p
                      className={`mt-1 text-sm ${
                        activity === item.value ? "text-zinc-300" : "text-zinc-500"
                      }`}
                    >
                      {item.text}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Results</h3>

            <div className="mt-5 space-y-3">
              <ResultRow label="BMR" value={`${results.bmr} kcal`} />
              <ResultRow label="Maintenance" value={`${results.maintenance} kcal`} />
              <ResultRow label="Cutting" value={`${results.cutting} kcal`} />
              <ResultRow label="Bulking" value={`${results.bulking} kcal`} />
              <ResultRow
                label="Protein"
                value={`${results.proteinLow}-${results.proteinHigh}g`}
              />
              <ResultRow label="Water" value={`${results.water}L`} />
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-green-600 via-zinc-950 to-red-600 p-6 text-white shadow-sm">
            <h3 className="text-2xl font-black">Simple advice</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-100">
              Start with these numbers for 2 weeks, track your weight and energy, then adjust
              slowly. Don’t overcomplicate it.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

function NumberInput({
  label,
  value,
  setValue,
  suffix,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  suffix: string;
}) {
  return (
    <div>
      <label className="text-sm font-black text-zinc-700">{label}</label>
      <div className="mt-3 flex items-center rounded-2xl border border-zinc-200 bg-white px-4 py-3">
        <input
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full bg-transparent text-xl font-black outline-none"
        />
        <span className="text-sm font-bold text-zinc-500">{suffix}</span>
      </div>
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#f6f8f5] p-4">
      <p className="font-bold text-zinc-500">{label}</p>
      <p className="font-black">{value}</p>
    </div>
  );
}