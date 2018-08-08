import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './../BooksAPI'
import Book from './book.js'

class Search extends React.Component {
  state = {
      query:'',
      searchResult:[],
  }

updateQuery=(query) =>{
    this.setState({query:query})
}
clearQuery = () => {
    this.setState({ query: '' })
  }


  render() {
       let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
       showingBooks = this.props.books.filter((book) => match.test(book.name))
    } else {
       showingBooks = this.props.books
    }
              console.log(this.state.query)

    return (
          <div className="search-books">
            <div className="search-books-bar">
               <Link to="/" className="close-search"></Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" 
                onChange={(event) => this.updateQuery(event.target.value)}
value={this.state.query}
                    />

              </div>
            </div>
           <div className="search-books-results">
              <ol className="books-grid">
                
              </ol>
            </div>
          </div>
        )
  }
}
export default Search