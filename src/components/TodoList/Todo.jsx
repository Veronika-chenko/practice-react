export const TodoList = ({ todos }) => (
    <ul>
        {todos.map(({ id, text }) => (
        <li key={id}>
                <p>{text}</p>
                <button>delete</button>
        </li>
        ))}
    </ul>
);