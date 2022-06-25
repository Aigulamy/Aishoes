import Card from "../Card";

function Home({
  searchValue,
  setSearchValue,
  searchInputHandler,
  shoes,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="contents">
      <div className="title-block">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все туфли"}
        </h1>
        <div className="search-block">
          <img height={18} width={18} src="/img/search.png" alt="search" />
          <input
            onChange={searchInputHandler}
            value={searchValue}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              width={15}
              height={15}
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          )}
        </div>
      </div>
      <div className="cardContainer">
        {shoes
          .filter((shoe) => shoe.name.toLowerCase().includes(searchValue))
          .map((shoe) => (
            <Card
              key={shoes.id}
              id={shoe.id}
              name={shoe.name}
              price={shoe.price}
              imgUrl={shoe.imgUrl}
              onClickFavorite={(obj) => onAddToFavorite(obj)}
              onClickPlus={(shoe) => onAddToCart(shoe)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
