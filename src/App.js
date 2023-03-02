import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<Home/>} />
       <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

