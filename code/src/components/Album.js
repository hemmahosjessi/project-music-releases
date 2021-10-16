import React from "react";

const Album = (props) => {
  return (
    <article className="album-item">
      <div className="cover-image-container">
        <img className="cover-image" src={props.image} alt="cover"></img>
        <div className="overlay">
          <div className="controls">
            <img
              className="heart-icon"
              alt="heart icon"
              src="./icons/heart.svg"
            />
            <img
              className="play-icon"
              alt="play button icon"
              src="./icons/play.svg"
            />
            <img className="dot-icon" alt="menu icon" src="./icons/dots.svg" />
          </div>
        </div>
      </div>
      <a href={props.albumLink}>
        <h2 className="album-name">{props.title}</h2>
      </a>
      <h3 className="artist-name">{props.singer}</h3>
    </article>
  );
};

export default Album;
