import React from "react";

const Footer = () => {
  console.log("This is the footer");
  return (
    <footer className="footer">
      <h4>Created by</h4>
        <a className="aleksa" href="https://github.com/A1eksa">
          <img src="./icons/GitHub-Icon-White-Logo.wine.svg" className="github-logo" alt="githublogotype">
          </img>
          <p>Aleksa</p>
        </a>
        <a className="jes" href="https://github.com/hemmahosjessi">
          <img src="./icons/GitHub-Icon-White-Logo.wine.svg" className="github-logo" alt="githublogotype">
          </img>
          <p>Jessi</p>
        </a>
    </footer>
  );
};

export default Footer;
