import React, {Component} from 'react';
import "./favorites.css";

class Favorites extends Component {

    render() {
        return (
            <div className="favorites">
                {this.props.someVar}
            </div>
        );
    }
}

export default Favorites;
