import Header from "./components/Header";
import Hero from "./components/Hero";
import BackgroundDecor from "./components/BackgroundDecor";
import GamesSection from "./components/GamesSection";

function App() {
  return (
    <div className="app">

      <BackgroundDecor />

      <Header />

      <main>

        <Hero />

        <GamesSection />

      </main>

    </div>
  );
}

export default App;
