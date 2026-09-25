"use client";

import { AppContext } from "@/Context/DataContext";
import { Oswald } from "next/font/google";
import { useContext, useState } from "react";
import Savepage from "./Savepage";
import TodaYcard from "./Todaypage";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
});

const Planpage = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const { add, save } = useContext(AppContext);

  const currentExercises = activeTab === "today" ? add : save;

  const sortedExercises = [...currentExercises].sort((a, b) => {
    switch (sortBy) {
      case "duration":
        return b.duration - a.duration;

      case "rating":
        return b.rating - a.rating;

      case "calories":
        return b.caloriesBurned - a.caloriesBurned;

      default:
        return 0;
    }
  });

  const totalExercise = currentExercises.length;

  const totalMinutes = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto my-6 px-4 sm:my-8 md:my-10">
      <div className="mb-8">
        <h1
          className={`${oswald.className} text-3xl font-bold text-white sm:text-4xl`}
        >
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Manage your workout plan and saved exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1020] sm:grid-cols-3">
        <div className="border-b border-slate-800 p-6 text-center sm:border-b-0 sm:border-r">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Exercises
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#D7FF00] sm:text-5xl">
            {totalExercise}
          </h2>
        </div>

        <div className="border-b border-slate-800 p-6 text-center sm:border-b-0 sm:border-r">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Minutes
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {totalMinutes}
          </h2>
        </div>

        <div className="p-6 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Calories
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {totalCalories}
          </h2>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex w-full rounded-xl border border-slate-800 bg-[#0B1120] p-1 sm:w-auto">
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 rounded-lg px-6 py-2 text-xs transition-all duration-200 sm:flex-none ${
              activeTab === "today"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 rounded-lg px-6 py-2 text-xs transition-all duration-200 sm:flex-none ${
              activeTab === "saved"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Saved
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-500 px-2 py-1 rounded-md">Sort by</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-[#0B1120] px-3 py-2 text-sm text-slate-600 outline-none transition hover:border-slate-600 sm:w-auto"
          >
            <option value="duration"> Duration</option>
            <option value="calories"> Calories</option>
            <option value="rating"> Rating</option>
          </select>
          
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "today" &&
          (add.length > 0 ? (
            <TodaYcard exercises={sortedExercises} />
          ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-slate-800 px-4 text-center sm:min-h-[450px]">
              <h2
                className={`${oswald.className} text-3xl font-bold text-white`}
              >
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href="/">
                <button className="mt-5 rounded-2xl bg-[#D7FF00] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
                  Go to workout
                </button>
              </Link>
            </div>
          ))}

        {activeTab === "saved" &&
          (save.length > 0 ? (
            <Savepage exercises={sortedExercises} />
          ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-slate-800 px-4 text-center sm:min-h-[450px]">
              <h2
                className={`${oswald.className} text-3xl font-bold text-white`}
              >
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href="/">
                <button className="mt-5 rounded-2xl bg-[#D7FF00] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
                  Go to workout
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Planpage;
