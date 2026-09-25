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
    const alreadyAdded = add.some(
      (item) => item.id === exc.id
    );

    if (alreadyAdded) {
      toast.warning(`${exc.name} is already added!`);
      return;
    }

    setadd((prev) => [...prev, exc]);

    toast.success(`${exc.name} Exercise added successfully!`);
  };

  const handleSave = () => {
    const alreadySaved = save.some(
      (item) => item.id === exc.id
    );

    if (alreadySaved) {
      toast.warning(`${exc.name} is already saved!`);
      return;
    }

    setsave((prev) => [...prev, exc]);

    toast.success(`${exc.name} Exercise saved successfully!`);
  };

  return (
    <div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={handleAdd}
          className="flex items-center gap-1 rounded-xl bg-[#D7FF00] px-6 py-3 font-medium text-black transition hover:opacity-90"
        >
          <AiOutlineCalendar />
          Add to today&apos;s plan
        </button>

        <button
          onClick={handleSave}
          className="flex items-center gap-1 rounded-xl border border-[#293142] px-6 py-3 text-gray-300 transition hover:bg-[#111827]"
        >
          <CiBookmark />
          Save for later
        </button>
      </div>
    </div>
  );
};

export default Button;