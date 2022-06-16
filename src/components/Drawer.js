function Drawer(props) {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img onClick={props.onClose}
            width={15}
            height={15}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="cartItemWrapper">
          <div className="cartItem">
            <img
              className="itemImg"
              width={70}
              height={70}
              src="https://oeyes.ru/upload/iblock/703/703e4e27714f66dc78b0781357e937aa.jpg"
              alt="Lacoste"
            />
            <div className="itemWrapper">
              <p className="itemTitle">Женские туфли Lacoste</p>
              <b>4999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              className="itemImg"
              width={70}
              height={70}
              src="https://b2b.redsign.ru/upload/iblock/454/1.jpg"
              alt="Love"
            />
            <div className="itemWrapper">
              <p className="itemTitle">Женские туфли Love</p>
              <b>7000 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="basketSum">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>11999 руб.</b>
            </li>
            <li>
              <span>Налог 10%:</span>
              <div></div>
              <b>1199 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;