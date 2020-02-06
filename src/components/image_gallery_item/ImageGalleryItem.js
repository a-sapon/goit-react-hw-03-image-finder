import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  onHandleOpenModal,
  webformatURL,
  largeImageURL
}) => (
  <li onClick={onHandleOpenModal} className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      data-picture={largeImageURL}
      alt=''
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;