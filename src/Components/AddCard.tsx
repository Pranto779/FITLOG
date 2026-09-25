import { IExercise } from "@/app/IExercise";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DataProps {
  carddata: IExercise;
  onRemove: (id: number) => void;
}

const AddCard = ({ carddata, onRemove }: DataProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-[#111318] p-3 text-white">

      <Image
        src={carddata.image}
        alt="image"
        width={90}
        height={90}
        className="h-20 w-23 rounded-lg object-cover"
      />

      <div className="flex-1">

        <h3 className="text-sm font-bold uppercase">
          {carddata.name}
        </h3>

        <p className="text-xs text-slate-400">
          {carddata.equipment}
        </p>

        <div className="mt-1 flex gap-3 text-xs text-slate-400">
          <span>◷ {carddata.duration}</span>
          <span>🔥 {carddata.caloriesBurned}</span>
          <span>⭐ {carddata.rating}</span>
        </div>

      </div>

      <Link href={`/${carddata.id}`}>
        <button className="rounded-full border border-slate-700 px-4 py-2 text-xs">
          View Details
        </button>
      </Link>

      <button className="rounded-full bg-[#c2f800] px-4 py-2 text-xs font-semibold text-black">
        ✓ Mark as Done
      </button>

      <button
        onClick={() => onRemove(carddata.id)}
        className="text-slate-500"
      >
        ×
      </button>

    </div>
  );
};

export default AddCard;