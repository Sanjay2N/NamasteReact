import RestoCard, { withPromotedLabel } from "./RestorantCards";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // console.log("useState....");
  // console.log(useEffect());
  const [listOfRestorant, setlistOfRestorant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestoCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
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

    setFilteredList(restoList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> Looks like ur in offline</h1>;
  }

  if (filteredList === undefined || filteredList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="flex justify-between">
        <div className="p-1 m-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText} //state variable binding
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 rounded-lg m-4 bg-green-200"
            onClick={() => {
              console.log(listOfRestorant);
              const newList = listOfRestorant.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(newList);
              setFilteredList(newList);
              // console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black rounded px-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser.useName}
          ></input>
        </div>
        <div className="p-1 m-2">
          <button
            className="px-2 m-4 bg-gray-300 rounded-md"
            onClick={() => {
              const newlistOfRestorant = listOfRestorant.filter((resto) => {
                return resto.info.avgRatingString != "--";
              });
              // console.log(newlistOfRestorant);
              setFilteredList(newlistOfRestorant);
            }}
          >
            Top Rated Restorant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList.map((res) => {
          return (
            <Link
              className=""
              key={res.info.id}
              to={"/restaurant/" + res.info.id}
            >
              {res.info.veg ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestoCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
