import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
});

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">

        <h1
          className={`${oswald.className} text-8xl font-bold text-[#D7FF00]`}
        >
          404
        </h1>

        <h2
          className={`${oswald.className} mt-4 text-3xl font-bold text-white sm:text-4xl`}
        >
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-[#D7FF00] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Back to Workout
        </Link>

      </div>
    </div>
  );
};

export default NotFound;