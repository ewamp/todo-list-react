import "./style.css";

const Buttons = (tasks, hideDoneTasks) => {
  if (tasks.length === 0) {
    return null
  }

  return (
    <div className="buttons">
      <button className="buttons__button">
        ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className={
          `buttons__button ${tasks.every(({ done }) => done) ? " disabled" : ""}`
        }
      >
        Ukończ wszystkie
      </button>
    </div >
  )
};

export default Buttons;