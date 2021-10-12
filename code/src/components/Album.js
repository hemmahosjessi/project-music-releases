import React from 'react'

const Album = (props) => {
  console.log("Img, Title & Artist", props)
  return (
      <article className="album-item">
        <img className="cover-img" src={props.img} alt="album cover"></img>
        <div className="item-text">
          <h2>{props.title}</h2>
          <p>{props.artist}</p>
        </div>
      </article>
    )
} 

  export default Album