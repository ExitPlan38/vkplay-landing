import SaleBadge from "./SaleBadge";
import ScrollButton from "./ScrollButton";

import "../styles/hero.css";

import character from "../assets/images/character-left.png";
import vehicle from "../assets/images/vehicle-right.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__badge">
          <SaleBadge />
        </div>

        <div className="hero__content">

          <h1 className="hero__title">
            Распродажа
            <br />
            шутеров
          </h1>

          <p className="hero__description">
            От классики до новинок — погрузитесь в мир
            интенсивных сражений, опасных миссий
            и приключений.
          </p>

          <ScrollButton />

        </div>

        <div className="hero__graphics">

          <img
            className="hero__character"
            src={character}
            alt=""
          />

          <img
            className="hero__vehicle"
            src={vehicle}
            alt=""
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;