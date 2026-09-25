"use client";

import { IExercise } from "@/app/IExercise";
import Saveplan from "@/Components/saveplan";

interface SavepageProps {
  exercises: IExercise[];
}

const Savepage = ({ exercises }: SavepageProps) => {
  return (
    <div className="space-y-4">
      {exercises.map((item) => (
        <Saveplan key={item.id} savedata={item} />
      ))}
    </div>
  );
};

export default Savepage;
