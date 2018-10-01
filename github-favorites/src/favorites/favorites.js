import React, { Component } from 'react';
import "./favorites.css";
import { repositories } from '../search/search';
class Favorites extends Component {
subComponent(){
  console.log(repositories);
}

  render() {
    return (
      <div className="favorites">
      </div>
    );
  }
}

export default Favorites;
