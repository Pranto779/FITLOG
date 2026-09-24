"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const Navlink = () => {
    const path=usePathname()
    return (
        <>
            <li className={`text-sm text-slate-40 ${path==='/'?"text-[#C2F800] bg-[#cffb2e4d] py-1 px-3 rounded-2xl ":""} `} ><Link href={'/'}>Workout</Link></li>
            <li><Link className={`text-sm text-slate-40 ${path==='/plan'?"text-[#C2F800] bg-[#cffb2e4d] py-1 px-3 rounded-2xl ":""} `} href={'/plan'}>Plan</Link></li>
        </>
    );
};

export default Navlink;