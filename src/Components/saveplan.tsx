"use client";

import { IExercise } from "@/app/IExercise";
import { AppContext } from "@/Context/DataContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { IoClose, IoTimeOutline } from "react-icons/io5";
import { PiFireSimpleLight } from "react-icons/pi";

interface Saveprops {
  savedata: IExercise;
}

const Saveplan = ({ savedata }: Saveprops) => {
  const { setsave } = useContext(AppContext);

  const handleRemove = () => {
    setsave((prev) => prev.filter((item) => item.id !== savedata.id));
  };

  return (
    <div className="w-full rounded-2xl border border-[#1A2234] bg-[#0B1220] p-4 sm:px-5 sm:py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-700 sm:h-[72px] sm:w-24">
            <Image
              src={savedata.image}
              alt={savedata.name}
              width={96}
              height={90}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-extrabold uppercase tracking-wide text-white">
              {savedata.name}
            </h3>

            <p className="mt-0.5 truncate text-xs text-slate-500">
              {savedata.equipment}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-slate-400 sm:gap-4">
              <div className="flex items-center gap-1 text-[11px]">
                <IoTimeOutline size={18} />
                <span>{savedata.duration}</span>
              </div>

              <div className="flex items-center gap-1 text-[11px]">
                <PiFireSimpleLight size={18} />
                <span>{savedata.caloriesBurned}</span>
              </div>

              <div className="flex items-center gap-1 text-[11px]">
                <CiStar size={18} />
                <span>{savedata.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-4">
          <Link href={`/${savedata.id}`} className="flex-1 sm:flex-none">
            <button
              type="button"
              className="w-full rounded-full border border-[#273248] px-5 py-2 text-xs font-medium text-white transition-all hover:bg-[#141c2d] sm:w-auto"
            >
              View Details
            </button>
          </Link>

          <button
            type="button"
            onClick={handleRemove}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-[#141c2d] hover:text-white"
          >
            <IoClose size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Saveplan;
