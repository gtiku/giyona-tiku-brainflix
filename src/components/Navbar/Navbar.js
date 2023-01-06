import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import search_icon from "../../assets/images/icons/search.svg";
import profile_pic from "../../assets/images/Mohan-muruge.jpg";

const Navbar = () => {
  let searchPlaceholder = `${search_icon} Search`;

  return (
    <div className="navbar">
      <a href="#">
        <img src={logo} className="navbar__logo" />
      </a>

      <div className="navbar__flex">
        <div className="navbar__flex-mobile">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="navbar__searchbar"
          />
          <img src={profile_pic} className="pfp navbar__pfp navbar__pfp--mobile" />
        </div>

        <button className="navbar__upload">UPLOAD</button>
        <img src={profile_pic} className="navbar__pfp navbar__pfp--tablet" />
      </div>
    </div>
  );
};

export default Navbar;
