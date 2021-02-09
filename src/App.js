import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import About from './Components/about/about';
import HeroComponent from './Components/heroComponent/heroComponent';
import Navbar from './Components/navbar/navbar';
import Project from './Components/project/projectHome';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <HeroComponent />
        {/* <About /> */}
        <Project />
      </BrowserRouter>
    </div>
  );
}

export default App;
