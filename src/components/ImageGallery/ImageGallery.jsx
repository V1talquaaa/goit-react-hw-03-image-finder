import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
  return <ul className={css.ImageGallery}>
      <ImageGalleryItem images={images} openModal={openModal}/>
    </ul>
};

export { ImageGallery };

