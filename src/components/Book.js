import React from 'react';

function Book({ book }) {
  //const reviews = book.reviews ? book.reviews.filter((review) => review.book_id === bookId) : [];
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
        <img src={book.image_url} alt={book.title} />
          <h5 className="fw-bold">{book.title}</h5>
          <p className="card-text">{book.author}</p>
          <div className='d-flex flex-row'>
            {book.user && <p>By {book.user.username}</p>}
          {/* <p className='px-3'>{book.created_at}</p> */}
          
          </div>
        </div>
        <hr />
        <div className='p-4'>
        <h6>Total reviews: {book.reviews ? book.reviews.filter(review => review.book_id === book.id).length : 0}</h6>
          {book.reviews && book.reviews.filter(review => review.book_id === book.id).map((review, index) => (
            <p className='bg-light bordered mb-2' key={index}>
              {review.comment}
            </p>
          ))}
        </div>

      </div>
    </>
  );
}

export default Book;
