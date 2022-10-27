import { Component } from 'react';
import { Modal } from './Modal';
// import { Clock } from 'components/CLock/Clock';

export class Container extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        {/* {showModal && <Clock />} */}
        {/* <Clock /> */}
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Modal Content</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo sed beatae porro corrupti, soluta officiis
              molestiae expedita. Exercitationem nesciunt at unde corporis fugit
              obcaecati, eaque hic nihil quidem dicta.
            </p>
            <button type="button" onClick={this.toggleModal}>
              CLose
            </button>
          </Modal>
        )}
      </>
    );
  }
}
// слідкуй за словами: *setState
// Uncaught TypeError: this.setStates<-? is not a function
