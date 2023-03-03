import React, { useState } from 'react';
function ReviewForm(props) {
    const [comment, setComment] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Make a POST request to the server endpoint with the comment and book ID
      fetch('http://localhost:9292/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: comment,
          book_id: props.bookId
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
  
  export default ReviewForm;
  