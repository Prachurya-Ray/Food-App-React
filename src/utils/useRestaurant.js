import { useEffect, useState } from "react";
import { Fetch_Menu_URL } from "../../config";

const useRestaurant = (id)=>{
    
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    callRestaurant();
  }, []);

  async function callRestaurant() {
    const data = await fetch( Fetch_Menu_URL +  id);
    const res = await data.json();
    console.log(res.data.cards[2].card.card.info.name);
    setRestaurant(res.data);
  }

  return restaurant;
}

export default useRestaurant;