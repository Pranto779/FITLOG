import flogo from "@/assets/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
      <div className="container mx-auto my-5 flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
  <a className="flex items-center gap-2 text-xl">
    <Image
      src={flogo}
      alt="Logo"
      width={30}
      height={30}
    />

    <h1 className="font-bold">FITLOG</h1>
  </a>

  <p className="text-xs text-slate-400 sm:text-sm">
    © 2026 FitLog — Workout Library. Train hard, log honest.
  </p>
</div>
    );
};

export default Footer;