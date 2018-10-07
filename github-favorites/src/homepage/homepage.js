import React, {Component} from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Favorites from '../favorites/favorites';
import "./homepage.css";

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            favorites: []
        };
    }

    // update array with new element object
    changeArray = (e) => {
        this.setState({
            favorites: [
                ...this.state.favorites,
                e
            ]
        })
    }

    delete = (index) => {
        // copy current array state
        var array = [...this.state.favorites];
        // take out element clicked
        array.splice(index, 1);
        // set state array to the new state
        this.setState({favorites: array})
    }

    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="body">
                    <div className="search">
                        <Search handler={this.changeArray} favorites={this.state.favorites}></Search>
                    </div>
                    <div className="favorites">
                        <Favorites favorites={this.state.favorites} delete={this.delete}></Favorites>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
