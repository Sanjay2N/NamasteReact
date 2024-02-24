import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, city, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const temp =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card?.card?.card?.itemCards !== undefined
    );
  const { itemCards } = temp[0]?.card?.card;
  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h3>{avgRating}</h3>
        <h3>{city}</h3>
        <ul>
          <li>Biryani</li>
          <li>Burger</li>
          <li>Diet Coke</li>
        </ul>
      </div>
      <div>
        <ul>
          {itemCards.map((card) => {
            // console.log(card.card.info);
            return (
              <li key={card.card.info.id}>
                {card.card.info.name} - {card.card.info.price / 100}$
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
