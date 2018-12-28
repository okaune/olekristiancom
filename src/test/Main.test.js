import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Main from '../pages/Main';

configure({adapter: new Adapter()});
it('renders without crashing', () => {
  shallow(<Main />);
});
