import React from 'react';
import styles from './Button.module.css';

const Button = ({ onHandleLoadMore }) => (
  <button onClick={onHandleLoadMore} type='button' className={styles.Button}>
    Load more
  </button>
);

export default Button;