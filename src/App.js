import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="contents">
        <div className="title-block">
          <h1>Все туфли</h1>
          <div className="search-block">
            <img height={18} width={18} src="/img/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="cardContainer">
          <Card />
          <div className="card">
            <img
              height={133}
              width={112}
              src="https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//GJ%205299918%20BLS/GJ%205299918%20BLS%201.jpg?1595329143270942"
              alt="Romance"
            />
            <h5>Женские туфли Romance</h5>
            <div className="pic">
              <div className="sign">
                <span>Цена:</span>
                <b>6499 руб.</b>
              </div>
              <button className="plusButton">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              height={133}
              width={112}
              src="https://b2b.redsign.ru/upload/iblock/454/1.jpg"
              alt="Love"
            />
            <h5>Женские туфли Love</h5>
            <div className="pic">
              <div className="sign">
                <span>Цена:</span>
                <b>7000 руб.</b>
              </div>
              <button className="plusButton">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              height={133}
              width={112}
              src="https://sc04.alicdn.com/kf/Hea59e34e196c4b62a7cb48567fe6253a8.jpg"
              alt="Passion"
            />
            <h5>Женские туфли Passion</h5>
            <div className="pic">
              <div className="sign">
                <span>Цена:</span>
                <b>6999 руб.</b>
              </div>
              <button className="plusButton">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
