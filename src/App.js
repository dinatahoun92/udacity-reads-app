import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/shelf.js'
import Search from './components/search.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class BooksApp extends React.Component {
   constructor(props){
        super(props)
        this.state={
            books:[],
        }
    }
 
  componentDidMount () {
   this.getAll();
    
      
  }
   getAll= ()=>{BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })}
     
   
   changeShelves = (book, shelf)=>{
       
        if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                books: state.books.filter(item => item.id !== book.id).concat([book])
            }));
            })
            .catch(err => {
                alert('error is ' + err)
            });
        }
    };
   
    
  render() {
             console.log(this.state.books)

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
           <Shelf books={this.state.books} changeShelves={(book,shelf)=>this.changeShelves(book,shelf)}/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
