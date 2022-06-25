function Drawer({onClose, onRemoveShoes, shoes = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClose}
            width={15}
            height={15}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {shoes.length > 0 ? (
          <div>
            <div className="shoes">
              {shoes.map((shoe) => (
                <div className="cartItem">
                  <img
                    className="itemImg"
                    width={70}
                    height={70}
                    src={shoe.imgUrl}
                    alt="Lacoste"
                  />
                  <div className="itemWrapper">
                    <p className="itemTitle">Женские туфли {shoe.name}</p>
                    <b>{shoe.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemoveShoes(shoe.id)}
                  />
                </div>
              ))}
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
        ) : (
          <div className="emptyCart">
            <img
              width={120}
              height={120}
              src="/img/emptyBox.svg"
              alt="emptyBox"
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару туфель, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;