// Импорт компонентов первого экрана
import SaleBadge from "./SaleBadge";
import ScrollButton from "./ScrollButton";

// Импорт текстового содержимого лендинга
import { heroContent } from "../data/content";

// Импорт графических ресурсов
import character from "../assets/images/character-left.png";
import vehicle from "../assets/images/vehicle-right.png";

// Подключение стилей компонента
import "../styles/hero.css";

// Компонент первого экрана (Hero).
// Отображает основную информацию об акции, изображения и кнопку перехода.
function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* Информационная плашка с временем проведения акции */}
        <div className="hero__badge">
          <SaleBadge />
        </div>

        {/* Центральная контентная часть */}
        <div className="hero__content">

          {/* Заголовок первого экрана */}
          <h1 className="hero__title">
            {heroContent.title[0]}
            <br />
            {heroContent.title[1]}
          </h1>

          {/* Краткое описание акции */}
          <p className="hero__description">
            {heroContent.description}
          </p>

          {/* Кнопка плавной прокрутки к следующему разделу */}
          <ScrollButton />

        </div>

        {/* Декоративные изображения первого экрана */}
        <div className="hero__graphics">

          <img
            className="hero__character"
            src={character}
            alt="Персонаж акции"
          />

          <img
            className="hero__vehicle"
            src={vehicle}
            alt="Игровая техника"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
