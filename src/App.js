import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="container__header">Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>
      <section className="section">
        <div className="section__body">
          <h2 className="section__title">Lista zadań</h2>
         <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </div>
  );
}

export default App;
