import React from "react";
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="./">
        <img src={logo} className="header__logo" alt="brainflix logo" />
      </a>

      <div className="header__flex">
        <div className="header__flex-mobile">
          <input
            type="text"
            placeholder="Search"
            className="header__searchbar"
          />
          <div className="header__pfp-box header__pfp-box--mobile"></div>
        </div>

        <button className="header__upload">UPLOAD</button>
        <div className="header__pfp-box header__pfp-box--tablet"></div>
      </div>
    </div>
  );
};

export default Header;
