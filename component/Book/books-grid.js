import classes from './books-grid.module.css'
import BookItem from './book-item'
export default function Booksgrid({books}){
    return(
        <ul className={classes.books}>
            {books.map((book)=> <li key={book.id}>
            <BookItem {...book}/> 
            </li>)}
        </ul>
    )

}