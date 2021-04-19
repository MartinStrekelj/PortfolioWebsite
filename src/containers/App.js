import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Rework from "../components/ReworkPage/Rework";

const App = () => {
  const [legacy, setLegacy] = useState(true);

  if (legacy) {
    return <Rework CTA={setLegacy} />;
  } else {
    return (
      <>
        <Navigation />
        <Landing />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </>
    );
  }
};

export default App;
