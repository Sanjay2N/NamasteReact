import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(-1);
  const resInfo = useRestrauntMenu(resId);
  const ItemCategory =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => {
        return (
          ele?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, city, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;
  const temp =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card?.card?.card?.itemCards !== undefined
    );

  const { itemCards } = temp[0]?.card?.card;
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold mt-6 mb-2 text-2xl">{name}</h1>
        <h2 className="font-bold text-md">{cuisines.join(",")}</h2>

        {ItemCategory.map((ele, index) => {
          return (
            <ResCategory
              key={ele.card.card.id}
              data={ele.card.card}
              showItem={index === showIndex ? true : false}
              setShowIndex={setShowIndex}
              index={index}
              showIndex={showIndex}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
