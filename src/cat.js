import React, { useEffect, useState } from "react";

import style from "./cat.module.css";

const Cat = ({ id, name, imageID, description, traits }) => {
  const [catsImage, setCatsImage] = useState([]);
  useEffect(() => {
    fetchImage(imageID);
    // eslint-disable-next-line
  }, []);

  const fetchImage = async (id) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    const data = await response.json();
    setCatsImage(data);
  };

  return (
    <div key={id} className={style.cat}>
      <a href={catsImage.id}>
        <img
          className={style.img}
          alt={imageID}
          src={catsImage.url}
        />
      </a>
      <h4 className={style.h}>{name}</h4>
      <p className={style.p}>
        <b>Description:</b> <br /> {description}
      </p>
      <h4 className={style.h}>
        <i>Traits:</i>
      </h4>
      <p className={style.p}>{traits}</p>
    </div>
  );
};

export default Cat;
