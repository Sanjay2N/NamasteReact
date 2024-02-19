import RestoCard from "./RestorantCards";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  console.log("useState....");
  // console.log(useEffect());
  const [listOfRestorant, setlistOfRestorant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(typeof data);

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

  if (filteredList === undefined || filteredList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} //state variable binding
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // console.log(listOfRestorant);
              const newList = listOfRestorant.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredList);
              setFilteredList(newList);
              console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
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

      <div className="resto-container">
        {filteredList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
              <RestoCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
