"use client"
import { IExercise } from '@/app/IExercise';
import React, { createContext, ReactNode, useState } from 'react';
interface Conty{
    add:IExercise[]
    setadd:React.Dispatch<React.SetStateAction<IExercise[]>>;
    save:IExercise[]
    setsave:React.Dispatch<React.SetStateAction<IExercise[]>>;
}
export const AppContext=createContext<Conty>({
    add:[],
    setadd:()=>{},
    save:[],
    setsave:()=>{},
})
const DataContext = ({children}:{children:ReactNode}) => {
    const [add,setadd]=useState<IExercise[]>([])
    const [save,setsave]=useState<IExercise[]>([])
    const share={
        add,
        setadd,
        save,
        setsave
    }
    return (
        <div>
            <AppContext.Provider value={share}>
{children}
            </AppContext.Provider>
        </div>
    );
};

export default DataContext;