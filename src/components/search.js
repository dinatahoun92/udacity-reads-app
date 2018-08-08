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
        this.setState({searchResult: result})
        
        }
        else{
          this.setState({searchResult: []}); 
        }
      })
    }
    else{
      this.setState({searchResult: []});
    }
  }
onChange = (query, event) => {
		this.updateQuery(query)
		this.searchBooks(query)
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
                {
                    this.state.searchResult.map((books) =>(
                         <Book key={books.id} books={books}/>
                    )
                                                                        )
                }
                  </ol>
            </div>
          </div>
        )
  }
}
export default Search