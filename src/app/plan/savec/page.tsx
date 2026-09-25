"use client";
import Saveplan from "@/Components/saveplan";
import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";

const Savepage = () => {
  const { save } = useContext(AppContext);
  return (
    <div>
      {save.map((sa, ind) =><Saveplan key={ind} savedata={sa}></Saveplan> )}
    </div>
  );
};

export default Savepage;
