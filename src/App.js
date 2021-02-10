import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/about/about';
import AboutDesc from './Components/about/aboutDesc';
import ContactForm from './Components/contact/contactForm';
import Footer from './Components/footer/footer';
import HeroComponent from './Components/heroComponent/heroComponent';
import Home from './Components/home/home';
import Navbar from './Components/navbar/navbar';
import ProjectDesc from './Components/project/projectDesc';
import Project from './Components/project/projectHome';
import ScrollToTop from './Components/scrollToTop';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ContactForm />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutDesc} />
          <Route exact path='/project/:id' render={(props) => (<ProjectDesc {...props} />)} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
