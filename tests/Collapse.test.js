import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Collapse from '../client/src/components/styled/Collapse.jsx';

configure({adapter: new Adapter()});

describe('<Collapse />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Collapse />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('background', 'white');
    expect(wrapper).toHaveStyleRule('color', 'black');
    expect(wrapper).toHaveStyleRule('position', 'fixed');
    expect(wrapper).toHaveStyleRule('vertical-align', 'middle');
    expect(wrapper).toHaveStyleRule('cursor', 'pointer');
  });
});