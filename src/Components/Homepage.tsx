import { IExercise } from "@/app/IExercise";
import Image from "next/image";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimpleLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

interface DataProps {
  data: IExercise;
}

const Homepage = ({ data }: DataProps) => {
  return (
   <Link href={`/${data.id}`}> <div className=" w-full max-w-md overflow-hidden rounded-xl border border-[#1d2230] bg-[#0c101b] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-40 w-full overflow-hidden">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <p className="text-sm font-semibold px-3 bg-[#C2F800] rounded-2xl text-black">
            {data.muscleGroups[0]}
          </p>
          <p className="text-sm font-semibold px-3 bg-[#C2F800] rounded-2xl text-black">
            {data.muscleGroups[1]}
          </p>
        </div>

        <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-wide text-white">
          {data.name}
        </h2>

        <p className="mb-4 text-sm text-gray-400">{data.equipment}</p>

        <div className="mb-4 border-t border-[#1d2230]" />

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <IoTimeOutline size={18} />
            <span>{data.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <PiFireSimpleLight size={18} />
            <span>{data.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <CiStar size={18} />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Homepage;
