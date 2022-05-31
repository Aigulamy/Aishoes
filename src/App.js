import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img height={40} src="https://cdn.api.kari.com/f/W2138021_001.jpg" />
          <div className="headerInfo">
            <h3>Aishoes</h3>
            <p>Лучшая женская обувь</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img
              height={18}
              width={30}
              src="data:image/png;base64,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"
            />
            <span>2500 руб.</span>
          </li>
          <li>
            <img
              height={18}
              width={18}
              src="data:image/png;base64,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"
            />
          </li>
        </ul>
      </header>
      <div className="contents">
        <h1>Все туфли</h1>
        <div className="cardContainer">
          <div className="card">
            <img
              height={133}
              width={112}
              src="https://oeyes.ru/upload/iblock/703/703e4e27714f66dc78b0781357e937aa.jpg"
            />
            <h5>Женские туфли Lacoste</h5>
            <div className="pic">
              <div className="sign">
                <span>Цена:</span>
                <b>4999 руб.</b>
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
              src="https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//GJ%205299918%20BLS/GJ%205299918%20BLS%201.jpg?1595329143270942"
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
