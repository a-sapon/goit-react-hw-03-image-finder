import React from 'react';
import styles from './Error.module.css';

const Error = () => (
  <div className={styles.errorContainer}>
    <p>
      Sorry🙁 We don't have anything matching your request. Please check your
      spelling.
    </p>
  </div>
);

export default Error;