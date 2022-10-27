import { Routes, Route } from 'react-router-dom';
import { Nav, StyledLink } from './App.styled';
// #pages
import { Counter } from '../pages/Counter';
import { Dropdown } from '../pages/Dropdown';
import { ColorPicker } from '../pages/ColorPicker';
import { Todo } from '../pages/TodoList/Todos'; //for Not Found
import { Container } from '../pages/Modal/Container';
import colorPickerOptions from 'colorpicker.json';
import { CommentForm } from '../pages/CommentForm';

export const App = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          Counter
        </StyledLink>
        <StyledLink to="/container">Container</StyledLink>
        <StyledLink to="/commentform">CommentForm</StyledLink>
        <StyledLink to="/dropdown">Dropdown</StyledLink>
        <StyledLink to="colorpicker">ColorPicker</StyledLink>
        <StyledLink to="todo">Todo</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/container" element={<Container />} />
        <Route path="/commentform" element={<CommentForm />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route
          path="colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="todo" element={<Todo />} />
        <Route path="*" element={<Todo />} />
      </Routes>
    </div>
  );
};
