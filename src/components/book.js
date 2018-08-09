import React from 'react'

class Book extends React.Component {
  state = {
  }
 
changeShelves(value){
        this.props.changeShelves(this.props.books,value)
    }

render(){
     let thumbnail;

      if(this.props.books.imageLinks){
          thumbnail =`url(${this.props.books.imageLinks.thumbnail})`
      }else{
          thumbnail= `url('https://placeholdit.co//i/128x193?&bg=555&fc=fff&text=Book Cover')`
      }
    
   
    return(
          <li key={this.props.books.id}>
                            
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:thumbnail}}></div>

                            <div className="book-shelf-changer">
                              <select value={this.props.books.shelf ||'none'}
                                  onChange={(event) => this.changeShelves(event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.books.title}</div>
                          <div className="book-authors">{this.props.books.authors}</div>
                        </div>
        </li>
    )
}
}
export default Book