import React, {Component} from 'react';
import { Provider } from '../store/context';
import { BrowserRouter as Router} from 'react-router-dom';

import cvReducer from '../store/cv';

import '../styles/App.scss'

import Hero from '../components/Hero'
import Contact from '../components/Contact'
import About from '../components/About'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'education',
      cv: cvReducer
    }
  }

  render() {
    return (
      <Provider value={this.state}>
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
  }
}
  

export default App;
