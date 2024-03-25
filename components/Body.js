import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";

const Body=()=>{
    const [listOfRestaurent,setListOfRestaurent]=useState(resList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         const json = await response.json();
    //         console.log(json);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

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