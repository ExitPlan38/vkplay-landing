import "../styles/scroll.css";

function ScrollButton() {
  const scrollToGames = () => {
    const section = document.getElementById("games");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="scroll-wrapper">

      <button
        className="scroll-button"
        onClick={scrollToGames}
        aria-label="Перейти к следующему разделу"
      >
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

      <span className="scroll-text">
        Вперёд за играми
      </span>

    </div>
  );
}

export default ScrollButton;
