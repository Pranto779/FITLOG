"use client";

import { AppContext } from "@/Context/DataContext";
import { Oswald } from "next/font/google";
import { useContext, useState } from "react";
import Savepage from "./savec/page";
import TodaYcard from "./today/page";

const oswald = Oswald({
  subsets: ["latin"],
});

const Planpage = () => {
  const [activeTab, setActiveTab] = useState("today");

  const { add, save } = useContext(AppContext);

  const currentExercises = activeTab === "today" ? add : save;

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
    <div className="container mx-auto my-10 px-4">
      <div className="mb-8">
        <h1 className={`${oswald.className} text-4xl font-bold text-white`}>
          MY PLAN
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your workout plan and saved exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1020] sm:grid-cols-3">
        <div className="border-b border-slate-800 p-6 text-center sm:border-b-0 sm:border-r">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Exercises
          </p>

          <h2 className="mt-2 text-5xl font-bold text-[#D7FF00]">
            {totalExercise}
          </h2>
        </div>

        <div className="border-b border-slate-800 p-6 text-center sm:border-b-0 sm:border-r">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Minutes
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">{totalMinutes}</h2>
        </div>

        <div className="p-6 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Calories
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>

      <div className="mt-6">
        <div className="inline-flex rounded-xl border border-slate-800 bg-[#0B1120] p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-lg px-6 py-2 text-xs transition-all duration-200 ${
              activeTab === "today"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-6 py-2 text-xs transition-all duration-200 ${
              activeTab === "saved"
                ? "bg-[#1C2434] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Saved
          </button>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "today" && <TodaYcard />}

        {activeTab === "saved" && <Savepage />}
      </div>
    </div>
  );
};

export default Planpage;
