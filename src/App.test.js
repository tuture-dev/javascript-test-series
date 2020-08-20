import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('app component', () => {
  it('contains a header with the "Hello world!"', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<h1>Hello world!</h1>)).toEqual(true);
  });
});
