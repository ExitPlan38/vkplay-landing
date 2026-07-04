// Импорт изображений для карточек игр
import game1 from "../assets/images/game-1.png";
import game2 from "../assets/images/game-2.png";
import game3 from "../assets/images/game-3.png";

// Массив с информацией об играх.
// Каждый объект содержит данные, необходимые
// для формирования отдельной карточки.
export const games = [
  {
    // Уникальный идентификатор игры
    id: 1,

    // Название игры
    title: "CoolClone Outbreak",

    // Жанр игры
    genre: "Шутер",

    // Размер скидки
    discount: "-42%",

    // Изображение игры
    image: game1,
  },
  {
    id: 2,
    title: "Institute of Cringe",
    genre: "Симулятор",
    discount: "-67%",
    image: game2,
  },
  {
    id: 3,
    title: "CAP Rizz",
    genre: "Визуальная новелла",
    discount: "-33%",
    image: game3,
  },
];
