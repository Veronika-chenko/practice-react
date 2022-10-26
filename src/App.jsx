import { Counter } from './components/Counter';
// import { Dropdown } from './components/Dropdown';
import { ColorPicker } from './components/ColorPicker';
// import { Todo } from 'components/TodoList/Todos';
// import { Container } from 'components/Modal/Container';
import colorPickerOptions from 'colorpicker.json';

export const App = () => {
  return (
    <>
      <Counter />
      <ColorPicker options={colorPickerOptions} />
      {/* <Dropdown /> */}
      {/* <Todo /> */}
      {/* <Container /> */}
    </>
  );
};
