import { TodoItemsWrap, TodoItem, TodoInput } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo, ontoggleCompleted }) => (
  <TodoItemsWrap>
    {todos.map(({ id, text, completed }) => (
      <TodoItem key={id}>
        <TodoInput
          type="checkbox"
          width="10px"
          checked={completed}
          onChange={() => ontoggleCompleted(id)}
        />
        <p>{text}</p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </TodoItem>
    ))}
  </TodoItemsWrap>
);

// шукати по id
