import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center mb-4 bg-pink-100 shadow-md box-border p-2">
      <div className="w-16">
        <img className="rounded-full" src={LOGO_URL}></img>
      </div>
      <div className="">
        <ul className="flex">
          <li className="m-4">Online Status - {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-4">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="m-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4">
            {" "}
            <Link>User- {loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
