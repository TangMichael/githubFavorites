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

    // update array with new element object
    changeArray = (e) => {
        this.setState({
            someVar: [
                ...this.state.someVar,
                e
            ]
        })
    }

    delete = (e) => {
        // copy current array state
        var array = [...this.state.someVar];
        // take out element clicked
        array.splice(e, 1);
        // set state array to the new state
        this.setState({someVar: array})
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
                        <Favorites someVar={this.state.someVar} delete={this.delete}></Favorites>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
