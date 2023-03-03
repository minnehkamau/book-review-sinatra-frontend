import React, { useState } from 'react';

function ReviewForm(props) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0); // default rating is 0
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = Math.floor(Math.random() * 100); 
    fetch('http://localhost:9292/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment,
        rating: rating,
        book_id: props.bookId,
        user_id: user_id
      })
    })
      .then(response => {
        if (response.ok) {
          // Reload the page to show the new review
          window.location.reload();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => console.error(error));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea className="form-control" id="comment" rows="3" value={comment} onChange={event => setComment(event.target.value)}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <select className="form-control" id="rating" value={rating} onChange={event => setRating(parseInt(event.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ReviewForm;
