import React from 'react'

import Hero from '../components/Hero'
import Contact from '../components/Contact'
import About from '../components/About'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

import '../styles/css/Main.css'

const Main = props => {
  return (
    <div className="Main">
      <Hero />
      <Contact />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default Main