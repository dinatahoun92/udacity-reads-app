import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
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


    searchBooks = (query) =>{
    if(query){
      BooksAPI.search(query).then((result) => {
        if(!result.error){
          let Shelfs = result.map(book => {
            for (var i = 0; i < this.props.books.length; i++) {
              if (this.props.books[i].id === book.id) {
                book.shelf = this.props.books[i].shelf;
              }
            }
            return book;
          })
          this.setState({
            searchResult: result
          })
        
         
        }
        else{
          this.setState({searchResult: []});  
        }
      })
    } else{
          this.setState({searchResult: []});  
        }
    }
   
onChange = (query, event) => {
		this.updateQuery(query)
		this.searchBooks(query)
	}

 changeShelves(book,shelf){
           this.props.changeShelves(book,shelf)
       }
  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
               <Link to="/" className="close-search"></Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" 
                onChange={(event) => this.onChange(event.target.value)}
value={this.state.query}
                    />

              </div>
            </div>
           <div className="search-books-results">
       
                <ol className="books-grid">
                {this.state.searchResult.map((books) => {
                     

                               
                  return(                  
                     <Book key={books.id} books={books}  changeShelves={(book,shelf)=>{this.changeShelves(book,shelf)}}/>
                  
                  )
                })
                }
              </ol>
            </div>
          </div>
        )
  }
}
export default Search