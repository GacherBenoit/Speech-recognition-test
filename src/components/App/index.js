// == Import
import './styles.css';
import regeneratorRuntime from "regenerator-runtime";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom"
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
      </div>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;
