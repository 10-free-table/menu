import React from 'react';
import Dish from './Dish.jsx';
import Column from './styled/Column.jsx';

var Section = (props) => {
  var { data } = props;
  data = data || {Dishes: {}};
  var elementsLeft = [];
  var elementsRight = [];

  //two columns of dishes 
  var half = Math.floor(Object.keys(data.Dishes).length / 2);

  var count = 0;

  for (var dish in data.Dishes) {
    if (count <= half) {
      elementsLeft.push(
        <div key={dish}>
          <Dish name={dish} data={data.Dishes[dish]}/>
        </div>
      );
    } else {
      elementsRight.push(
        <div key={dish}>
          <Dish name={dish} data={data.Dishes[dish]}/>
        </div>
      );
    }
    count++;
  }

  return (
    <div>
      <Column>
      {elementsLeft}
      </Column>
      <Column>
      {elementsRight}
      </Column>
    </div>
  );

}

export default Section;