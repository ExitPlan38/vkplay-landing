// Подключение стилей раздела
import "../styles/games.css";

// Импорт массива данных с информацией об играх
import { games } from "../data/games";

// Импорт компонента карточки игры
import GameCard from "./GameCard";

// Компонент раздела с подборкой игр.
// Выполняет отображение списка карточек на основе массива данных.
function GamesSection() {
  return (
    <section id="games" className="games">

      <div className="games__container">

        {/* Заголовок раздела */}
        <h2 className="games__title">
          Вперёд за играми
        </h2>

        {/* Краткое описание раздела */}
        <p className="games__subtitle">
          Подборка популярных игр, участвующих в сезонной распродаже.
        </p>

        {/* Формирование карточек игр из массива данных */}
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
