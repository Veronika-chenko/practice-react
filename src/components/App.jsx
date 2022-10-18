import { Component } from "react";
// import { Counter } from "./Counter";
// import { Dropdown } from "./Dropdown";
// import { ColorPicker } from "./ColorPicker";
import { TodoList } from "./TodoList/Todo";

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
    ],
  }

  render () {
    const { todos } = this.state;
    return (
      <>
        {/* <Counter />
        <ColorPicker options={colorPickerOptions} />
        <Dropdown /> */}
        <TodoList todos={todos} />
      </>
    )
  }
}
