"use client";
import { useEffect, useState } from "react";

type FoodProps = {
  name: string;
  url: string;
};
const Food = ({ name, url }: FoodProps) => {
  const [count, setCount] = useState<number>(0);
  const up = async () => {
    await fetch(url, { method: "POST" });
    const res = await fetch(url);
    const data = await res.json();
    setCount((prev) => data.data);
  };

  useEffect(() => {
    fetch(url)
      .then((v) => v.json())
      .then((v) => setCount((prev) => v.data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        {name}의 갯수:{count}
      </div>
      <button onClick={up} className="border-2 border-red-200">
        하나 더 주문!
      </button>
    </div>
  );
};

export default Food;
