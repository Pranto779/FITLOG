import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
});

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-[#D7FF00]" />

        <h2
          className={`${oswald.className} mt-6 text-2xl font-bold text-white`}
        >
          LOADING WORKOUTS
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Getting your exercises ready...
        </p>
      </div>
    </div>
  );
};

export default Loading;
