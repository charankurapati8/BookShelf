import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideShow from '@/component/images/images-slideshow';
export default function Home() {

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}> 
        <ImageSlideShow/>
        
        </div>
       
        <div>
          <div className={classes.hero}>
            <h1>Book store</h1>
          </div>
          <div className={classes.cta}>
            <Link href="/Community">Join the Community</Link>
            <Link href="/Book">Explore books</Link>
          </div>
        </div>
      </header>
    </>
  );
}