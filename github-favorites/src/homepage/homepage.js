import React, { Component } from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Favorites from '../favorites/favorites';
import "./homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="container">
            <Header></Header>
      <div className="body">
      <div className="search">
      <Search></Search>
      </div>
      <div className="favorites">
      <Favorites></Favorites>
      </div>
      </div>
      </div>
    );
  }
}

export default Homepage;
