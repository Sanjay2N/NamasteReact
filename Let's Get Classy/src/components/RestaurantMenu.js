import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { menuAPI } from "../utils/constants";
const RestaurantMenu = () => {
  useEffect(() => {
    console.log("use effect");
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
    fetchMenu();

    // /below function will be called on component unmouting
    return () => {
      clearInterval(timer);
      console.log("unmounted ...");
    };
  }, []);
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  // console.log("res id " + resId);
  const fetchMenu = async () => {
    const data = await fetch(menuAPI + resId);

    const json = await data.json();
    console.log(json.data);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const { name, cuisines, city, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const temp =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card?.card?.card?.itemCards !== undefined
    );
  // const { itemCards } = temp[0]?.groupedCard?.card?.card;
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
