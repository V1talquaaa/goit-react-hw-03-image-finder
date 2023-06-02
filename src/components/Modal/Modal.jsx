import { Component } from "react";
import css from './Modal.module.css'
class Modal extends Component {
    closeModal = () => {
      this.props.closeModal();
    };
  
    render() {
      const { image } = this.props;
  
      return (
        <div className={css.Overlay} onClick={this.closeModal}>
          <div className={css.Modal}>
            <img src={image.largeImageURL} alt={image.tags} />
          </div>
        </div>
      );
    }
  }

  export {Modal}