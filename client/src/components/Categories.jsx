import React from 'react';
import Button from './styled/Button.jsx'

var Categories = (props) => {
  var elements = [];

  var { categories, clickHandler, current } = props;
  categories = categories || [];
  
  for (var i=0; i < categories.length; i++) {
    //using var here actually causes a bug
    let cat = categories[i];
    elements.push(
      <Button
          key={i} 
          onClick={() => clickHandler(cat)} 
          id={cat}
          thickness={cat === current ? '2px' : null}
          inputColor={cat === current ? '#da3744' : null}
      >
        {cat}
      </Button>
    );
  }

  return (
    <div className="categories">
      {elements}
    </div>
  );
}

export default Categories;
