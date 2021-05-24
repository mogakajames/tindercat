import React from "react";

import style from "./cat.module.css";

const Details = ({ id, image }) => {
  function handleLikes(value) {
    localStorage.setItem('liked', value);
    alert("Your like has been submitted to local storgae successfully!")
  }

  return (
    <div key={id} className={style.catDetails}>
      <img className={style.imgDetails} alt={image} src={image} />
      <button onClick={() => handleLikes('1')}>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>Like
      </button>
      |
      <button onClick={() => handleLikes('0')}>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>Dislike
      </button>
    </div>
  );
};

export default Details;
