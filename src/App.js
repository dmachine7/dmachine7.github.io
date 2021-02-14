import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutDesc from './Components/about/aboutDesc';
import ContactForm from './Components/contact/contactForm';
import Home from './Components/home/home';
import Navbar from './Components/navbar/navbar';
import ProjectDesc from './Components/project/projectDesc';
import ProjectList from './Components/project/projectList';
import ScrollToTop from './Components/scrollToTop';

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'
  });
  
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ContactForm />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutDesc} />
          <Route exact path='/projects' component={ProjectList} />
          <Route exact path='/projects/:id' render={(props) => (<ProjectDesc {...props} />)} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
