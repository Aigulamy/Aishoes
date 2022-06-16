import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

import "./App.css";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("https://62ab0da8371180affbe01fc6.mockapi.io/shoes")
      .then((res) => res.json())
      .then((json) => setShoes(json));
  }, [])

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}  />
      <div className="contents">
        <div className="title-block">
          <h1>Все туфли</h1>
          <div className="search-block">
            <img height={18} width={18} src="/img/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="cardContainer">
          {shoes.map((shoes) => (
            <Card
              title={shoes.name}
              price={shoes.price}
              imgUrl={shoes.imgUrl}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onClickPlus={() => console.log("Нажали плюс ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
