import "../styles/header.css";

import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <img
          className="header__logo-image"
          src={logo}
          alt="VK Play"
        />

        <button className="header__login">
          Войти
        </button>

      </div>
    </header>
  );
}

export default Header;