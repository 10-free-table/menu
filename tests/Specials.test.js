import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Specials from '../client/src/components/Specials.jsx';

configure({adapter: new Adapter()});

describe('<Specials />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Specials />); });

  it('renders specials blurb styled component', () => {
    expect(wrapper.find('Blurb')).to.have.lengthOf(1);
  });

  it('populates specials blurb', () => {
    wrapper.setProps({ blurb: ['RIP MR. PEANUT'] });
    expect(wrapper.find('Blurb').text()).to.be.equal(' RIP MR. PEANUT ');
  });
});