'use client';
import classes from './books-grid.module.css'
import BookItem from './book-item'
import React, { useEffect, useState } from 'react'
export default function Booksgrid({books}){
    const [favourite,setFavourite] = useState([]);
    useEffect(()=>{
        const fetchfavbooks = async () =>{
            const response = await fetch('/api/favourite');
            if(response.ok){
                const data = await response.json();
                setFavourite(data);
            }
        }
        fetchfavbooks();
    },[]);
    return(
        <ul className={classes.books}>
            {books.map((book)=> 
               {
               const isFavourite  = favourite.some((favbook)=>favbook.slug===book.slug);
            return(
                    <li key={book.id}>
                    <BookItem
                   initialFavourite={isFavourite}
                   slug={book.slug}
                    {...book}/> 
                    </li>
           );
})}
        </ul>
    );

}