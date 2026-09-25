"use client";

import { IExercise } from "@/app/IExercise";
import { AppContext } from "@/Context/DataContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { IoClose, IoTimeOutline } from "react-icons/io5";
import { MdLocalFireDepartment } from "react-icons/md";

interface Saveprops {
  savedata: IExercise;
}

const Saveplan = ({ savedata }: Saveprops) => {
  const { setsave } = useContext(AppContext);

  const handleRemove = () => {
    setsave((prev) =>
      prev.filter((item) => item.id !== savedata.id)
    );
  };

  return (
    <div className="w-full rounded-2xl border border-[#1A2234] bg-[#0B1220] px-5 py-4">
      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Image */}
          <div className="h-18 w-24 overflow-hidden rounded-lg bg-slate-700">
            <Image
              src={savedata.image}
              alt={savedata.name}
              width={96}
              height={90}
              className="h-20 w-25 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
              {savedata.name}
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              {savedata.equipment}
            </p>

            <div className="mt-2 flex items-center gap-4">

              {/* Time */}
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <IoTimeOutline />
                <span>{savedata.duration}</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1 text-[11px] text-lime-400">
                <MdLocalFireDepartment />
                <span>{savedata.caloriesBurned}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-[11px] text-yellow-400">
                <FaStar />
                <span>{savedata.rating}</span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

        <Link href={`/${savedata.id}`}>
          <button
            type="button"
            className="rounded-full border border-[#273248] px-5 py-2 text-xs font-medium text-white transition-all hover:bg-[#141c2d]"
          >
            View Details
          </button>
        </Link>

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            className="flex h-8 w-8 items-center justify-center text-slate-500 transition hover:text-red-400"
          >
            <IoClose size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Saveplan;