import "../styles/games.css";

import game1 from "../assets/images/game-1.png";
import game2 from "../assets/images/game-2.png";
import game3 from "../assets/images/game-3.png";

const games = [
  {
    title: "CoolClone Outbreak",
    genre: "Шутер",
    discount: "-42%",
    image: game1,
  },
  {
    title: "Institute of Cringe",
    genre: "Симулятор",
    discount: "-67%",
    image: game2,
  },
  {
    title: "CAP Rizz",
    genre: "Визуальная новелла",
    discount: "-33%",
    image: game3,
  },
];

function GamesSection() {
  return (
    <section id="games" className="games">
      <div className="games__container">

        <h2 className="games__title">
          Вперёд за играми
        </h2>

        <p className="games__subtitle">
          Подборка популярных игр, участвующих в сезонной распродаже.
        </p>

        <div className="games__grid">

          {games.map((game) => (
            <article
              key={game.title}
              className="game-card"
            >

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
          ))}

        </div>

      </div>
    </section>
  );
}

export default GamesSection;