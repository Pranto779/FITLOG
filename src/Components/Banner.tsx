import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <section className="container mx-auto mt-6 px-5 sm:mt-8 lg:mt-5">
      <div className="flex flex-col items-center gap-10 overflow-hidden rounded-2xl border border-slate-700 bg-gray-900 px-6 py-10 sm:px-10 sm:py-14 lg:flex-row lg:px-12 lg:py-10">
        <div className="w-full space-y-5 text-center lg:w-[60%] lg:text-left">
          <p className="font-semibold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h2
            className={`${oswald.className} text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl`}
          >
            TRAIN WITH INTENT. LOG <br className="hidden sm:block" />
            EVERY SET.
          </h2>

          <p className="mx-auto max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0 lg:text-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="rounded-xl bg-[#C2F800] px-5 py-3 font-semibold text-black transition hover:bg-[#d5ff33]">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="w-full lg:w-[40%]">
          <Image
            src={banner}
            alt="FitLog workout banner"
            className="mx-auto h-auto w-full max-w-md object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
