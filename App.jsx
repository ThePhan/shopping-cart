import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div>

                        <div className="navbar-collapse collapse menuConten" id="navbar">
                            <ul className="nav navbar-nav">
                                <li className="activeA"><Link to="/"> Home </Link></li>
                                <li><Link to="/additem"> Additem </Link></li>
                                <li><Link to="/cart"> Cart </Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="login.html" className="glyphicon glyphicon-log-in">
                                        Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default App;
