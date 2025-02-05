import { useState, useContext } from "react";
import logo from "../img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const menuColor = {
  color: "green",
};

const Title = () => {
  return (
    <Link to="/">
      <img className="logo h-24" src={logo} />
    </Link>
  );
};

const Header = () => {
  const [logedIn, setLogedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between items-center ps-5 pe-5 shadow-lg fixed z-50 bg-white top-0 w-full h-18 rounded-lg">
      <Title />
      <div className="nav-items">
        <ul style={menuColor} className="flex gap-5 ">
          <li className="text-black">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-black">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="text-black">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="text-black">
            <Link to={"/foodiemart"}>Foodie Mart</Link>
          </li>
          <li className="text-black">
          <Link to={"/cart"}>Cart </Link>

            <span className="bg-red-500 text-white rounded-2xl px-2">
              {cartItems.length}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        {isOnline ? "✅" : "🔴"}
        {user.name}
        <div className="signup-btn">
          {logedIn ? (
            <button onClick={() => setLogedIn(false)}>Log In</button>
          ) : (
            <button onClick={() => setLogedIn(true)}>Sign Out</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
