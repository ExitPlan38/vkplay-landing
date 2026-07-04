// Импорт текстового содержимого главного экрана
import { heroContent } from "../data/content";

// Подключение стилей компонента
import "../styles/scroll.css";

// Компонент кнопки прокрутки страницы.
// Выполняет переход к разделу с карточками игр.
function ScrollButton() {

  // Плавная прокрутка страницы к секции "games"
  const scrollToGames = () => {
    const section = document.getElementById("games");

    // Проверка существования целевого элемента
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="scroll-wrapper">

      {/* Кнопка перехода к следующему разделу */}
      <button
        className="scroll-button"
        onClick={scrollToGames}
        aria-label={heroContent.scrollText}
      >
        {/* SVG-иконка стрелки */}
        <svg
          className="scroll-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5V19"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            d="M6 13L12 19L18 13"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Подпись под кнопкой */}
      <span className="scroll-text">
        {heroContent.scrollText}
      </span>

    </div>
  );
}

export default ScrollButton;
