"use client";

import { IExercise } from "@/app/IExercise";
import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { toast } from "react-toastify";

const Button = ({ exc }: { exc: IExercise }) => {
  const { save, setsave, add, setadd } = useContext(AppContext);

  const handleAdd = () => {
    const alreadyAdded = add.some((item) => item.id === exc.id);

    if (alreadyAdded) {
      toast.warning(`${exc.name} is already added!`);
      return;
    }

    if (add.length >= 5) {
      toast.warning("You can add maximum 5 exercises!");
      return;
    }

    setadd((prev) => [...prev, exc]);

    toast.success(`${exc.name} Add To Today's plan`);
  };

  const handleSave = () => {
    const alreadySaved = save.some((item) => item.id === exc.id);

    if (alreadySaved) {
      toast.warning(`${exc.name} is already Saved!`);
      return;
    }

    if (save.length >= 5) {
      toast.warning("You can save maximum 5 exercises!");
      return;
    }

    setsave((prev) => [...prev, exc]);

    toast.success(`${exc.name} Add To Saved Plan!`);
  };

  return (
    <div>
      <div className="mt-6 flex gap-3">
        <button
          disabled={add.length >= 5}
          onClick={handleAdd}
          className={`flex items-center gap-1 rounded-xl px-6 py-3 font-medium transition ${
            add.length >= 5
              ? "cursor-not-allowed bg-gray-700 text-gray-400"
              : "bg-[#D7FF00] text-black hover:opacity-90"
          }`}
        >
          <AiOutlineCalendar />

         Add to today&apos;s plan
        </button>

        <button
          
          onClick={handleSave}
          className={`flex items-center gap-1 rounded-xl border px-6 py-3 transition  }`}
        >
          <CiBookmark />

          Save for later
        </button>
      </div>
    </div>
  );
};

export default Button;
