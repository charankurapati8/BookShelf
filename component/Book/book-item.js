'use client';
import Link from 'next/link';
import Image from 'next/image';
import classes from './book-item.module.css'
import React, { useEffect } from 'react';
import { FaBookmark,FaShare,FaTrash } from 'react-icons/fa';
import { useState } from 'react';
export default function BookItem({title,slug,image,summary,creator,onRemove,isFavouritePage,initialFavourite}) {
  const [isFavourite,setIsFavourite] = useState(initialFavourite);
  useEffect(()=>{
    setIsFavourite(initialFavourite);
  },[initialFavourite])
  const toggleFavourite = async(event) => {
    event.stopPropagation();
     setIsFavourite(true);
    const response = await fetch('/api/favourite',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({slug}),
    });
};
const removeFavBook = async(event) => {
  event.stopPropagation();
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
const handleBook = () => {
  window.location.href = `/Book/${slug}`;
};

const validatesummary = (text,maxLength)=>{
  if(text.length>maxLength){
    return text.substring(0,maxLength)+ '...';
  }
  return text;
}

const validatetitle = (text,maxLength)=>{
  if(text.length>maxLength){
    return text.substring(0,maxLength)+'...';
  }
  return text;
}

const validatecreator =  (text,maxLength)=>{
  if(text.length>maxLength){
    return text.substring(0,maxLength)+'...';
  }
  return text;
}

  return (
    <article className={classes.book} onClick={handleBook}>
      <header>
        <div className={classes.imageWrapper}>
        <Image src={image} alt={title}  width={375} height={200} priority/>
        </div>
        <div className={classes.headerText}>
          <h2>{validatetitle(title,15)}</h2>
          <p>by {validatecreator(creator,10)}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{validatesummary(summary,50)}</p>
        <div>
        <div className={classes.actions}>
      {!isFavouritePage && (
          <button className={`${isFavourite ? classes.disabled : classes.button}`}
          onClick={toggleFavourite}
          disabled={isFavourite}>
      <FaBookmark />
    </button>
          )}
          <div>
          <Link href={`/sharepage?title=${(title)}&summary=${(summary)}`}>
          <FaShare/>
          </Link>
          </div>
          </div>
      </div>
          <div className={classes.actions}>
          {isFavouritePage && <button className={classes.remove} 
         onClick={removeFavBook}>
          <FaTrash/>
          </button>}
          </div>
          </div>
    </article>
  );
}