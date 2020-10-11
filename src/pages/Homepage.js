import React from 'react';
import Navigation from '../sections/Navigation/Navigation';
import Landing from '../sections/Landing/Landing';
import About from '../sections/About/About';
import Portfolio from '../sections/Portfolio/Portfolio';
import Contact from '../sections/Contact/Contact';

const Homepage = () => {
    return (
        <>
            <Navigation />
            <Landing />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Homepage;
