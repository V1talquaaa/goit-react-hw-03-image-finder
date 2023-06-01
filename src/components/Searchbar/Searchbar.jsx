import { Component } from "react";
import css from './Searchbar.module.css'
import searchIcon from 'search.svg'


class Searchbar extends Component {

  state = {
    query: '',
}

handleQuery = (e) => {
  const query = e.target.value;
  this.setState({query: query})
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state.query);
  this.setState({query: ''})

}

    render() {
        return (
          <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton} >
              <span className={css.SearchFormButtonLabel}>{searchIcon}</span>
            </button>
        
            <input
              className={css.SearchFormInput}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.handleQuery}
              value={this.state.query}
            />
          </form>
          </header>  
        )
    }
}

export default Searchbar