import React from 'react';
import Section from './Section.jsx';
import Gradient from './styled/Gradient.jsx';
import ViewFull from './styled/ViewFull.jsx';
import Collapse from './styled/Collapse.jsx';

var Page = (props) => {
  var { data, expand, clickHandler } = props;
  data = data || {};
  var elements = [];

  var full = false;

  for (var section in data) {
    if (!full || expand) {
      elements.push(
        <div key={section}>
          <hr />
          <h4>{section}</h4>
          <Section data={data[section]}/>
        </div>
      );
      full = true;
    }
  }

  return (
    <div>
      {elements}
      { expand ?
        <Collapse onClick={() => clickHandler()}> Collapse </Collapse> : 
        <div>
          <Gradient/>
          <ViewFull onClick={() => clickHandler()}> View full menu </ViewFull>
        </div>
      }
    </div>
  );
};

export default Page;