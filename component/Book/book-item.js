import Link from 'next/link';
import Image from 'next/image';
import classes from './book-item.module.css'
import React from 'react';

export default function BookItem({title,slug,image,summary,creator}) {
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
          <Link href={`/Book/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}