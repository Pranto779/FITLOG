"use client";
import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";

const Savepage = () => {
  const { save } = useContext(AppContext);
  return (
    <div>
      {save.map((sa, ind) => {
        return (
          <div key={ind}>
            <h2>name:{sa.name} </h2>
            <div>
                <button></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Savepage;
