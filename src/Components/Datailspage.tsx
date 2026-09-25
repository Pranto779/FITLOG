import { IExercise } from "@/app/IExercise";
import Image from "next/image";

import Button from "./Button";

interface DatailspageProps {
  exercise: IExercise;
}

const Datailspage = ({ exercise }: DatailspageProps) => {
  return (
    <div className="rounded-3xl border border-[#111827] bg-[#060B14] p-6 text-white container mx-auto my-10">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="relative h-[700px]  overflow-hidden rounded-2xl py-20">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-black uppercase tracking-wide">
            {exercise.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {exercise.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#D7FF00] px-4 py-1.5 text-xs font-semibold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#1B2433] bg-[#0A1221]">
            {[
              ["EQUIPMENT", exercise.equipment],
              ["DIFFICULTY", exercise.difficulty],
              ["SETS", exercise.sets],
              ["REPS", exercise.reps],
              ["DURATION", `${exercise.duration} min`],
              ["CALORIES", `${exercise.caloriesBurned} kcal`],
              ["RATING", exercise.rating],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-2 px-5 py-3 ${
                  index !== 6 ? "border-b border-[#182233]" : ""
                }`}
              >
                <span className="text-[11px] tracking-widest text-gray-500">
                  {label}
                </span>

                <span className="text-right text-sm text-gray-100">
                  {value}
                </span>
              </div>
            ))}
          </div>

         
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-bold uppercase tracking-wide">
              Instructions
            </h3>

            <ol className="space-y-2 text-sm text-gray-400">
              {exercise.instructions.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span>{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

        

          <Button exc={exercise}></Button>
        </div>
      </div>
    </div>
  );
};

export default Datailspage;
