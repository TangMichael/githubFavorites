import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./search.css";
import DisplaySearch from "../displaySearch/displaySearch";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchedItems: []
        }
    }

    search = () => {
        fetch("https://api.github.com/search/repositories?q=tetris")
            .then(res => res.json())
            .then(json => {
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
            <div className="search">
                <TextField
                    id="outlined-bare"
                    defaultValue="Search Field"
                    margin="normal"
                    variant="outlined"/>
                <Button onClick={this.search} variant="contained" color="primary">
                    Search
                </Button>
                <DisplaySearch
                    searchedItems={this.state.searchedItems}
                    add={this.props.handler}></DisplaySearch>
            </div>
        );
    }
}

export default Search;
