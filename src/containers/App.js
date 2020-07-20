import React, { Component } from 'react';
import './App.css';
// import Test from "../components/Test";
import Navigation from "../components/Navigation/Navigation";
import Landing from "../components/Landing/Landing"
import About from "../components/About/About"
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

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
