import { CDN_URL } from "../utils/constants";

const RestoCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo}=resData?.info;
    return (
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0"
        }}>
            <img className="rest-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo} ruppes</h4>
        </div>
    )
}


export default RestoCard;