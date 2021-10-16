import React from "react";

export const Artist = (props) => {
  return (
    <div>
      <a href={props.artistLink} target="_blank">
        <p>{props.name}</p>
      </a>
    </div>
  );
};
