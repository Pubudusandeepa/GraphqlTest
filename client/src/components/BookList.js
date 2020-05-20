import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql} from 'react-apollo'
import {getBooksQuery} from '../querys/querys'
import BookDetails from '../components/BookDetails'


 class  BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        var data = this.props.data
        console.log(data)
        
        if(data.loading){
            return(<div>Loading books..</div>)
        }else{
            return data.books.map(book =>{
                return(
                    <li key={book.id} onClick={(e) =>{this.setState({ selected: book.id})}}>{book.name}</li>
                )
            })
        }
    }   

   render(){
    return (
        <div>
           <ul>
            {this.displayBooks()}
           </ul>
         <BookDetails bookId={this.state.selected} />
        </div>
    )
   }
  
}

export default graphql(getBooksQuery)(BookList)
