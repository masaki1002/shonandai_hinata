import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Top from "./components/Top";
import Post from "./components/Post";

function App() {
  return (
      <div className="all_components">
      <Navigation />
      <Top />
      <Post />
    </div>
    
  );
}

export default App;

