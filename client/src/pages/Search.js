import React from "react";

import BookResult from "../components/BookResult";
import axios from "axios";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: [],
            
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }
    
   
    handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        axios.post("/search", {title: this.state.bookInput})
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }
  

    render() {
        

        return(
            <main>
                
                
                <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => this.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <button type="submit" onClick={(e) => this.handleSearchClick(e)}>Search</button>
            </form>
        </div>
                
                
                
                
                
                
                {(this.state.bookData.length > 0) ?
                    <div id="resultsContainer">
                    <h3>Results Found</h3>
                    {this.state.bookData.map((book) => {
                        const bookInfo = book.volumeInfo;
                        return(
                           
                             <BookResult
                            title={bookInfo.title}
                            authors={bookInfo.authors}
                            description={bookInfo.description}
                            link={bookInfo.canonicalVolumeLink}
                            img={bookInfo.imageLinks}
                           
                            key={book.id}/>);

                    })}
                
                </div> : 
                <div id="resultsContainer">
                <h3>Saved Books</h3>
                <p>No saved books.</p>
            </div>
                
                
                }




            
        


                
            
        
            
                 
            


            </main>
        );
    }
}

export default Search;