import { useEffect, useState } from "react";
import { menuAPI } from "./constants";
const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("...........................................");
  const fetchData = async () => {
    const data = await fetch(menuAPI + resId);

    const json = await data.json();
    // console.log(json);
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
