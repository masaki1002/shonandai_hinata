import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navigation';
import Top from './Top';
import Post from './Post';
import Intro from './Intro';
import Approach from './Approach';
import PatientVoices from './PatientVoices';
import Members from './Members';
import Menus from './Menus';
import AccessMap from './AccessMap';
import SNS from './SNS';
import Navigation from './Navigation';
import MorePosts from './MorePosts';
import { ParallaxProvider } from "react-scroll-parallax";


const Home = () => {

  return (
    <div>
      <Navigation />
      <Top />
      <Post />
      <Intro />
      <Members />
      <Approach />
      <Menus />
      <PatientVoices />
      <AccessMap />
      <SNS />
    </div>
 
  )
}

export default Home