import React, { useEffect, useState } from "react";
import Details from "../catDetails";

import "../App.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CDetails = () => {
  const catId = useParams();
  const imageID = catId.id;
  

  //set state
  //Application States
  const [catDetails, setCatDetails] = useState([]);

  useEffect(() => {
    fetchCatDetails();
    // eslint-disable-next-line
  }, []);

  const fetchCatDetails = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${imageID}`
    );
    const data = await response.json();
    setCatDetails(data);
    //console.log(data);
  };

  return (
    <div className="App">
      <h1> More Details </h1>

      <div className="results">
        { <Details
            id={catDetails.id}
            image={catDetails.url}
          /> }
      </div>
    </div>
  );
};
export default CDetails;
