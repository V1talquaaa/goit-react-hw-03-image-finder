import css from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({loadMoreImages}) => {

    return (
        <button type='submit' className={css.Button} onClick={loadMoreImages}>Load More</button>
    )
}

Button.propTypes = {
    loadMoreImages: PropTypes.func.isRequired,
}
export {Button}