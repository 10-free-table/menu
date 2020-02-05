import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Categories from '../client/src/components/Categories.jsx';

configure({adapter: new Adapter()});

describe('<Categories />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Categories />); });

  it('renders category buttons', () => {
    wrapper.setProps({ categories: ['breakfast', 'lunch', 'dinner'] });
    expect(wrapper.find('Button')).to.have.lengthOf(3);
  });
});