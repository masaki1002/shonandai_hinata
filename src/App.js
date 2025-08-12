import React from "react"

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MorePosts from "./components/MorePosts";

function App() {
  return (
       <Router>
       <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/#" element={ <Home /> }></Route>
        <Route path="/moreposts" element={ <MorePosts/> }></Route>
       </Routes>
    </Router>
    
  );
}

export default App;

