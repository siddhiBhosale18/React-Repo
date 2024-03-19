import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body=()=>{
    const [listOfRestaurent,setListOfRestaurent]=useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>
                    {
                        const filteredList=listOfRestaurent.filter((res)=>res.info.avgRating>4);
                        setListOfRestaurent(filteredList);
                    }
                }
                >Tap To Filter Restaurent</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurent.map((restaurent)=><RestaurentCard key={restaurent.info.id } resData={restaurent}  />)
                }
            </div>
        </div>
    )
}

export default Body;