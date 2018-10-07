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
                        {this
                            .props
                            .favorites
                            .map((item, index) => <li key={index}>
                                <div className="list-container">
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="language">
                                        {item.language}
                                    </div>
                                    <div className="tag">
                                        {item.tag}
                                    </div>
                                    <div className="button">
                                        <a href="#" onClick={() => this.delete(index)}>Remove</a>
                                    </div>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Favorites;
