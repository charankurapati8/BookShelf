'use client'
import ImagePicker from '@/component/Book/image-picker';
import classes from './page.module.css';
import { ShareBook } from '@/lib/actions';
import BookFormSubmit from '@/component/Book/book-form-submit';
export default function ShareBookPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={ShareBook}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image"/>
          <p className={classes.actions}>
            <BookFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}