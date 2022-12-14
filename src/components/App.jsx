import { Routes, Route } from 'react-router-dom';
import { Nav, StyledLink } from './App.styled';
import colorPickerOptions from 'colorpicker.json';
// #pages
import { Counter } from '../pages/Counter';
import { Dropdown } from '../pages/Dropdown';
import { ColorPicker } from '../pages/ColorPicker';
import { Todos } from '../pages/Todos';
import { Container } from '../pages/Modal/Container';
import { CommentForm } from '../pages/CommentForm';
import { NotFound } from 'pages/NotFound';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
//
import { Mission } from './fortest/Mission';
import { Team } from './fortest/Team';
import { Reviews } from './fortest/Reviews';
import { ProductDetails } from 'pages/ProductDetails';
import { MusicCard } from 'pages/MusicCard';

export const App = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/practice-react" end>
          Counter
        </StyledLink>
        <StyledLink to="/container">Modal</StyledLink>
        <StyledLink to="/commentform">CommentForm</StyledLink>
        <StyledLink to="/dropdown">Dropdown</StyledLink>
        <StyledLink to="/colorpicker">ColorPicker</StyledLink>
        <StyledLink to="/todo">Todos</StyledLink>
        <StyledLink to="/music-card">Todos</StyledLink>
        {/*  */}
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/music-card">MusicCard</StyledLink>
      </Nav>
      <Routes>
        <Route path="/practice-react" element={<Counter />} />
        <Route path="/container" element={<Container />} />
        <Route path="/commentform" element={<CommentForm />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route
          path="/colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="/todo" element={<Todos />} />
        <Route path="/music-card" element={<MusicCard />} />
        {/* --------------- */}
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// if Todos is used as <Route path="*" element={<Todo />} />
// can't rename Todo main folder. Maybe not for this reason
