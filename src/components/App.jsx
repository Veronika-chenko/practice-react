import { Routes, Route } from 'react-router-dom';
import { Nav, StyledLink } from './App.styled';
import colorPickerOptions from 'colorpicker.json';
// #pages
import { Counter } from '../pages/Counter';
import { Dropdown } from '../pages/Dropdown';
import { ColorPicker } from '../pages/ColorPicker';
import { Todos } from '../pages/Todos'; //also using for 'Not Found'
import { Container } from '../pages/Modal/Container';
import { CommentForm } from '../pages/CommentForm';

export const App = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          Counter
        </StyledLink>
        <StyledLink to="/container">Modal</StyledLink>
        <StyledLink to="/commentform">CommentForm</StyledLink>
        <StyledLink to="/dropdown">Dropdown</StyledLink>
        <StyledLink to="colorpicker">ColorPicker</StyledLink>
        <StyledLink to="todo">Todos</StyledLink>
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
        <Route path="todo" element={<Todos />} />
        <Route path="*" element={<Todos />} />
      </Routes>
    </div>
  );
};

// if Todos is used as <Route path="*" element={<Todo />} />
// can't rename Todo main folder. Maybe not for this reason
