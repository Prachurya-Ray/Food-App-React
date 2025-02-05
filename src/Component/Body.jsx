import { useEffect, useState, useContext } from "react";
import { restaurentList } from "../../config";
import RestaurantCard from "./Restaurant";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const [heading, setHeading] = useState("Top Sizzling");
  const {user, setUser} =useContext(UserContext);

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
    <div className="search-container mt-8 flex justify-center">
      <input
        type="text"
        className="search-bar p-1 me-4 bg-gray-100 rounded-lg ps-4 pe-10 hover:scale-105"
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
        className="search-btn bg-black text-white rounded-md px-3 py-1 hover:bg-gray-300 hover:text-black"
        onClick={() => {
          if (searchItem != null) {
            const datas = filterData(searchItem, allRestaurant);
            setFilteredRestaurant(datas);
          }
        }}
      >
        Search
      </button>
      {/* <input type="text" name="" id="" className="bg-slate-300" onChange={(e)=>{
        setUser({ ...user,name:e.target.value})
      }}/> */}
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

  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-32">
      {SearchBar}

      <h2 className="trending-h2 text-2xl ms-12 mt-2 font-serif">{heading}</h2>
      <div className="cards flex flex-wrap mx-16 mt-10 gap-12 justify-between">
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
    </div>
  );
};

export default Body;
