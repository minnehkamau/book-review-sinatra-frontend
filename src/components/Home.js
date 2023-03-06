import React, { useEffect, useState } from 'react'
import Book from './Book'

function Home({reviews, setReviews}) {
  const [books, setBooks] = useState([]);
  
  // const [loading, setLoading] = useState(true)
//fetching all books
  useEffect(() => {
    try {
      fetch("http://localhost:9292/books", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setBooks(response);
        });
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }, [])

  //fetching reviews per each book
  useEffect(() => {
    books.forEach((book) => {
      // Check if the book already has reviews
      if (!book.reviews) {
        fetch(`http://localhost:9292/reviews?book_id=${book.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            book.reviews = response;
            setBooks([...books]);
          });
      }
    });
  }, [books]);

  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`http://localhost:9292/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 204) {
        setReviews(reviews.filter((review) => review.id !== reviewId));
        window.location.reload();
      } else {
        const data = await response.json();
        console.log(data.error); // handle error
      }
    } catch (error) {
      console.log(error); // handle error
    }
  };
  
  
 return(
  <div className="container">
    {books.map((book) => (
    <Book
    key={book.id}
    book={book}
    reviews={reviews}
    setReviews={setReviews}
    deleteReview={deleteReview}
  />
    ))}
  </div>
 )

}
export default Home;