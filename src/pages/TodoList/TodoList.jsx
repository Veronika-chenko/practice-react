import PropTypes from 'prop-types';
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
  ontoggleCompleted: PropTypes.func.isRequired,
};
