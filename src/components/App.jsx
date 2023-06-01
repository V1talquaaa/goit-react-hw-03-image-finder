import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from 'Services/getNews';
import { Circles } from 'react-loader-spinner';
import { Button } from './Button/Button';
import './styles.module.css'


export class App extends Component {
  state = {
    isShowModal: false,
    query: '',
    page: 1,
    images: [],
    visible: false,
    isHiden: true,

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query !== '') {
      this.setState({visible: true, page: 2, isHiden: false})
      getImages(this.state.query, this.state.page)
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => {
          this.setState({visible: false})
          console.log(this.state)
        })
        
      }
  }

  onSubmit = (query) => {
    this.setState({query: query, page: 1});
  };

  loadMoreImages = () => {
    getImages(this.state.query, this.state.page)
      .then(response => response.json())
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1
        }));
      });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.visible &&
        <Circles
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper"
          visible={this.state.visible}
        />}
        {this.state.isHiden? '' : <Button loadMoreImages={this.loadMoreImages}/>}
        
      </>
    );
  }
}
