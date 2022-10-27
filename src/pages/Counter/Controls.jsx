import { ButtonWrapp, CounterButton } from './Counter.styled';

export const Controls = ({ onIncrement, onDecrement }) => (
  <ButtonWrapp>
    <CounterButton type="button" onClick={onDecrement}>
      Зменшити на 1
    </CounterButton>
    <CounterButton type="button" onClick={onIncrement}>
      Збільшити на 1
    </CounterButton>
  </ButtonWrapp>
);
