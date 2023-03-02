import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Navbar;
