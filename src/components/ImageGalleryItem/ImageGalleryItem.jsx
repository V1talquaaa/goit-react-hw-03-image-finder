import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({images, openModal}) => {
  return (images.map(({id, webformatURL, largeImageURL}) => {
    return (
    <li key={id} className={css.ImageGalleryItem}>
    <img src={webformatURL} alt='' className={css.ImageGalleryItemImage} onClick={() => openModal({largeImageURL})}/>
  </li>)
  }))
};


export { ImageGalleryItem }
