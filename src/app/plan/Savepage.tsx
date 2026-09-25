"use client";

import { IExercise } from "@/app/IExercise";
import Saveplan from "@/Components/saveplan";

interface SavepageProps {
  exercises: IExercise[];
}

const Savepage = ({ exercises }: SavepageProps) => {
  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {exercises.map((item) => (
        <div key={item.id} className="w-full">
          <Saveplan savedata={item} />
        </div>
      ))}
    </div>
  );
};

export default Savepage;