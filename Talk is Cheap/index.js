import React from "react";
import ReactDOM from "react-dom/client";

// AppLayout
// -Header
//     -logo 
//     -nav items 
// -body 
//     -search 
//     -restorant container 
//     -restorant card 
// -footer
//     -copyright
//     -links
//     -address
//     -contacts


const Header=()=>{
    return <div className="header">
        <div className="logo-container">   
            <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul> 
        </div> 
    </div>
}

const cardStyle={
    backgroundColor:"#f0f0f0"
}

const resList=[{data:{
    "id": "487096",
    "name": "Dino's Pizza",
    "cloudinaryImageId": "seqnlipynpingek2iirl",
    "locality": "Teacher's Colony",
    "areaName": "Parasia Road",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Pizzas",
      "Burgers",
      "Beverages"
    ],
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "avgRating": 4.3,
    "veg": true,
    "parentId": "387459",
    "avgRatingString": "4.3",
    "totalRatingsString": "100+"}},
    {data:
    {
    "id": "487098",
    "name": "Dino's Pizza",
    "cloudinaryImageId": "seqnlipynpingek2iirl",
    "locality": "Teacher's Colony",
    "areaName": "Parasia Road",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Pizzas",
      "Burgers",
      "Beverages"
    ],
    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
    "avgRating": 4.3,
    "veg": true,
    "parentId": "387459",
    "avgRatingString": "4.3",
    "totalRatingsString": "100+",
}}];



const RestoCard=(props)=>{
    const {resData}=props;
    const {imageId,name,cuisines,avgRating,costForTwo}=resData?.data;
    return (
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0"
        }}>
            <img className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} ruppes</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search"> 
                Search
            </div> 

            <div className="resto-container">
                {resList.map((res)=>{
                    return <RestoCard key={res.data.id} resData={res}/>
                })}
               
                
            </div>  

        </div>
    )
}

const AppLayout=()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
