import { IMG_CDN_URL } from "../../config";
const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, locality, sla})=>{
    // const {name, star, cuisine, img} = restaurant.data;
    if (!cloudinaryImageId.includes("https")){
        cloudinaryImageId=IMG_CDN_URL+cloudinaryImageId;
    }
    return(
        <div className="card h-80 p-2 w-44 mb-20 shadow-lg hover:shadow-2xl  hover:scale-105 rounded-lg overflow-hidden">
                <img className="card-img h-44 w-full rounded-xl px-1" src={cloudinaryImageId}/>
                <div className="card-details">
                    <h2 className="font-bold text-lg pb-1 pt-1 text-gray-700 font-sans">{name}</h2>
                    <h4 className="italic text-sm pb-2 h-6 overflow-hidden text-gray-500">{cuisines.join(", ")}</h4>
                    <span className="flex justify-between">
                    <h5 className="text-xs pt-1/2 text-gray-500 font-semibold align-bottom italic">{locality} </h5>
                    <h5 className="text-xs pt-1/2 text-gray-500 font-semibold align-bottom">{sla.lastMileTravelString} </h5>
                    
                    </span>
                    <h5 className="text-xs pt-2 font-semibold align-bottom">{avgRating} Star</h5>
                </div>
            </div>
    )
}

export default RestaurantCard;
