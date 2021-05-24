import React from "react";

import style from "./cat.module.css";

const Details = ({ id, image }) => {

  function handleLikes() {
    alert("Liked");
  }


  return (
    <div key={id} className={style.catDetails}>
      <img className={style.imgDetails} alt={image} src={image} />
      <p className={style.p}>
        <button onClick={handleLikes()}>
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>Like
        </button>
        |
        <button onClick={handleLikes()}>
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>Dislike
        </button>
      </p>
    </div>
  );
};

export default Details;
