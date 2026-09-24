import { IExercise } from "./app/IExercise";

const GetData = async (): Promise<IExercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return await res.json();
};

export default GetData