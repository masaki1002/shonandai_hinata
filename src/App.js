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

function App() {
  return (
      <div className="all_components">
      <Navigation />
      <Top />
      <Post />
      <Intro />
      <Approach />
      <PatientVoices />
      <Members />
      <Menus />
      <AccessMap />
      <SNS /> 
    </div>
    
  );
}

export default App;

