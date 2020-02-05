import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { jest } from 'jest';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Menu from '../client/src/components/Menu.jsx';

configure({adapter: new Adapter()});

spy(Menu.prototype, 'componentDidMount');

describe('<Menu />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Menu />); });

  it('calls componentDidMount', () => {
    expect(Menu.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('includes a header titled menu', () => {
    expect(wrapper.find('h3').text()).to.be.equal(' Menu ');
  });

  it('creates subcomponents', () => {
    expect(wrapper.find('Specials')).to.have.lengthOf(1);
  });
});