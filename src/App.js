import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./App.css";
import { Link } from "react-router-dom";

const BASE_URL = "https://kitsu.io/api/edge/anime?filter[text]=";

function App() {
  const [items, setItems] = useState({});
  const handleSearch = (e) => {
    console.log(e.target.value, "my input value");
    fetch(BASE_URL + e.target.value)
      .then((res) => res.json())
      .then((value) => setItems(value));
  };

  return (
    <div className="main">
      <h3>My Anime App</h3>
      <TextField
        className="TextField"
        label="Anime title"
        onChange={handleSearch}
      />
      <div className="results">
        {items.data &&
          items.data.map((item, index) => (
            <div key={index}>
              <a href={`${item.links.self}`}>
                {item.attributes.canonicalTitle}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
