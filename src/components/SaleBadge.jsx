// Импорт текстового содержимого главного экрана
import { heroContent } from "../data/content";

// Подключение стилей компонента
import "../styles/badge.css";

// Компонент информационной плашки.
// Отображает оставшееся время проведения акции.
function SaleBadge() {
  return (
    <div className="sale-badge">
      {heroContent.badge}
    </div>
  );
}

export default SaleBadge;
