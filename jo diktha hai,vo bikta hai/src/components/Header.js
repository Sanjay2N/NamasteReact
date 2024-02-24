import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, changebtnName] = useState("Login"); //new instance will be created on change
  // console.log("header called");

  //if second arg not given useEffect will be called on every render of component
  //if sencond arg in [] useEffect will be called on first render(just once)
  //if dependencies given ,useEffect will called on change in dependencies
  // useEffect(() => {
  //   console.log("Header ..............");
  // }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

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
            <a href="/contacts">Contact Us</a>
          </li>
          <li className="px-1">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};
const Header1 = () => {};
export default Header1;
