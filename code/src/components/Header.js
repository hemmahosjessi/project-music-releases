import React from "react";

const Header = (props) => {
  console.log("This is the header");
  return (
    <header className="header">
      <img
        src="/icons/Spotify_Logo_RGB_Green.png"
        alt="spotify logo"
        className="spotify-logo"
      />
      <h1>New albums & singles</h1>
    </header>
  );
};

export default Header;
