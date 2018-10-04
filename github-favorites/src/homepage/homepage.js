import React, {Component} from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Favorites from '../favorites/favorites';
import "./homepage.css";

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            someVar: []
        };
    }

    changeArray = (e) => {
      console.log(e);
        this.setState({
            someVar: [
                ...this.state.someVar,
                e.id
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="body">
                    <div className="search">
                        <Search handler={this.changeArray}></Search>
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
