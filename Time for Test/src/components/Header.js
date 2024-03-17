import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, changebtnName] = useState("Login"); //new instance will be created on change

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-md bg-blue-300 sm:bg-red-200">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-1">
            Online Status:{onlineStatus ? "online" : "offline"}
          </li>

          <li className="px-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-1">
            <Link to="/about">About</Link>
          </li>
          <li className="px-1">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="px-1">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <button
            className="px-1"
            onClick={() => {
              btnNameReact == "Login"
                ? changebtnName("Logout")
                : changebtnName("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-1">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
const Header1 = () => {};
export default Header1;
