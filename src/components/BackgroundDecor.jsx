// Подключение стилей декоративного фона
import "../styles/decor.css";

// Компонент декоративного оформления страницы.
// Формирует фоновый градиент, световые эффекты и текстуру.
function BackgroundDecor() {
  return (
    <>

      {/* Основной фон страницы */}
      <div className="background"></div>

      {/* Левое световое свечение */}
      <div className="background-glow background-glow--left"></div>

      {/* Центральное световое свечение */}
      <div className="background-glow background-glow--center"></div>

      {/* Правое световое свечение */}
      <div className="background-glow background-glow--right"></div>

      {/* Декоративная текстура поверхности */}
      <div className="background-noise"></div>

    </>
  );
}

export default BackgroundDecor;
