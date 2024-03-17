import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-100 rounded-md  hover:bg-gray-300">
      <img
        className="h-[250px] w-[300px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-mds">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo} ruppes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

//higher order component

//input-RestaurantCard => output-RestaurantCard with promotion label

export const withPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black px-1 ml-4 rounded-md">
          Promoted
        </label>
        <RestoCard resData={props.resData} />
      </div>
    );
  };
};

export default RestoCard;
