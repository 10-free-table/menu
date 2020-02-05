import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Dish from '../client/src/components/Dish.jsx';

configure({adapter: new Adapter()});

describe('<Dish />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Dish />); });

  it('populates price field', () => {
    wrapper.setProps({ name: 'Blue Egg', data: {
        Ingredients: 'egg, blue dye',
        Price: 500
      } });
    expect(wrapper.find('Price')).to.have.lengthOf(1);
  });
});