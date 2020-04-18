import React from "react";

import axios from "axios";
import BookResult from "../components/BookResult";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: [],
        
        }
        
    }
   
    componentWillMount() {
        axios.get("/api/books").then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

   

    render() {
     
        console.log(this.state.savedBooks);
        return(
            <div>
               
            
                
    {this.state.savedBook > 0 ? <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    {this.state.savedBooks.map((book) => {
                      return (  <BookResult
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        link={book.link}
                        img={book.img}
                        id={book._id}
                       
                        key={book._id}/>);
                    })}
                </div> : 

<div id="resultsContainer">
<h3>Saved Books</h3>
<p>No saved books.</p>
</div>
                }
      
                
            
    
                 
        
    

            
            
            
            
            
            
            </div>
            
            
        );
    }
}

export default Saved;