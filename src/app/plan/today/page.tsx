"use client";

import AddCard from "@/Components/AddCard";
import { AppContext } from "@/Context/DataContext";
import { IExercise } from "@/app/IExercise";
import { useContext } from "react";

interface Props {
  exercises: IExercise[];
}

const TodaYcard = ({ exercises }: Props) => {
  const { setadd } = useContext(AppContext);

  const handleRemove = (id: number) => {
    setadd((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {exercises.map((item) => (
        <AddCard key={item.id} carddata={item} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodaYcard;
