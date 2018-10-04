import React, {Component} from "react";

class DisplaySearch extends Component {

    render() {
        // on search, render new searchedItems and maps them into the list
        const listItems = this
            .props
            .searchedItems
            .map((element) => 
                element.map((element, index) => <li key={index}>{element.id}</li>)
            );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default DisplaySearch;