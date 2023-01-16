import React from "react";
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import upload from "../../assets/images/icons/upload.svg";

const Header = () => {
  return (
    <header className="header">
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
        <Link to="/upload">
          <Button icon={upload} text="UPLOAD" className="header__upload" />
        </Link>

        <div className="header__pfp-box header__pfp-box--tablet"></div>
      </div>
    </header>
  );
};

export default Header;
