import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Categories from './Categories.jsx';
import Page from './Page.jsx';
import Specials from './Specials.jsx';
import data from './sample_data.js';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      expand: false,
      currentPage: Object.keys(data.Categories)[0]
    };
  }

  componentDidMount() {
    var urlsplit = window.location.href.split('/');
    var pagenum = urlsplit[urlsplit.length - 1];
    if (pagenum === '') pagenum = urlsplit[urlsplit.length - 2];

    $.get( "http://localhost:3002/api/menu/" + pagenum, function( dat ) {
      this.setState({
        data: dat,
        currentPage: Object.keys(dat.Categories)[0]
      });
    }.bind(this));
  }

  changeCategory(str) {
    this.setState({
      currentPage: str
    });
  }

  //TODO: refactor to single event handler
  viewFullMenu() {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    var categories = [];

    for (var cat in this.state.data.Categories) {
      categories.push(cat);
    }

    return (
      <div>
        

        <div className="selections">
          <h3> Menu </h3>
          <hr />
          <Categories
              categories={categories}
              clickHandler={this.changeCategory.bind(this)}
              current={this.state.currentPage}
          />

          <Page 
              data={this.state.data.Categories[this.state.currentPage]}
              expand={this.state.expand}
              clickHandler={this.viewFullMenu.bind(this)}
          />
          <hr />
        </div>

        <br /> <br /> <br />

        <div className="specials">
          <Specials blurb={this.state.data.Specials.Blurb}/>
        </div>
      </div>
    );
  }
}

export default Menu;