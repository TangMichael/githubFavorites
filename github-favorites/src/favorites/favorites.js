import React, {Component} from 'react';
import "./favorites.css";

class Favorites extends Component {

    // uses parent class function from homepage.js
    delete(element) {
        this
            .props
            .delete(element);
    }

    render() {
        return (
            <div className="favorites">
                <div>
                    <ul>
                        {this
                            .props
                            .someVar
                            .map((item, index) => <li key={index}>{item.name} {item.language}
                                <button onClick={() => this.delete(index)}>delete</button>
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Favorites;
