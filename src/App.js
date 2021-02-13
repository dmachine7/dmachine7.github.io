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
          <Route exact path='/projects' component={ProjectList} />
          <Route exact path='/projects/:id' render={(props) => (<ProjectDesc {...props} />)} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
