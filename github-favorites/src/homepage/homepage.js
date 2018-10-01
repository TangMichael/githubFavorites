import React, { Component } from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Favorites from '../favorites/favorites';
import "./homepage.css";

class Homepage extends Component {
  constructor(){
    super();
    this.handler = this.handler.bind(this);
    this.state = {someVar: "ok"};
  }

  handler = (e) => {
    // fetch("https://api.github.com/search/repositories?q=tetris")
    // .then(res => res.json())
    // .then(json => {
    //   console.log(json.items.slice(0, 10));
    //   // var top10 = JSON.parse(json);
    //   // console.log(top10.slice(0,10));
    //   this.setState({
    //     someVar: json.items[0].id
    //   })
    // });
          this.setState({
        someVar: e
      })
  }

  render() {
    return (
      <div className="container">
            <Header></Header>
      <div className="body">
      <div className="search">
      <Search handler = {this.handler}></Search>
      </div>
      <div className="favorites">
      <Favorites someVar={this.state.someVar}></Favorites>
      </div>
      </div>
      </div>
    );
  }
}

export default Homepage;
