import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Top from './Top';
import Post from './Post';
import Intro from './Intro';
import Approach from './Approach';
import PatientVoices from './PatientVoices';
import Members from './Members';
import Menus from './Menus';
import AccessMap from './AccessMap';
import SNS from './SNS';
import Navigation from '../components/Navigation';


const Home = () => {
  return (
    <div className="all_components">
      <Navigation />
      <Top />
      <Post />
     
    </div>
 
  )
}

export default Home