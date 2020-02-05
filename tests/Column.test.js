import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Column from '../client/src/components/styled/Column.jsx';

configure({adapter: new Adapter()});

describe('<Column />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Column />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
    expect(wrapper).toHaveStyleRule('vertical-align', 'top');
  });
});