import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Gradient from '../client/src/components/styled/Gradient.jsx';

configure({adapter: new Adapter()});

describe('<Gradient />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Gradient />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('position', 'relative');
  });
});