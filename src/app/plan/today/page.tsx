"use client";

import AddCard from "@/Components/AddCard";
import { AppContext } from "@/Context/DataContext";
import React, { useContext } from "react";

const TodaYcard = () => {
  const { add, setadd } = useContext(AppContext);

  const handleRemove = (id: number) => {
    setadd((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {add.map((ad, ind) => (
        <AddCard
          key={ind}
          carddata={ad}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default TodaYcard;