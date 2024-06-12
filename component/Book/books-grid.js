import classes from './books-grid.module.css'
import BookItem from './book-item'
import React from 'react'
export default function Booksgrid({books}){
    return(
        <ul className={classes.books}>
            {books.map((book)=> <li key={book.id}>
            <BookItem {...book}/>
            </li>)}
        </ul>
    )

}