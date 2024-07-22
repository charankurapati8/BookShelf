import { MongoClient } from "mongodb";

const url = 'mongodb+srv://kurapatireddy:nuKbinqIvXnh3zJJ@booksstorage.u5wmvv9.mongodb.net/?retryWrites=true&w=majority&appName=BooksStorage';
const dbName = 'booksStorage';
const client = new MongoClient(url);
const db = client.db(dbName);
const booksCollection = db.collection('books');
const favouriteBooksCollection = db.collection('favourite_books');

export default async function handle(req,res){
    if(req.method==='POST'){
        const {slug} = req.body;
        const book = await booksCollection.findOne({slug});
        if(book){
           await favouriteBooksCollection.insertOne(book);
            res.status(200).json({message: 'book is favourited'});
        }
        else{
            res.status(404).json({message:'book not found'});
        }
    } else if(req.method==='DELETE'){
        const {slug} = req.body;
        const book = await booksCollection.findOne({slug});
        if(book){
           await favouriteBooksCollection.deleteOne({slug});
            res.status(200).json({message: 'book is deleted'});
        }
        else {
            res.status(404).json({message:'book is not found'});
        }
    }
    else if(req.method==='GET'){
        const favouritebooks = await favouriteBooksCollection.find().toArray();
        res.status(200).json(favouritebooks);
    }

}