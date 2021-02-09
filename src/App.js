import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/about/about';
import AboutDesc from './Components/about/aboutDesc';
import HeroComponent from './Components/heroComponent/heroComponent';
import Home from './Components/home/home';
import Navbar from './Components/navbar/navbar';
import Project from './Components/project/projectHome';
import ScrollToTop from './Components/scrollToTop';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutDesc} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
