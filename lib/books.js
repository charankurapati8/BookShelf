import fs from 'node:fs'
import slugify from 'slugify';
import xss from 'xss';
import sql from 'better-sqlite3';
const db = sql('books.db');
export async function getBooks(){
   await new Promise((resolve)=>setTimeout(resolve,1000));
   return db.prepare('SELECT * FROM books').all();
}
export function  getBook(slug){
   return db.prepare('SELECT * FROM books WHERE slug = ?').get(slug)
}
export async function SaveBook(book){
   book.slug = slugify(book.title,{lower:true});
   book.instructions = xss(book.instructions);
   const extension = book.image.name.split('.').pop();
   const fileName = `${book.slug}.${extension}`
   const stream = fs.createWriteStream(`public/images/${fileName}`)
   const bufferedImage = await book.image.arrayBuffer();
   stream.write(Buffer.from(bufferedImage), (error) => {
      if(error){
         throw new Error('saving image failed');
      }
   });
   book.image = `/images/${fileName}`
   db.prepare(`
   INSERT INTO books 
   (title,summary,instructions,creator,creator_email,slug,image)
   VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @slug,
      @image
      )
   `).run(book);
}
