import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, handleOverlayClick }) => (
  <div onClick={e => handleOverlayClick(e)} className={styles.Overlay}>
    <div className={styles.Modal}>
      <img src={largeImageURL} alt='' />
    </div>
  </div>
);

export default Modal;