import React from 'react';
import 'styled-components-test-utils/lib/chai';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Blurb from '../client/src/components/styled/Blurb.jsx';

configure({adapter: new Adapter()});

describe('<Blurb />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Blurb />); });

  it('should render buttons with full style', () => {
    expect(wrapper).toHaveStyleRule('width', '580px');
  });
});