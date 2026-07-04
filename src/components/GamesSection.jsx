import "../styles/games.css";

import { games } from "../data/games";

import GameCard from "./GameCard";

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
            <GameCard
              key={game.id}
              game={game}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default GamesSection;
