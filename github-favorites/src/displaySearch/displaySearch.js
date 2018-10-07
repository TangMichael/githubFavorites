import React, {Component} from "react";
import "./displaySearch.css";
class DisplaySearch extends Component {

    // uses parent class function from homepage.js
    add(element) {
        this
            .props
            .add(element);
    }

    render() {
        // on search, render new searchedItems and maps them into the list
        const listItems = this
            .props
            .searchedItems
            .map((element) => element.map((element, index) => <li key={index}>
                <div className="list-container">
                    <div className="name">
                        {element.name}
                    </div>
                    <div className="language">
                        {element.language}
                    </div>
                    <div className="tag">
                        {element.tag}
                    </div>
                    <div className="button">{// checks if repo is in favorites, if not display add button
                        !this
                            .props
                            .favorites
                            .includes(element.name) && <a href="#" onClick={() => this.add(element)}>Add</a>
}
                    </div>
                </div>
            </li>));
        return (
            <div>
                <ul>
                    <div className="list-container">
                        <div className="name">
                            <b>Name</b>
                        </div>
                        <div className="language">
                            <b>Language</b>
                        </div>
                        <div className="tag">
                            <b>Latest tag</b>
                        </div>
                        <div className="button"></div>
                    </div>
                    <br></br>
                    {listItems}</ul>
            </div>
        );
    }
}

export default DisplaySearch;