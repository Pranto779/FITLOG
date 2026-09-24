"use client"
import { IExercise } from "@/app/IExercise";
import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";


const Button = ({exc}:{exc:IExercise}) => {
  const { save, setsave, add, setadd } = useContext(AppContext);

  
  return (
    <div>
      <div className="mt-6 flex gap-3">
        <button onClick={()=>(setadd([...add,exc]))} className="rounded-xl flex items-center gap-1 bg-[#D7FF00] px-6 py-3 font-medium text-black transition hover:opacity-90">
          <AiOutlineCalendar />
          Add to today&apos;s plan
        </button>

        <button onClick={()=>(setsave([...save,exc]))} className="rounded-xl border flex items-center gap-1 border-[#293142] px-6 py-3 text-gray-300 transition hover:bg-[#111827]">
          <CiBookmark /> Save for later
        </button>
      </div>
    </div>
  );
};

export default Button;
