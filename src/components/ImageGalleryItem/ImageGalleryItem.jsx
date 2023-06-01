import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({images}) => {
  return (images.map(({id, webformatURL, largeImageURL}) => {
    return (
    <li key={id} className={css.ImageGalleryItem}>
    <img src={webformatURL} alt={largeImageURL} className={css.ImageGalleryItemImage} />
  </li>)
  }))
};

export { ImageGalleryItem }
