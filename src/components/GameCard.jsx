function GameCard({ game }) {
  return (
    <article className="game-card">

      <img
        className="game-card__image"
        src={game.image}
        alt={game.title}
      />

      <div className="game-card__content">

        <span className="game-card__discount">
          {game.discount}
        </span>

        <h3 className="game-card__title">
          {game.title}
        </h3>

        <p className="game-card__genre">
          {game.genre}
        </p>

        <button className="game-card__button">
          Подробнее
        </button>

      </div>

    </article>
  );
}

export default GameCard;
