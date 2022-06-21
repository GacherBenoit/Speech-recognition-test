// == Import
import './styles.css';
// Fix generator Runtime error with import 
import regeneratorRuntime from "regenerator-runtime";
import {BrowserRouter, Route, Link, Navigate, Routes} from "react-router-dom"
import SpeechRecognition, {useSpeechRecognition,} from 'react-speech-recognition';
import React, { useState } from 'react';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Contact from '../Contact/contact';
import NewBlogPost from '../NewBlogPost/NewBlogPost';





// == Composant
function App() 
{
  // == commands est un tableau d'objet contenant la liste des commandes
const commands = [
  {
    command: ["Go to *", "Open *"], // * signifie que le mot utilisé (exemple Go to Home) sera passé en paramètre de la callback (ici redirectPage)
    callback: (redirectPage) => setRedirectUrl(redirectPage),
  },
];

const {transcript} = useSpeechRecognition({commands});
const [ redirectUrl, setRedirectUrl] = useState("");

const pages = ["home", "blog", "new blog post" , "contact"];
const urls = {
  home: '/',
  blog: '/blog',
  "new blog post": "/blog/new",
  contact: "/contact",
};

if (!SpeechRecognition.browserSupportsSpeechRecognition){
  return null;
}

let redirect = "";

if (redirectUrl)
{
  if (pages.includes(redirectUrl)) {
    redirect= <Navigate to= {urls[redirectUrl]} />;
  }
    else {
      redirect = <p>Ont ne peut pas trouver la page {redirectUrl}</p>;
    }
}


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
      {redirect}
      </BrowserRouter>

      <p id="transcript"> Transcription : {transcript} </p>

      <button onClick={SpeechRecognition.startListening}>Start</button>

    </div>
  );
}

// == Export
export default App;
