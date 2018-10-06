import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./search.css";
import DisplaySearch from "../displaySearch/displaySearch";

class Search extends Component {
    searchValue = React.createRef();
    constructor() {
        super();
        this.state = {
            searchedItems: []
        }
    }

    search = () => {
        // var url = "https://api.github.com/search/repositories?q=" +
        // this.searchValue.value;
        fetch("https://api.github.com/search/repositories?q=" + this.searchValue.value)
            .then(res => res.json())
            .then(json => {
                // trying to input tag value to a new object
                // put that new object into state
                // maybe better to construct the object here instead of sending every parameters
                // just need name, language, latest tag
                json
                    .items
                    .slice(0, 10)
                    .map(item => fetch(item.url + "/releases/latest")
                    .then(res => res.json())
                    .then(json => {item.tag = json.name;
                    console.log(item);
                    }));
                // on search, reset state array to empty
                this.setState({searchedItems: []});
                // fill empty array state with searched value
                this.setState({
                    searchedItems: [
                        ...this.state.searchedItems,
                        json
                            .items
                            .slice(0, 10)
                    ]
                });
            });
    }

    render() {
        return (
            <div className="searchContainer">
                <div className="searchFieldButton">
                    <TextField
                        id="outlined-bare"
                        placeholder="Search Field"
                        inputRef={(input) => this.searchValue = input}
                        margin="normal"
                        variant="outlined"/>
                    <div>
                        <Button onClick={this.search} variant="contained" color="primary">
                            Search
                        </Button>
                    </div>
                </div>
                <div>
                    <DisplaySearch
                        searchedItems={this.state.searchedItems}
                        add={this.props.handler}></DisplaySearch>
                </div>
            </div>
        );
    }
}

export default Search;
