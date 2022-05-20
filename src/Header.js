import React from "react";
import "./Header.css";
import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from '@mui/icons-material/Translate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/120px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"
        alt=""
      />
      <div className="header__center">
        <input type="text" placeholder="Find your freedom!" />
        <SearchIcon />
          </div>
          
          <div className="header__right">
              <p>Become a Host</p>
              <TranslateIcon />
              <ExpandMoreIcon />
              <Avatar />
          </div>
    </div>
  );
}

export default Header;
