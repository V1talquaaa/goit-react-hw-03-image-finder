import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal }) => {
  return <ul className={css.ImageGallery}>
    {images.map(({id, webformatURL, largeImageURL }) => {
      return (
            <ImageGalleryItem key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}/>
            )
    })}
    </ul>
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
}
export { ImageGallery };

