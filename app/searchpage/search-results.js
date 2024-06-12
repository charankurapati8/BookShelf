import React from "react";
function SearchResults({ results }) {
    return (
      <div>
        {results.length > 0 ? (
          results.map((book) => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.summary}</p>
              <p>By: {book.creator}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }
  
  export default SearchResults;