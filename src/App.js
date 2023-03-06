import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Login from "./components/Login";
import ReviewForm from "./components/ReviewForm";

function App() {
  
  const [reviews, setReviews] = useState([]);

 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/about" element={<Home  reviews={reviews} setReviews={setReviews}/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/books/:bookId/reviews/new" element={<ReviewForm setReviews={setReviews} />} />
       <Route path="/review-form" element={<ReviewForm />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

