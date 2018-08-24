import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './store';

import Main from './pages/Main';
import registerServiceWorker from './registerServiceWorker';

import './styles/css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
