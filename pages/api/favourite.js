import sql from 'better-sqlite3'
const db = sql('books.db');
export default function handle(req,res){
    if(req.method==='POST'){
        const {slug} = req.body;
        const book = db.prepare('SELECT * FROM books WHERE slug=?').get(slug);
        if(book){
            const stmt = db.prepare('INSERT INTO favourite_books (book_id, slug, title, image, summary, instructions, creator,creator_email ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
            stmt.run(
                book.id,
                book.slug,
                book.title,
                book.image,
                book.summary,
                book.instructions,
                book.creator,
                book.creator_email
            );
            res.status(200).json({message : 'book added to favourite'});
        } else{
            res.status(404).json({message:'book not found'});
        }
    } else if (req.method==='DELETE'){
        const {slug} = req.body;
        const book = db.prepare('SELECT * FROM  books WHERE slug=?').get(slug);
        if(book){
            const stmt = db.prepare('DELETE FROM favourite_books WHERE book_id=?');
            stmt.run(book.id);
            res.status(200).json({message:'removed book'});
        } else{
            res.status(400).json({message:'book not found in fac'});
        }

    } 
    else if (req.method === 'GET'){
        const favouritebooks = db.prepare(`
            SELECT books.* ,favourite_books.*
            FROM favourite_books
            JOIN books ON books.id = favourite_books.book_id
            `).all();
            res.status(200).json(favouritebooks);
    } 
}