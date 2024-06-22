'use client';
import Link from 'next/link';
import Image from 'next/image';
import classes from './book-item.module.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
export default function BookItem({title,slug,image,summary,creator,onRemove,isFavouritePage}) {
  const [isFavourite,setIsFavourite] = useState(false);

  useEffect(()=>{
    const checkFav = async()=>{
      const response = await fetch('/api/favourite');
      const data = await response.json();
      const isFav = data.some(book=>book.slug===slug);
      setIsFavourite(isFav);
    };
    checkFav();
  },[slug]);

  
  const toggleFavourite = async () =>{
    if(isFavourite)return;
    setIsFavourite(true);
    const response = await fetch('/api/favourite',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({slug}),
    });
    if (!response.ok) {
      throw new Error('Failed to add favorite');
  } 
};
const removeFavBook = async()=>{
  const response = await fetch('/api/favourite',{
    method:'DELETE',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify({slug}),
  });
  if(response.ok){
    onRemove(slug);
    setIsFavourite(false);
  }
};

  return (
    <article className={classes.book}>
      <header>
        <div className={classes.imageWrapper}>
        <Image src={image} alt={title} fill/>
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
        {!isFavouritePage && (
            <div>
              <button
                className={`${isFavourite ? classes.disabled : classes.button}`}
                onClick={toggleFavourite}
                disabled={isFavourite}
              >
                {isFavourite ? 'Already in favorites' : 'Add favorite books'}
              </button>
            </div>
          )}
          <div>
          <Link href={`/sharepage?title=${(title)}&summary=${(summary)}`}>Share Book</Link>
          </div>
          <Link href={`/Book/${slug}`}>View Details</Link>
          <div>
          {isFavouritePage && <button className={classes.remove} 
         onClick={removeFavBook}>Remove book</button>}
          </div>
        </div>
        
      </div>
    </article>
  );
}