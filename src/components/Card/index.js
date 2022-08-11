import React from "react";
import styles from "./Card.module.scss";

function Card({ id, name, price, imgUrl, onClickFavorite, onClickPlus, favorited }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const onClickPlus2 = () => {
    onClickPlus({ id, name, price, imgUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite2 = () => {
    onClickFavorite({ id, name, price, imgUrl });
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite2}>
        <img src={isFavorite ? "img/likedHeart.svg" : "img/unlikedHeart.svg"} alt="Unliked" />
      </div>
      <img height={133} width={112} src={imgUrl} alt="Lacoste" />
      <h5>Женские туфли {name}</h5>
      <div className={styles.pic}>
        <div className={styles.sign}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.plusButton} onClick={onClickPlus2}>
          <img
            height={11}
            width={11}
            src={isAdded ? "img/checked.svg" : "img/plus.svg"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
