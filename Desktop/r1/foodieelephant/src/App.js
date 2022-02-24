import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "1024da4d";
const APP_KEY = "af4613f3046b6112672998dda38e33af";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
        <Header
          search={search}
          onInputChange={onInputChange}
          onSearchClick={onSearchClick}
        />
        <div className="container">
        <h3>WLECOME FOODIES</h3>
          <Recipes recipes={recipes} />
        </div>
    </div>
  );
}

export default App;