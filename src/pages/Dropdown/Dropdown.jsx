import { Component } from 'react';
import { Wrap, DropdownMenu } from './Dropdown.styled';

export class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible, //!true
        }))
    }
    // show = () => {
    //     this.setState({ visible: true });
    // }

    // hide = () => {
    //     this.setState({ visible: false });
    // }

    render() {
        const { visible } = this.state;
        return (
            <Wrap>
                <button
                    type="button"
                    style={{ marginRight: "8px", }}
                    onClick={this.toggle}
                    // onMouseOver={this.toggle}
                >
                    {visible ? 'Hide' : 'Show'}
                </button>
                {/* <button type="button" onClick={this.hide}>Hide</button> */}

                {visible && (
                    <DropdownMenu>Dropdown Menu</DropdownMenu>
                )}
            </Wrap>
        )
    } 
}