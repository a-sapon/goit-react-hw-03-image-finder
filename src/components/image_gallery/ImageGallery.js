import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../image_gallery_item/ImageGalleryItem';
import Button from '../button/Button';

const ImageGallery = ({ photos, onHandleLoadMore, onHandleOpenModal }) => (
  <>
    <ul className={styles.ImageGallery}>
      {photos.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          onHandleOpenModal={onHandleOpenModal}
        />
      ))}
    </ul>
    {photos.length !== 0 && <Button onHandleLoadMore={onHandleLoadMore} />}
  </>
);

export default ImageGallery;