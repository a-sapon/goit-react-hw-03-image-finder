import React from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onHandleSubmit, onHandleChange, searchValue }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onHandleSubmit}>
      <button type='submit' className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search images and photos'
        onChange={e => onHandleChange(e)}
        name='search'
        value={searchValue}
      />
    </form>
  </header>
);

export default Searchbar;