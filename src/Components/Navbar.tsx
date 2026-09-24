import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Navbar = () => {

  
    return (
        <div className=''>
            <div className="navbar container mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   <li><Link href={''}>Workouts</Link></li>
    <li><Link href={''}>My Plan</Link></li>
      </ul>
    </div>
    <a className=" flex gap-2 text-xl"> 
        <Image 
    src={logo}
    alt='Logo'
    width={30}
    height={30}
        />
        <h1 className='font-bold'>FITLOG</h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex  gap-3 items-center px-1 ">
  <li className=' rounded-4xl text-slate-300 px-3 py-1 t text-sm hover:text-[#C2F800] hover:bg-[#cee6781a]'><Link href={''}>Workouts</Link></li>
    <li className=' rounded-4xl text-slate-300 hover:bg-[#cee6781a] px-3 py-1 t text-sm hover:text-[#C2F800]' ><Link href={''}>My Plan</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2 items-center ">
   <button>Plan</button>
   <button>Saved</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;