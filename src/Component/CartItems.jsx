import { IMG_CDN_URL } from "../../config";
const CartItems = ({ name, price, imageId }) => {
  // const {name, star, cuisine, img} = restaurant.data;
  const img = IMG_CDN_URL + imageId;
  return (
    <div className="card h-80 p-2 w-44 mb-20 shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
      <img className="card-img h-44 w-full rounded-xl px-1" src={img} />
      <div className="card-details overflow-hidden flex flex-col  items-center">
        <h2 className="font-bold text-md  pb-1 pt-1 text-gray-700 font-serif">
          {name}
        </h2>
        <h4 className="italic text-sm pb-2 h-6 overflow-hidden font-semibold text-gray-700">
          {`Rs. ${price / 100}/-`}
        </h4>
          <button className="bg-red-500 text-white  rounded-md mt-2 px-2  py-1">
            Cancel
          </button>
        
      </div>
    </div>
  );
};

export default CartItems;
