import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import store from '../store';
import '../styles/App.scss'

import Hero from '../components/Hero'
import Contact from '../components/Contact'
import About from '../components/About'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Hero />
        <Contact />
        <About />
        <Resume />
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default App;
