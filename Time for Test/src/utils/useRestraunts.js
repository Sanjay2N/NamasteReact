import { useState, useEffect } from "react";
const useRestraunts = () => {
  const [listOfRestorant, setlistOfRestorant] = useState([]);
  useEffect(() => {
    console.log("use effect..........");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    const resto = jsonData?.data?.cards.filter(
      (ele) =>
        ele?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );

    const restoList =
      resto[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRestorant(restoList);
  };
  return listOfRestorant;
};

export default useRestraunts;
