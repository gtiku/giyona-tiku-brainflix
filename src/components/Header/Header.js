import React from "react";
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import search_icon from "../../assets/images/icons/search.svg";
import profile_pic from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  let searchPlaceholder = `${search_icon} Search`;

  return (
    <div className="header">
      <a href="./">
        <img src={logo} className="header__logo" alt="brainflix logo" />
      </a>

      <div className="header__flex">
        <div className="header__flex-mobile">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="header__searchbar"
          />
          <img
            src={profile_pic}
            className="pfp header__pfp header__pfp--mobile"
            alt="profile pic"
          />
        </div>

        <button className="header__upload">UPLOAD</button>
        <img
          src={profile_pic}
          className="header__pfp header__pfp--tablet"
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default Header;
