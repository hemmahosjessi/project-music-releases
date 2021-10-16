import React from "react";

const Header = (props) => {
  console.log("This is the header");
  return (
    <header className="header">
      <h1>New albums & singles</h1>
      <img
        src="/icons/Spotify_Logo_RGB_Green.png"
        alt="spotify logo"
        className="spotify-logo"
      />
    </header>
  );
};

export default Header;
