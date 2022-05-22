import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import Button from "@mui/material/Button";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="search__button"
          varient="outlined"
        >
          {showSearch ? "Hide Calendar" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get Out and Stretch Your Imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you!
        </h5>
        <Button varient="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
