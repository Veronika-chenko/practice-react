import { Component } from 'react';
import { Controls } from './Controls';
import { CounterWrap, CounterValue } from './Counter.styled';

export class Counter extends Component {
    static defaultProps = {
        initualValue: 0,
    }

    state = {
        value: this.props.initualValue,
    }

    handleIncrement = () => {
        this.setState((prevState) => ({value: prevState.value + 1}))
    }

    handleDecrement = () => {
        this.setState((prevState) => ({value: prevState.value - 1}))
    }

    render() {
        return (
            <CounterWrap>
                <CounterValue>{this.state.value}</CounterValue>
                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
            </CounterWrap>
        )
    }
}

// onClick={callback}
// у метода класса нужно привязать контекст(синтаксис =>)
// от разработчика нужен только метод, а обновляет сам React
// напрямую нельзя изменять -> метод setState()
// create new: newState = {...currState, ...update}
// *параметр (prevState) в =>fn - сюда React передает ссылку на актуальный state
// *static defaultProps, static defaultProps благодаря babel