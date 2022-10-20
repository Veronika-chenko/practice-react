import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWrap } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalWrap>{this.props.children}</ModalWrap>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

// контент передаэьбся ззовні
// {this.props.children}:
// so now our Modal is reusable
// createPortal() method, call result
// зарендерити в інше місце

// *цікавий факт - коли handleKeyDown був анонімною ф-цією у
// componentDidMount -- він не сапвцьовував,
// а як окремий метод - спрацьовує
