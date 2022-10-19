import { Component } from 'react';
import { TodoForm } from './TodoList.styled';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.message);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <TodoForm onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleChange}></textarea>
        <button type="submit">Add</button>
      </TodoForm>
    );
  }
}
