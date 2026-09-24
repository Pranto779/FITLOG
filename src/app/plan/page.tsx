import { Oswald } from "next/font/google";
import TodaYcard from "./Today/page";
import Savepage from "./savec/page";

const oswald = Oswald({
  subsets: ["latin"],
});

const Planpage = () => {
  return (
    <div className="mx-auto container my-10">
      <div className="my-4">
        <h1 className={`text-3xl font-bold ${oswald.className}`}>MY PLAN</h1>
        <p className="text-slate-400 text-md">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1020]">
        <div className="flex items-center justify-between px-8 py-7">
          <div>
            <p className="text-sm text-slate-500">Exercises</p>
            <h2 className="mt-2 text-5xl font-bold text-lime-400">2</h2>
          </div>

          <div className="h-20 w-px bg-slate-800"></div>
        </div>

        <div className="flex items-center justify-between px-8 py-7">
          <div>
            <p className="text-sm text-slate-500">Minutes</p>
            <h2 className="mt-2 text-5xl font-bold text-white">23</h2>
          </div>

          <div className="h-20 w-px bg-slate-800"></div>
        </div>

        <div className="px-8 py-7">
          <p className="text-sm text-slate-500">Calories</p>
          <h2 className="mt-2 text-5xl font-bold text-white">190</h2>
        </div>
      </div>
      <div>
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 1" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><TodaYcard></TodaYcard></div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><Savepage></Savepage></div>
</div>
      </div>
    </div>
  );
};

export default Planpage;
