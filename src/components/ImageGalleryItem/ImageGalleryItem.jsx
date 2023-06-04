import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImageURL, openModal}) => {
    return (
    <li key={id} className={css.ImageGalleryItem}>
    <img src={webformatURL} alt='' className={css.ImageGalleryItemImage} onClick={() => openModal({largeImageURL})}/>
  </li>)
  
};


export { ImageGalleryItem }
