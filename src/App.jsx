// Импорт основных компонентов страницы
import Header from "./components/Header";
import Hero from "./components/Hero";
import BackgroundDecor from "./components/BackgroundDecor";
import GamesSection from "./components/GamesSection";

// Главный компонент приложения.
// Объединяет все основные секции лендинга в единую страницу.
function App() {
  return (
    <div className="app">

      {/* Декоративный фон страницы */}
      <BackgroundDecor />

      {/* Верхняя панель сайта */}
      <Header />

      <main>

        {/* Первый экран лендинга */}
        <Hero />

        {/* Раздел с карточками игр */}
        <GamesSection />

      </main>

    </div>
  );
}

export default App;
