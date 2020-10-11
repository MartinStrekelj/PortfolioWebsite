import React, { Component } from 'react';
import './App.css';
import Navigation from "./sections/Navigation/Navigation";
import Landing from "./sections/Landing/Landing"
import About from "./sections/About/About"
import Portfolio from './sections/Portfolio/Portfolio';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';

class App extends Component {



  render(){
    return(
      <div>
        <Navigation />
        <Landing />
        <About />
        <Portfolio />
        <Blog/>
        <Contact />
      </div>
    );
   }
}

export default App;
