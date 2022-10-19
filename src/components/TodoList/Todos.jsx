import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '../../todos.json';

import { TodoEditor } from 'components/TodoList/TodoEditor';
import { TodoList } from '.';
import { Filter } from 'components/TodoList/TodoFilter';

export class Todo extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

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
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

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
      <>
        <div>
          <p>Total: {totalTodosCount}</p>
          <p>Completed: {completedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} changeFilter={this.changeFilter} />
        <TodoList
          todos={filteredTodo}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
      </>
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
