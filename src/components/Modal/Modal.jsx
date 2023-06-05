import { Component } from "react";
import css from './Modal.module.css'
import PropTypes from 'prop-types';
class Modal extends Component {

    componentDidMount() {
      window.addEventListener('keydown', this.handlePressESC)
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.handlePressESC)
     }

    handlePressESC = (e) => {
      if(e.code === 'Escape')
      this.props.closeModal()
    }

    closeModal = (e) => {
      if(e.target === e.currentTarget) {
        this.props.closeModal();
      }
      
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

  Modal.propTypes = {
    image: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
  }

  export {Modal}