import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import ViewFull from '../client/src/components/styled/ViewFull.jsx';

configure({adapter: new Adapter()});

describe('<ViewFull />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<ViewFull />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('background', 'white');
    expect(wrapper).toHaveStyleRule('color', 'black');
    expect(wrapper).toHaveStyleRule('position', 'relative');
    expect(wrapper).toHaveStyleRule('vertical-align', 'middle');
    expect(wrapper).toHaveStyleRule('cursor', 'pointer');
  });
});