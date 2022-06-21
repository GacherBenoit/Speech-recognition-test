// == Import
import './styles.css';
// Fix generator Runtime error with import 
import regeneratorRuntime from "regenerator-runtime";
import {BrowserRouter, Route, Link, Redirect, Routes} from "react-router-dom"
import SpeechRecognition from 'react-speech-recognition';
import React, { useState } from 'react';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Contact from '../Contact/contact';
import NewBlogPost from '../NewBlogPost/NewBlogPost';





// == Composant
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/blog/new">Blog</Link>
        <Link to="/newBlogPost">Add Blog Post</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/blog/new" exact element={<Blog/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="//newBlogPost" exact element={<NewBlogPost/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;
