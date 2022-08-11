import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import Favorite from "./components/Favorite";

import "./App.css";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [cartShoes, setCartShoes] = useState([]);
  // eslint-disable-next-line
  const [favorite, setFavorite] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://62ab0da8371180affbe01fc6.mockapi.io/shoes")
      .then((res) => setShoes(res.data));
    axios
      .get("https://62ab0da8371180affbe01fc6.mockapi.io/cart")
      .then((res) => setCartShoes(res.data));
    axios
      .get("https://62ab0da8371180affbe01fc6.mockapi.io/favorite")
      .then((res) => setFavorite(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62ab0da8371180affbe01fc6.mockapi.io/cart", obj);
    setCartShoes((prev) =>
      prev.some((it) => it.id === obj.id) ? prev : [...prev, obj]
    );
  };
  const onRemoveShoes = (id) => {
    axios.delete(`https://62ab0da8371180affbe01fc6.mockapi.io/cart/${id}`);
    setCartShoes((prev) => prev.filter((shoe) => shoe.id !== id));
  };

  const onAddToFavorite = (obj) => {
    if (favorite.find(favShoe => obj.id === favShoe.id)) {
     axios.delete(`https://62ab0da8371180affbe01fc6.mockapi.io/favorite/${obj.id}`);
     setFavorite((prev) => prev.filter(it => it.id !== obj.id));
    } else {
      axios.post("https://62ab0da8371180affbe01fc6.mockapi.io/favorite", obj);
      setFavorite((prev) => [...prev, obj]);
    }
  };

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          shoes={cartShoes}
          onRemoveShoes={onRemoveShoes}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchInputHandler={searchInputHandler}
              shoes={shoes}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorite"
          exact
          element={
            <Favorite favorite={favorite} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
