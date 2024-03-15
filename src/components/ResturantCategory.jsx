import { useState } from "react";
import ItemsList from "./ItemsList";

const ResturantCategory = ({ data, show, setShowIndex }) => {
  const { title, itemCards } = data;

  
//   console.log(title, itemCards);
  return (
    <>
      <div className="w-7/12 m-auto my-4">
        <div
          className="flex justify-between box-border px-2 font-bold text-lg mb-6 cursor-pointer"
          onClick={() => setShowIndex()}
        >
          <span>
            {title} ({itemCards.length})
          </span>
          <span className="text-sm inline-flex items-center text-gray-400">
            {show ? (
              <span className="transform rotate-180">&#x25BC;</span>
            ) : (
              <span className="transform">&#x25BC;</span>
            )}
          </span>
        </div>

        {show && <ItemsList items={itemCards} />}
      </div>
    </>
  );
};

export default ResturantCategory;
