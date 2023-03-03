import React, { useState } from 'react';

function Navbar({ books }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredBooks = books.filter((book) =>
      book.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
  };
  return (
    <nav className="navbar navbar-large">
      <div className="logo">
        <h1 className="logo-text">BOOK REVIEW</h1>
      </div>
      <div className="search-form">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* Add other navigation links here */}
    {/* <ul>
      {filteredBooks.map((book) => (
        <li key={book}>{book}</li>
      ))}
    </ul> */}
    </nav>
  );
}



export default Navbar;
