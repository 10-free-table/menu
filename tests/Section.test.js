import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Section from '../client/src/components/Section.jsx';

configure({adapter: new Adapter()});

describe('<Section />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Section />); });

  it('renders dishes', () => {
    wrapper.setProps({ data: {ID: 1,
      Dishes: {
        'Blue Egg': {
          Ingredients: 'egg, blue dye',
          Price: 500
        },
        'Green Egg': {
          Ingredients: 'egg, green dye',
          Price: 400
        }
      } 
    }});
    expect(wrapper.find('Dish')).to.have.lengthOf(2);
  });
});