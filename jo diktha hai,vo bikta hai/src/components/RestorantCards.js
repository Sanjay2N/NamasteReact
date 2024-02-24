import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
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
    </div>
  );
};

export default RestoCard;
