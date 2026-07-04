import SaleBadge from "./SaleBadge";
import ScrollButton from "./ScrollButton";

import { heroContent } from "../data/content";

import character from "../assets/images/character-left.png";
import vehicle from "../assets/images/vehicle-right.png";

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__badge">
          <SaleBadge />
        </div>

        <div className="hero__content">

          <h1 className="hero__title">
            {heroContent.title[0]}
            <br />
            {heroContent.title[1]}
          </h1>

          <p className="hero__description">
            {heroContent.description}
          </p>

          <ScrollButton />

        </div>

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
