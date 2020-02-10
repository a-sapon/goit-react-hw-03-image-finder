import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './image_gallery/ImageGallery';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from './modal/Modal';
import Spinner from './spinner/Spinner';
import Error from './error/Error';

const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '15153122-0963d39018d686d61465e9702';

class App extends Component {
  state = {
    search: '',
    page: 1,
    photos: [],
    largeImageURL: '',
    spinner: true,
    error: false
  };

  getPhotos = async () => {
    try {
      const { search, page } = this.state;
      const response = await axios.get(
        `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        spinner: false
      });
      return response.data.hits;
    } catch (error) {
      console.log()(error);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      page: 1
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await this.getPhotos();
    if (response.length !== 0) {
      this.setState(prev => {
        return {
          photos: [...response],
          page: prev.page + 1
        };
      });
    } else {
      this.setState(() => {
        return {
          error: true
        };
      });
      setTimeout(() => {
        this.setState({
          error: false
        })
      }, 3000)
    }
  };

  loadMore = async () => {
    const response = await this.getPhotos();
    this.setState(prev => {
      return {
        photos: [...prev.photos, ...response],
        page: prev.page + 1
      };
    });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyPress)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyPress)
  // }

  openModal = e => {
    this.setState({
      largeImageURL: e.target.dataset.picture
    });
    // window.onkeydown = this.handleKeyPress;
  };

  closeModal = () => {
    this.setState({
      largeImageURL: ''
    });

  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  };

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
    if (e.code === 'ArrowRight') {
      const currentLargeImg = this.state.largeImageURL;
      const currentObj = this.state.photos.find(
        item => item.largeImageURL === currentLargeImg
      );
      const IdxOfCurrentObj = this.state.photos.indexOf(currentObj);
      if (IdxOfCurrentObj < this.state.photos.length - 1) {
        const nextObj = this.state.photos[IdxOfCurrentObj + 1];
        this.setState({
          largeImageURL: nextObj.largeImageURL
        });
      } else {
        this.closeModal();
      }
    }
    if (e.code === 'ArrowLeft') {
      const currentLargeImg = this.state.largeImageURL;
      const currentObj = this.state.photos.find(
        item => item.largeImageURL === currentLargeImg
      );
      const IdxOfCurrentObj = this.state.photos.indexOf(currentObj);
      if (IdxOfCurrentObj !== 0) {
        const nextObj = this.state.photos[IdxOfCurrentObj - 1];
        this.setState({
          largeImageURL: nextObj.largeImageURL
        });
      } else {
        this.closeModal();
      }
    }
  };

  render() {
    const { search, photos, largeImageURL, spinner, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onHandleChange={this.handleChange}
          searchValue={search}
          onHandleSubmit={this.handleSubmit}
        />
        {spinner && <Spinner />}
        <ImageGallery
          photos={photos}
          onHandleLoadMore={this.loadMore}
          onHandleOpenModal={this.openModal}
        />
        {largeImageURL !== '' && (
          <Modal
            largeImageURL={largeImageURL}
            handleOverlayClick={this.handleOverlayClick}
            onHandleKeyPress={this.handleKeyPress}
          />
        )}
        {error && <Error />}
      </div>
    );
  }
}

export default App;