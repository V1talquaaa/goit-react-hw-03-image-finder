import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return <ul className={css.ImageGallery}>
      <ImageGalleryItem images={images}/>
    </ul>
};

export { ImageGallery };

