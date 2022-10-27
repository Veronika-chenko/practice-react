import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '../../todos.json';
import { TodoWrap, TodoInfo } from './Todos.styled';
import { TodoEditor } from 'pages/Todos/TodoEditor/TodoEditor';
import { TodoList } from 'pages/Todos/TodoList/TodoList';
import { Filter } from 'pages/Todos/TodoFilter/TodoFilter';

const TODOS = 'todos';

export class Todos extends Component {
  state = {
    todos: initialTodos,
    // todos: [],
    filter: '',
  };

  componentDidMount() {
    const todos = localStorage.getItem(TODOS);
    const parsedTodos = JSON.parse(todos);
    // console.log(parsedTodos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(_, prevState) {
    // check isUpdate
    if (this.state.todos !== prevState) {
      localStorage.setItem(TODOS, JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    // console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    // кидаємо в state на базі попереднього
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodosCount = todos.length;
    const completedTodosCount = this.getCompletedTodoCount();
    const filteredTodo = this.getFilteredTodos();

    return (
      <TodoWrap>
        <TodoInfo>
          <p>Total: {totalTodosCount}</p>
          <p>Completed: {completedTodosCount}</p>
        </TodoInfo>

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} changeFilter={this.changeFilter} />
        <TodoList
          todos={filteredTodo}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
      </TodoWrap>
    );
  }
}

// -не мутувати state; не мутувати колекції state
//- помилка передавати у prop ВИКЛИК ф-ції, зациклиться, все впаде
// onDeleteTodo={this.deleteTodo()}❌, слідкуй за цим

// -toggleCompleted(){} якщо співпадають id - буквально заміняємо todo:
// у arr на місце стврого{} поставити new obj з тими ж властивостями,
// що у старої, але з інверсією властивості completed

// часті помилки: забуваю вказувати після prevState який саме state хочу змінити
// використовуй деструктуризація при розпиленні

// для filter храним state в родителе

// componentDidUpdate не делать publ свойством
// JSON parse/stringify

// перевіряти, що повертаєбся, коли assign or call something
// Uncaught TypeError: Cannot read properties of null (reading 'length')

// #1 for better understanding:
// toggleCompleted = todoId => {
//   this.setState(prevState => ({
//     todos: prevState.todos.map(todo => {
//       if (todo.id === todoId) {
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       }
//       return todo;
//     }),
//   }));
// }
