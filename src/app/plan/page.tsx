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
      
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1
          className={`${oswald.className} text-3xl font-bold text-white sm:text-4xl`}
        >
          MY PLAN
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Manage your workout plan and saved exercises.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1020] sm:grid-cols-3">
        
        {/* Exercises */}
        <div className="border-b border-slate-800 p-5 text-center sm:border-b-0 sm:border-r sm:p-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Exercises
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#D7FF00] sm:text-5xl">
            {totalExercise}
          </h2>
        </div>

        {/* Minutes */}
        <div className="border-b border-slate-800 p-5 text-center sm:border-b-0 sm:border-r sm:p-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Minutes
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {totalMinutes}
          </h2>
        </div>

        {/* Calories */}
        <div className="p-5 text-center sm:p-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Calories
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {totalCalories}
          </h2>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Tabs */}
        <div className="flex w-full rounded-xl border border-slate-800 bg-[#0B1120] p-1 md:w-auto">
          
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 rounded-lg px-4 py-2.5 text-xs transition-all duration-200 sm:px-6 md:flex-none ${
              activeTab === "today"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 rounded-lg px-4 py-2.5 text-xs transition-all duration-200 sm:px-6 md:flex-none ${
              activeTab === "saved"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Sort */}
        <div className="flex w-full items-center justify-between gap-2 sm:justify-end md:w-auto">
          
          <p className="rounded-md px-1 py-1 text-xs text-slate-500 sm:px-2 sm:text-sm">
            Sort by
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-[#0B1120] px-3 py-2.5 text-sm text-slate-300 outline-none transition hover:border-slate-600 sm:w-auto"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

        </div>
      </div>

      {/* Content */}
      <div className="mt-6">

        {/* Today */}
        {activeTab === "today" &&
          (add.length > 0 ? (
            <TodaYcard exercises={sortedExercises} />
          ) : (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-slate-800 px-5 text-center sm:min-h-[450px]">

              <h2
                className={`${oswald.className} text-2xl font-bold text-white sm:text-3xl`}
              >
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href="/">
                <button className="mt-5 rounded-2xl bg-[#D7FF00] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
                  Go to workout
                </button>
              </Link>

            </div>
          ))}

        {/* Saved */}
        {activeTab === "saved" &&
          (save.length > 0 ? (
            <Savepage exercises={sortedExercises} />
          ) : (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-slate-800 px-5 text-center sm:min-h-[450px]">

              <h2
                className={`${oswald.className} text-2xl font-bold text-white sm:text-3xl`}
              >
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
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