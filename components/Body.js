import resList from "../utils/mockData"
import RestaurentCard from "./RestaurentCard";

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurent)=><RestaurentCard key={restaurent.info.id } resData={restaurent}  />)
                }
            </div>
        </div>
    )
}

export default Body;