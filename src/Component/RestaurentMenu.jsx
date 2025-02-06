import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurentMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center mt-32">
        <div>
          <h1 className="bold text-2xl font-serif">{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
          <img
            src={
              IMG_CDN_URL +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
            className="rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer h-64 w-64"
          />

          <h3 className="font-semibold">
            Cuisines:{" "}
            {restaurant?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </h3>
          <h3 className="font-semibold">{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div className="ms-5 mt-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="flex flex-col gap-6">
            {restaurant?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (data) => {
                return (
                  
                    <li key={data?.card?.info?.id}>🍔 {data?.card?.info?.name} 
                     <button
                      className="bg-green-400 text-white ms-2 px-2 py-1 rounded-md"
                      onClick={() => handleAddItems(data?.card?.info)}
                    >
                      Add
                    </button></li>
                    
                  
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurentMenu;
