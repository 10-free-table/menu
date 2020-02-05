import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Button from '../client/src/components/styled/Button.jsx';

configure({adapter: new Adapter()});

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Button />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('background', 'transparent');
    expect(wrapper).toHaveStyleRule('color', 'black');
    expect(wrapper).toHaveStyleRule('cursor', 'pointer');
  });
});