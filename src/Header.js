import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase.js";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt="amazon-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_text" type="text"></input>
        <SearchIcon className="header_search_icon"></SearchIcon>
      </div>

      <div className="header_nav" onClick={handleAuth}>
        <Link to={!user && "/login"}>
          <div className="header_nav_opt">
            <span className="header_nav_opt_one">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_nav_opt_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_nav_opt">
            <span className="header_nav_opt_one">Returns</span>
            <span className="header_nav_opt_two">& Orders</span>
          </div>
        </Link>
        <div className="header_nav_opt">
          <span className="header_nav_opt_one">Your</span>
          <span className="header_nav_opt_two">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_basket">
          <ShoppingBasketIcon className="header_basket_icon"></ShoppingBasketIcon>
          <span className="header_basket_cnt">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
