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
        )}
}
export default Shelf