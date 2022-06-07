function Card() {
  return(
  <div className="card">
    <div className="favorite">
      <img src="img/unlikedHeart.svg" alt="Unliked" />
    </div>
    <img
      height={133}
      width={112}
      src="https://oeyes.ru/upload/iblock/703/703e4e27714f66dc78b0781357e937aa.jpg"
      alt="Lacoste"
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
  )
}

export default Card;