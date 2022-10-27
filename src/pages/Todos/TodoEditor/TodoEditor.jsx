import { Component } from 'react';
import { TodoForm, TodoTextbox, TodoFormButton } from './TodoEditor.styled';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { message } = this.state;
    e.preventDefault();
    // console.log(this.state.message);
    if (message.trim() === '') {
      return;
    }
    this.props.onSubmit(message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <TodoForm onSubmit={this.handleSubmit}>
        <TodoTextbox value={message} onChange={this.handleChange}></TodoTextbox>
        <TodoFormButton type="submit">Add</TodoFormButton>
      </TodoForm>
    );
  }
}
