const {MongoClient} = require('mongodb');
const url =  'mongodb+srv://kurapatireddy:nuKbinqIvXnh3zJJ@booksstorage.u5wmvv9.mongodb.net/?retryWrites=true&w=majority&appName=BooksStorage';
const dbName  = 'booksStorage';
const client = new MongoClient(url);

async function initDB() {
      await client.connect();
      console.log('database is connected');
      const db = client.db(dbName);
      return db;
}

async function initData(db){
    const booksCollection = db.collection('books');
    await booksCollection.createIndex({slug:1},{unique: true});

    const dummyBooks = [
        {
            title: 'java',
            slug: 'series-of-java',
            image: '/images/java-programming.png',
            summary:
              'Enjoy in learning with core programming books',
            instructions: `
              1.Introduction:
              Java is a high-level, object-oriented programming language developed by Sun Microsystems in the mid-1990s.
              It was designed to be platform-independent, meaning that Java programs can run on any device or platform that has a Java Virtual Machine  installed.
        
              2.Syntax:
              Java syntax is similar to that of C and C++, making it relatively easy for developers from those languages to transition to Java.
        
              3.Object-Oriented Programming:
              Java is primarily an object-oriented programming (OOP) language. It supports concepts such as 
              classes, objects, inheritance, polymorphism, and encapsulation. OOP promotes code reusability, modularity, and easier maintenance.
            `,
            creator: 'John',
            creator_email: 'johndoe@example.com',
          },
          {
            title: 'C - programmming',
            slug: 'basic-of-c',
            image: '/images/c.png',
            summary:
              'C is a basic programming language',
            instructions: `
              1. Introduction:
              C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. 
              It was designed to be a system programming language for developing operating systems like UNIX.
        
              2. Procedural Language:
              C is primarily a procedural programming language, meaning that it follows a top-down approach to program structure. 
        
              3. Structured Programming:
              C supports structured programming constructs such as loops (for, while, do-while), conditional statements (if-else), and functions.
               These constructs enable developers to write clear, modular, and maintainable code.
            `,
            creator: 'Max',
            creator_email: 'max@example.com',
          },
          {
            title: 'python course',
            slug: 'series-of-python',
            image: '/images/python-course.png',
            summary:
              "Come and Enjoy learning of Python course",
            instructions: `
              1. Introduction:
              Python is a high-level,interpreted programming language created by Guido van Rossum in the late 1980s.
              It emphasizes code readability and simplicity, making it popular among developers for various applications, including web development.
        
              2. Interpreted Language:
              Python is an interpreted language, meaning that Python code is executed line by line by the Python interpreter.
        
              3. High-Level Data Structures:
              Python provides built-in support for high-level data structures such as lists, dictionaries, tuples, sets, and more.
            `,
            creator: 'Smith',
            creator_email: 'laurasmith@example.com',
          },
    ];
    await booksCollection.insertMany(dummyBooks);
    const favouriteBooksCollection = db.collection('favourite_books');
    await favouriteBooksCollection.createIndex({book_id:1});
}

async function main(){
  const db = await initDB();
  await initData(db);
  client.close();
}

main();
