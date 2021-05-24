import React, { useEffect, useState } from "react";

import Cat from "./cat";

import "./App.css";

const App = () => {
  const APP_KEY = "14eb7978-94d7-4693-86cb-4fad345e388d";

  //set state
  //Application States
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [submitQuery, setSubmitQuery] = useState("American");

  useEffect(() => {
    fetchCats();
    // eslint-disable-next-line
  }, [submitQuery]);

  const fetchCats = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${submitQuery}&api_key=${APP_KEY}`
    );
    const data = await response.json();
    setCats(data);
  };

  const searchKey = (e) => {
    setSearch(e.target.value);
  };

  const getSearchQuery = (e) => {
    e.preventDefault();
    setSubmitQuery(search);
  };

  return (
    <div className="App">
      <h1>Tinder web app for Cats </h1>
      <h3>
        <i>Showing love to the beautiful creatures</i>
      </h3>
      <form className="search-form" onSubmit={getSearchQuery}>
        <input
          type="text"
          placeholder="Search cats..."
          className="search-bar"
          value={search}
          onChange={searchKey}
        />
        <button className="search-button" type="submit">
          Search Cat
        </button>
      </form>
      <div>
        <h3>
          Search your favorite likee cat
          <br />
          Enjoy!
        </h3>
      </div>
      <div className="results">
        {cats.map((cat) => (
          <Cat
            id={cat.id}
            name={cat.name}
            imageID={cat.reference_image_id}
            description={cat.description}
            traits={cat.temperament}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
