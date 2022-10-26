import { Component } from 'react';
import { Wrap, Title, Text, ButtonWrap, Button } from './ColorPicker.styled';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <Wrap>
        <Title>Color Picker</Title>
        <Text>Selected is {label}</Text>
        <ButtonWrap>
          {this.props.options.map(({ label, color }, index) => (
            <Button
              key={label}
              style={{
                backgroundColor: color,
                border:
                  index === this.state.activeOptionIdx
                    ? '2px solid black'
                    : 'none',
              }}
              onClick={() => this.setActiveIdx(index)}
            ></Button>
          ))}
        </ButtonWrap>
      </Wrap>
    );
  }
}

// замыкание
