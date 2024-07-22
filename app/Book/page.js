import React from 'react';
import Booksgrid from '@/component/Book/books-grid'
import classes from './page.module.css'
import { getBooksStorage } from '@/lib/addbook';
import { Suspense } from 'react';
 async function Books(){
        const books = await getBooksStorage();
        return <Booksgrid books={books}/>
}
export default function Book(){
  return(
        <>
        <header className={classes.header}>
           <h1>
            Interesting Books in the browser
            </h1> 
        </header>
        <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>fetching books.....</p>}>
                <Books/>
                </Suspense>
        </main>
        </>
)
}