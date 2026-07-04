// Подключение стилей компонента
import "../styles/header.css";

// Импорт изображения логотипа
import logo from "../assets/images/logo.png";

// Компонент верхней панели сайта.
// Отображает логотип и кнопку входа.
function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* Логотип игровой платформы */}
        <img
          className="header__logo-image"
          src={logo}
          alt="VK Play"
        />

        {/* Кнопка входа в пользовательский аккаунт */}
        <button className="header__login">
          Войти
        </button>

      </div>
    </header>
  );
}

export default Header;
