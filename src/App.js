import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './components/book.js'
import Search from './components/search.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <Route path="/search" render={({history}) =>
    
           (
        <Search/>
        )}/>
       <Route exact path="/" render={({history}) =>
    (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
                    <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
         <Book/>
           
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
  
            <Book/>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
             <Book/>
          
                     
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
