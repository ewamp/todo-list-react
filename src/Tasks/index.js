import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li
            className={`section__listItem${task.done && props.hideDoneTasks ? " section__listItem--hidden" : ""}`}
            key={task.id}>

                <button className="section__button section__button--done">
                {task.done ? "✔" : ""}
                </button>
                <span className={`section__listContent${ task.done ? " section__listItem--done" : ""}`}>
                {task.content}
                </span>
                <button className=" section__button section__button--red">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;