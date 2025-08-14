import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Top from "./components/Top";
import Post from "./components/Post";
import Intro from "./components/Intro";
import Approach from "./components/Approach";
import PatientVoices from "./components/PatientVoices";
import Members from "./components/Members";
import Menus from "./components/Menus";
import AccessMap from "./components/AccessMap";
import SNS from "./components/SNS";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MorePosts from "./components/MorePosts";
import Home from "./components/Home";

function App() {
  return (

      <div className="all_components">

        <Router>
    
       <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/moreposts" element={ <MorePosts/> }></Route>
       </Routes>
    </Router>

    </div>
    
  );
}

export default App;

