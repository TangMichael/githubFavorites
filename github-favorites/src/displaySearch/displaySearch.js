import React, {Component} from "react";

class DisplaySearch extends Component {

    // uses parent class function from homepage.js
    add(element){
        this.props.add(element);
    }

    render() {
        // on search, render new searchedItems and maps them into the list
        const listItems = this
            .props
            .searchedItems
            .map((element) => element.map((element, index) => <li key={index}>{element.name} {element.language}
                 <button
                    onClick={() => this.add(element)}>add</button>
            </li>));
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default DisplaySearch;