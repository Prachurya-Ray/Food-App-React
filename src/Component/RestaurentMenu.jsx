import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../utils/useRestaurant"

const RestaurentMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          style={{ width: "300px", height: "300px" }}
        />

        <h3>
          Cuisines:{" "}
          {restaurant?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
        </h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div style={{ marginTop: "10rem" }}>
        <h2>Menu</h2>
        <ul>
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card?.carousel?.map(
            (data) => {
              return (
                <li key={data?.dish?.info?.id}>{data?.dish?.info?.name}</li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
