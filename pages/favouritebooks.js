import BookItem from "@/component/Book/book-item";
import { useState ,useEffect} from "react"
import Mainheader from "@/component/main-header/main-header";
import MainHeaderBackground from "@/component/main-header/main-header-background";
import classes from './favourite.module.css'
export default function Favourite(){
    const [favouriteBooks,setFavouriteBooks] = useState([]);
  useEffect(()=>{
    const fetchFavouriteBooks = async()=>{
            const response = await fetch('/api/favourites');
            const data = await response.json();
            setFavouriteBooks(data); 
    };
    fetchFavouriteBooks();

    document.body.style.backgroundColor = '#363234';
    document.body.style.color = '#eee7ea';
    return ()=>{
        document.body.style.backgroundColor='';
        document.body.style.color = '';
    };
  },[]);

  const handleRemove = (slug)=>{
    setFavouriteBooks(favouriteBooks.filter(book=>book.slug!==slug));
  };

    return (
        <>
            <header className={classes.header}>
                <Mainheader/>
            </header>
            <h1 className={classes.h1}>FAVOURITE BOOKS</h1>
            <div>
                <MainHeaderBackground/>
            </div>
            <div className={classes.main}>
            <ul className={classes.books}>
            {
                favouriteBooks.length===0 ? (
                    <p>No fav book yet</p>
                ):(
                    favouriteBooks.map((book)=>(
                        <BookItem
                        key={book.slug}
                        title={book.title}
                        slug={book.slug}
                        image={book.image}
                        summary={book.summary}
                        creator={book.creator}
                        isFavouritePage={true}
                        onRemove={handleRemove}
                        />
                    ))
                )}
            </ul>
            </div>
        </>
    );
}