import { useEffect, useState } from "react";
import { restaurentList } from "../../config";
import RestaurantCard from "./Restaurant";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const [heading, setHeading] = useState("Top Sizzling");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log(json);

    setAllRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const SearchBar = (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Here"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
        onKeyUp={() => {
          if (event.key == "Enter") {
            if (searchItem != null) {
              const datas = filterData(searchItem, allRestaurant);
              setFilteredRestaurant(datas);
            }
          }
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          if (searchItem != null) {
            const datas = filterData(searchItem, allRestaurant);
            setFilteredRestaurant(datas);
          }
        }}
      >
        Search
      </button>
    </div>
  );

  if (filteredRestaurant.length === 0) {
    return (
      <>
        {SearchBar}
        <Shimmer />
      </>
    );
  }

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {SearchBar}

      <h2 className="trending-h2">{heading}</h2>
      <div className="cards">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
