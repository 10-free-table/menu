import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Price from '../client/src/components/styled/Price.jsx';

configure({adapter: new Adapter()});

describe('<Price />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Price />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('float', 'right');
  });
});