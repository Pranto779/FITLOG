import { IExercise } from "@/app/IExercise";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimpleLight } from "react-icons/pi";

interface DataProps {
  carddata: IExercise;
  onRemove: (id: number) => void;
}

const AddCard = ({ carddata, onRemove }: DataProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-[#111318] p-3 text-white sm:flex-row sm:items-center">
      <Image
        src={carddata.image}
        alt={carddata.name}
        width={90}
        height={90}
        className="h-24 w-full rounded-lg object-cover sm:h-20 sm:w-24"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase">
          {carddata.name}
        </h3>

        <p className="mt-1 truncate text-xs text-slate-400">
          {carddata.equipment}
        </p>

        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <IoTimeOutline size={18} />
            {carddata.duration}
          </span>

          <span className="flex items-center gap-1">
            <PiFireSimpleLight size={18} />
            {carddata.caloriesBurned}
          </span>

          <span className="flex items-center gap-1">
            <CiStar size={18} />
            {carddata.rating}
          </span>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap">
        <Link href={`/${carddata.id}`} className="flex-1 sm:flex-none">
          <button className="w-full rounded-full border border-slate-700 px-4 py-2 text-xs whitespace-nowrap">
            View Details
          </button>
        </Link>

        <button className="flex-1 rounded-full bg-[#c2f800] px-4 py-2 text-xs font-semibold whitespace-nowrap text-black sm:flex-none">
          ✓ Mark as Done
        </button>

        <button
          onClick={() => onRemove(carddata.id)}
          className="rounded-full px-2 py-2 text-lg text-slate-500 transition hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AddCard;
