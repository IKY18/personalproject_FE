import React from "react";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PageHome() {
  return (
    <body class="bg-light" id="top">
      <Navigation />
      <div class="page-content">
        <div class="container">
          <div class="resume-container">
            <Hero />
            <About />
            <Skills />
          </div>
          <Interest />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
    </body>
  );
}
