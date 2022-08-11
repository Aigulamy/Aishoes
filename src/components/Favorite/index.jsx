import Card from "../Card";

function Favorite({ favorite, onAddToFavorite }) {
  return (
    <div className="contents">
      <div className="title-block">
        <h1>Мои закладки</h1>
      </div>
      <div className="cardContainer">
        {favorite.map((shoe) => (
          <Card
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            price={shoe.price}
            imgUrl={shoe.imgUrl}
            favorited={true}
            onClickFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
