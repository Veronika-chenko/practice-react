import { useState, useEffect } from 'react';
import { Controls } from './Controls';
import { CounterWrap, CounterValue, Text } from './Counter.styled';
// import { Button } from '../../components/Button';

export function Counter() {
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);

  const handleIncrement = () => {
    setValue(state => state + 1);
  };

  const handleDecrement = () => {
    setValue(state => state - 1);
  };

  useEffect(() => {
    if (value === 0) {
      return;
    } // not a solution, cause 0 repeats
    setTotal(state => state + 1);
  }, [value]);
  return (
    <>
      <CounterWrap>
        <Text>total click: {total}</Text>
        <CounterValue>{value}</CounterValue>
        <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </CounterWrap>

      {/* <Button>Search</Button>
      <Button type="submit" disabled>
        Login
      </Button> */}
    </>
  );
}

// class OldCounter extends Component {
//   static defaultProps = {
//     initualValue: 0,
//   };

//   state = {
//     value: this.props.initualValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({ value: prevState.value - 1 }));
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <CounterWrap>
//         <CounterValue>{value}</CounterValue>
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </CounterWrap>
//     );
//   }
// }

// onClick={callback}
// у метода класса нужно привязать контекст(синтаксис =>)
// от разработчика нужен только метод, а обновляет сам React
// напрямую нельзя изменять -> метод setState()
// create new: newState = {...currState, ...update}
// *параметр (prevState) в =>fn - сюда React передает ссылку на актуальный state
// *static defaultProps, static defaultProps благодаря babel
