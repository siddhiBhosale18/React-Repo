import { CDN_URL } from "../utils/constants";

const RestaurentCard=(props)=>{
    const {resData}=props;

    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo,deliveryTime}=resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="rest-logo" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRatingString} Stars</p>
            <p>{costForTwo}</p>
            <p>{resData.info.sla.deliveryTime} mins</p>
            
        </div>
    )
}

export default RestaurentCard