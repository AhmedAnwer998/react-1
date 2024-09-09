import React from "react";
import "./FnavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import img02 from "../images/img02.svg";
const FnavBar = () => {
  return (
    <div className="second-nav">

      <div className="secondd-nav">

        <div className="div-search">

          <label htmlFor="search"></label>
          <input
            type="search"
            className="input"
            name="search"
            placeholder="search"
          />
          <FontAwesomeIcon className="Search-icon" icon={faSearch} />
        </div>

        <img src={img02} alt="img02" />
        <div>
          <a className="account" href="#">My Account</a>
          <FontAwesomeIcon className="BagShopping" icon={faBagShopping} />
          <sup>0</sup>
        </div>
      </div>

      <div className="border-bottom-hr"></div>
    </div>
  );
};

export default FnavBar;
