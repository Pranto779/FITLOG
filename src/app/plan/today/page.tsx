"use client";

import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";

const TodaYcard = () => {
  const {add} = useContext(AppContext);

  return (
    <div>
    {
        add.map((ad,ind)=>{
            return <div key={ind}>
<h2>name:{ad.name} </h2>
            </div>
        })
    }
    </div>
  );
};

export default TodaYcard;
