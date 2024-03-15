import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantPage = () => {
  const { resId } = useParams();
  const resData = useResturantMenu(resId); //12234
  const [showIndex, setShowIndex] = useState(null);

  if (resData === null) return <Shimer />;

  const { name, city, cuisines, costForTwoMessage, avgRating } =
    resData.cards[0].card.card.info;
  const { itemCards } =
    resData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categoryMenu =
    resData.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (ele) =>
        ele.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categoryMenu);

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">Name - {name}</h1>
        <h2 className="text-xl font-semibold mb-2">Area - {city}</h2>
        <p className="text-gray-600 mb-2">Cuisines - {cuisines.join(", ")}</p>
        <h5 className="text-green-500 font-semibold mb-2">
          {costForTwoMessage}
        </h5>
        <h5 className="text-blue-500 font-semibold">Rating - {avgRating}</h5>
      </div>

      <h1 className="font-bold text-2xl text-center m-5">Hotel Menu Items</h1>
      <div>
        {categoryMenu.map((ele, index) => (
          <ResturantCategory
            key={ele.card.card.title}
            data={ele.card.card}
            show={index == showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ResturantPage;
