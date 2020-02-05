import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import Page from '../client/src/components/Page.jsx';

configure({adapter: new Adapter()});

describe('<Page />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Page />); });

  it('renders category buttons', () => {
    wrapper.setProps({ data: { Eggs: {
        ID: 1,
        Dishes: {
          'Blue Egg': {
            Ingredients: 'egg, blue dye',
            Price: 500
          },
          'Green Egg': {
            Ingredients: 'egg, green dye',
            Price: 400
          }
        }}}
      });
    expect(wrapper.find('Section')).to.have.lengthOf(1);
  });
});