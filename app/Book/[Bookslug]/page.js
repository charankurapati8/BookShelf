import { getBook } from '@/lib/books'
import classes from './page.module.css'
import Image from 'next/image'
export default function BookDetailsPage({params}){
   const book = getBook(params.Bookslug);
   book.instructions = book.instructions.replace(/\n/g , '<br/>');
    return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={book.image} fill/>
        </div>  
        <div className={classes.headerText}>
            <h1>{book.title}</h1>
            <p>     
               by 
            </p>
            <p className={classes.creator}><a href={`mailto:${book.creator_email}`}>{book.creator}</a></p>
            <p className={classes.summary}>{book.summary}</p>
        </div>
    </header>
    <main>
        <p className={classes.instructions}
        dangerouslySetInnerHTML={{
            __html:book.instructions,
        }
        } ></p>
    </main>
    </>
    )
}