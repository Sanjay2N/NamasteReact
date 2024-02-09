import RestoCard from "./RestorantCards";
import resList from "../utils/mockdata";

import { useState } from "react"; 

const Body=()=>{

    let [listOfRestorant,setlistOfRestorant]=useState(resList)
   
    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={()=>{
                    const newlistOfRestorant=listOfRestorant.filter(resto=>{
                        return resto.info.avgRatingString!="--";
                    })
                    console.log(newlistOfRestorant)
                    setlistOfRestorant(newlistOfRestorant);
                }} >Top Rated Restorant</button>
            </div> 

            <div className="resto-container">
                {listOfRestorant.map((res)=>{
                    return <RestoCard key={res.info.id} resData={res}/>
                })}
               
                
            </div>  

        </div>
    )
}


export default Body;