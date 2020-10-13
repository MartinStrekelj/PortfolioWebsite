import React from 'react';
import Navigation from '../sections/Navigation/Navigation';
import Landing from '../sections/Landing/Landing';
import About from '../sections/About/About';
import Portfolio from '../sections/Portfolio/Portfolio';
import Contact from '../sections/Contact/Contact';
// import MyWork from '../sections/MyWork/MyWork';

const Homepage = () => {
    return (
        <>
            <Navigation />
            <Landing />
            <About />
            {/* <MyWork /> */}
            <Portfolio />
            <Contact />
        </>
    )
}

export default Homepage;
