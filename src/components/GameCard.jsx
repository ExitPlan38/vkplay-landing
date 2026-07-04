// Компонент карточки игры.
// Получает информацию об игре через объект game
// и отображает её в виде отдельной карточки.
function GameCard({ game }) {
  return (
    <article className="game-card">

      {/* Изображение игры */}
      <img
        className="game-card__image"
        src={game.image}
        alt={game.title}
      />

      <div className="game-card__content">

        {/* Информация о размере скидки */}
        <span className="game-card__discount">
          {game.discount}
        </span>

        {/* Название игры */}
        <h3 className="game-card__title">
          {game.title}
        </h3>

        {/* Жанр игры */}
        <p className="game-card__genre">
          {game.genre}
        </p>

        {/* Кнопка перехода к подробному описанию */}
        <button className="game-card__button">
          Подробнее
        </button>

      </div>

    </article>
  );
}

export default GameCard;
