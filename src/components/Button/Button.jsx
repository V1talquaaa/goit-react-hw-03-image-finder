import css from './Button.module.css'

const Button = ({loadMoreImages}) => {

    return (
        <button type='submit' className={css.Button} onClick={loadMoreImages}>Load More</button>
    )
}

export {Button}