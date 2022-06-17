import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Data from "./Data";
import { AuthContext } from "../../Context/AuthContext";
import SignupPopup from "../../PopUp/SignUpPopUp";

function Navbar() {
  const [menu, setMenu] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
            alt=""
          ></img>
        </div>
        <div className="links">
          <Link
            to="women"
            onMouseEnter={() => {
              let d = "women";
              setMenu(<Data r={d} />);
            }}
            onMouseLeave={() => {
              setMenu("");
            }}
          >
            WOMEN{" "}
          </Link>
          <Link
            to="men"
            onMouseEnter={() => {
              let d = "men";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            MEN
          </Link>
          <Link
            to="products"
            onMouseEnter={() => {
              let d = "beauty";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            BEAUTY
          </Link>
          <Link
            to="men"
            onMouseEnter={() => {
              let d = "kids";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            KIDS
          </Link>
          <Link
            to="/"
            onMouseEnter={() => {
              let d = "home";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            HOME
          </Link>
          <Link
            to="offers"
            onMouseEnter={() => {
              let d = "offers";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            OFFERS
          </Link>
          <Link
            to="design"
            onMouseEnter={() => {
              let d = "designers";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            DESIGNERS
          </Link>
          <Link
            to="community"
            onMouseEnter={() => {
              let d = "community";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            COMMUNITY
          </Link>
          <Link
            to="whymodsens"
            onMouseEnter={() => {
              let d = "why";
              setMenu(
                <Data
                  r={d}
                  onMouseLeave={() => {
                    setMenu("");
                  }}
                />
              );
            }}
          >
            WHY MODESENS
          </Link>
        </div>
        <div className="rightIcons">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
              alt=""
            ></img>
          </div>
          {isAuth ? <div></div> : <SignupPopup />}
          <div>
            <img
              src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              alt=""
            />
          </div>
          <div className="search">
            <img
              style={{ width: "50%%" }}
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              alt=""
            />
            <input type="text" placeholder="SEARCH" />
          </div>
          <div
            style={{ marginTop: "-10px", cursor: "pointer" }}
            onClick={() => setIsAuth(false)}
          >
            {isAuth ? "Log Out" : ""}
          </div>
        </div>
      </div>
      <div>{menu}</div>
    </div>
  );
}

export default Navbar;
