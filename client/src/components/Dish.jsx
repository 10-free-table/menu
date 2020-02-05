import React from 'react';
import Price from './styled/Price.jsx';

var Dish = (props) => {
  var { name, data } = props;
  data = data || {Price: 0, Ingredients: ""};

  return (
    <div>
      <span>
        <b> 
          {name} 
          <Price> {'$' + (data.Price * .01).toFixed(2)} </Price>
        </b>
      </span>
      <br /> <br />
      {data.Ingredients} 
      <br /><br />
    </div>
  );
}

export default Dish;