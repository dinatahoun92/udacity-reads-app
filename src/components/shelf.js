import React from 'react'
import Book from './book.js'


class Shelf extends React.Component {
  state = {
    
  }


  render() {
    return (
         <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
         {this.props.books.filter(books => books.shelf == 'currentlyReading').map(books =>(
                            <li key={books.id}>
                        <Book books={books}/>
                                </li>
          ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
              <ol className="books-grid">
         {this.props.books.filter(books => books.shelf == 'wantToRead').map(books =>(
                            <li key={books.id}>
                        <Book books={books}/>
                                </li>
          ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
 <ol className="books-grid">
         {this.props.books.filter(books => books.shelf == 'read').map(books =>(
                            <li key={books.id}>
                        <Book books={books}/>
                                </li>
          ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )}
}
export default Shelf