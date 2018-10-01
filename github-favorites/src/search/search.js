import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./search.css";

var repositories = null;
class Search extends Component {

  getRepo() {
    console.log("okk");
  }

  handler = () =>{
    fetch("https://api.github.com/search/repositories?q=tetris")
    .then(res => res.json())
    .then(json => {
     // console.log(json.items.slice(0, 10));
     // this.props.myProp = json.items.slice(0,10);
     // console.log(repositories);
      // var top10 = JSON.parse(json);
      // console.log(top10.slice(0,10));
      this.props.handler(json.items[2].id)
      var e = json.items[1].id;
      this.props.handler(e);
    });

  }
  componentDidMount() {
    fetch("https://api.github.com/search/repositories?q=tetris")
      .then(res => res.json())
      .then(json => {
       // console.log(json.items.slice(0, 10));
       // this.props.myProp = json.items.slice(0,10);
       // console.log(repositories);
        // var top10 = JSON.parse(json);
        // console.log(top10.slice(0,10));
        this.props.handler(json.items[1].id)
      });
  }

  render() {
    return (
      <div className="search">
        <TextField
          id="outlined-bare"
          defaultValue="Search Field"
          margin="normal"
          variant="outlined"
        />
        <Button
          onClick={this.handler}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
export  {repositories};
