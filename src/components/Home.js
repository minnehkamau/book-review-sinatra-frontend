import React, { useEffect, useState } from 'react'
import Book from './Book'

function Home() {
  const [books, setBooks] = useState([])
  // const [loading, setLoading] = useState(true)

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
  useEffect(() => {
    books.forEach((book) => {
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
    })
  }, [books])
  
 return(
    <div>


    <div className="container">
        <h1 className='py-3 '>BOOKS {books && books.length}</h1>
        <div className="row ">
            <div className="col-sm-8">
            {
                    books && books.map((book)=>(
                         <Book book={book} key={book.id} />
                    ))
                  }

            </div>

      
        </div>
    </div>


</div>
 )

}
export default Home