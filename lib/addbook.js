import fs from 'node:fs'
import slugify from 'slugify'
import xss from 'xss'
import { MongoClient } from 'mongodb';

const url =  'mongodb+srv://kurapatireddy:nuKbinqIvXnh3zJJ@booksstorage.u5wmvv9.mongodb.net/?retryWrites=true&w=majority&appName=BooksStorage';
const dbName  = 'booksStorage';
const client = new MongoClient(url);
const db = client.db(dbName);
const booksCollection = db.collection('books');

export async function getBooksStorage(){
    await new Promise((resolve)=> setTimeout(resolve,1000)); 
    const books =  await booksCollection.find().toArray();
    return books.map(book=>({
        ...book,
        _id:book._id.toString(),
    }));
}

export  function getBookStorage(slug){
    return booksCollection.findOne({slug});
}

export async function Save(book){
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
    await booksCollection.insertOne(book);
}