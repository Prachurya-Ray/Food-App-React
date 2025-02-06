import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total=0;
  const dispatch =useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="mt-32 flex flex-col items-center">
      <h1 className="font-bold font-serif text-2xl">Cart</h1>
      <button className="bg-red-600 px-2 py-1 rounded-md text-white my-2" onClick={handleClearCart}>Clear Cart</button>

      <section className="flex flex-wrap gap-6">
      {cartItems.map((data) => {
        return <CartItems key={data.id} {...data} />;
      })}
      </section>

      {/* <section>
        <h3>Total : </h3>
        {
          total=cartItems.reduce(data.price, total)
        }
      </section> */}
      
    </div>
  );
};

export default Cart;
