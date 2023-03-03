import React from 'react';
import ReviewForm from './ReviewForm';

function Book({ book }) {
  //const reviews = book.reviews ? book.reviews.filter((review) => review.book_id === bookId) : [];

  // Calculate average rating
  const totalRating = book.reviews ? book.reviews.filter(review => review.book_id === book.id)
    .reduce((total, review) => total + review.rating, 0) : 0;
  const averageRating = book.reviews && book.reviews.filter(review => review.book_id === book.id).length > 0
    ? totalRating / book.reviews.filter(review => review.book_id === book.id).length
    : 0;
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
        <img src={book.image_url} alt={book.title} />
          <h5 className="fw-bold">Title:{book.title}</h5>
          <h6 className="card-text">Author:{book.author}</h6>
          <h6 className='card-text'>Genre:{book.genre}</h6>
          <div className='d-flex flex-row'>
            {/* {book.user && <p>By {book.user.username}</p>} */}
            <h6 className='card-text'>Rating:{averageRating}</h6>
          
          </div>
        </div>
        <hr />
        <div className='p-4'>
        <h5 className="fw-bold">Total reviews: {book.reviews ? book.reviews.filter(review => review.book_id === book.id).length : 0}</h5>
          {book.reviews && book.reviews.filter(review => review.book_id === book.id).map((review, index) => (
            <p className='bg-light bordered mb-2' key={index}>
              {review.comment}
              
            </p>
          ))}
           <ReviewForm bookId={book.id} /> 


        </div>

      </div>
    </>
  );
}

export default Book;
