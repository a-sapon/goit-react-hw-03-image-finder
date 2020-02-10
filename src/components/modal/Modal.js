import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.props.onHandleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onHandleKeyPress)
  }

  render() {
    return (
      <div onClick={e => this.handleOverlayClick(e)} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt='' />
        </div>
      </div>
    );
  }
}

export default Modal;
