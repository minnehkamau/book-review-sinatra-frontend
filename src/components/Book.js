import React from 'react';
import {  Link } from 'react-router-dom';


function Book({ book, deleteReview }) {
  
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
        <div className="card-body my-custom-font">
                <img src={book.image_url} alt={book.title} />
                  <h5 className="fw-bold">Title:{book.title}</h5>
                  <h6 className="card-text">Author:{book.author}</h6>
                  <h6 className='card-text'>Genre:{book.genre}</h6>
              <div className='d-flex flex-row'>
                
                <h6 className='card-text'>Rating:{averageRating}</h6>
              
              </div>
        </div>
        <hr />
        <div className='p-4 book-details'>
            <h5 className="fw-bold">Total reviews: {book.reviews ? book.reviews.filter(review => review.book_id === book.id).length : 0}</h5>
            {book.reviews && book.reviews.filter(review => review.book_id === book.id).map((review, index) => (
              <div className='bg-light bordered mb-2' key={index}>
              <p>{review.comment}</p>
              <p className='fw-bold'> {review.user?.username}</p>
              <div>
                <Link to={`/edit-review/${review.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                <button className='btn btn-sm btn-danger' onClick={() => deleteReview(review.id)}>Delete</button>
              </div>
              </div>
            ))}
            {/* <ReviewForm bookId={book.id} />  */}
            <Link to="/review-form" className="link-bold" >ADD REVIEW</Link>
            


        </div>

      </div>
    </>
  );
}

export default Book;
