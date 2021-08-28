import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/HeaderPage';

test('Should render Header', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
