import React from 'react';
import Booksgrid from '@/component/Book/books-grid'
import classes from './page.module.css'
import {  getBooks } from '@/lib/books'
import { Suspense } from 'react';
import Link from 'next/link';
import SearchPage from '../searchpage/searchpage';
 async function Books(){
        const books = await getBooks();
        return <Booksgrid books={books}/>
}

export default function Book(){
  return(
        <>
        <header className={classes.header}>
           <h1>
            Interesting Books in the browser
            </h1> 
            <p>choose your favourite book</p>
            <p className={classes.cta}>
                <Link href="/Sharebook">share your favourite book</Link>        
            </p>
           <SearchPage/>
            <div> 
            </div>
        </header>
        <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>fetching books.....</p>}>
                <Books/>
                </Suspense>
        </main>
        </>
)
}