import { useState } from 'react';
import { Wrap, Title, Text, ButtonWrap, Button } from './ColorPicker.styled';

export function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  const { label } = options[activeOptionIdx];

  return (
    <Wrap>
      <Title>Color Picker</Title>
      <Text>Selected is {label}</Text>
      <ButtonWrap>
        {options.map(({ label, color }, index) => (
          <Button
            key={label}
            style={{
              backgroundColor: color,
              border: index === activeOptionIdx ? '2px solid black' : 'none',
            }}
            onClick={() => setActiveOptionIdx(index)}
          ></Button>
        ))}
      </ButtonWrap>
    </Wrap>
  );
}

//
//анонимка для обновления части стейта
//onClick={() => setActiveOptionIdx(index)}
//
//const { label } = options[activeOptionIdx];
// options[activeOptionIdx].label;
// class OldColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     //  by idx get ref on active obj
//     const { label } = options[activeOptionIdx];

//     return (
//       <Wrap>
//         <Title>Color Picker</Title>
//         <Text>Selected is {label}</Text>
//         <ButtonWrap>
//           {this.props.options.map(({ label, color }, index) => (
//             <Button
//               key={label}
//               style={{
//                 backgroundColor: color,
//                 border:
//                   index === this.state.activeOptionIdx
//                     ? '2px solid black'
//                     : 'none',
//               }}
//               onClick={() => this.setActiveIdx(index)}
//             ></Button>
//           ))}
//         </ButtonWrap>
//       </Wrap>
//     );
//   }
// }

// замыкание
