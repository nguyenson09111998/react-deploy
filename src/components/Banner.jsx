import React from 'react'

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner__wrapper" >
        <h1 className="banner__title">{props.title}</h1>
        <p className="banner__content">{props.content}</p>
      </div>
    </div>
  );
}

export default Banner;