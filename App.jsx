import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import AppStore from './Flux/stores/AppStore.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          listCart: AppStore.getListCart()
      }
      this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
      AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
      AppStore.removeChangeListener(this._onChange);
  }
  _onChange() {
      this.setState({listCart: AppStore.getListCart()});
  }
    render() {
      var numberProduct = 0;
      for (var i = 0; i < this.state.listCart.length; i++) {
          numberProduct += this.state.listCart[i].numberPr;
      }
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="navbar-collapse collapse menuConten" id="navbar">
                            <ul className="nav navbar-nav">
                                <li className="activeA"><Link to="/"> Home </Link></li>
                                <li><Link to="/additem"> Additem </Link></li>
                                <li><Link to="/cart"> Cart <img src="img/cartIcon.png" width="20px" height="20px" /><sup><span className="menuCart">{numberProduct}</span></sup></Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="login.html" className="glyphicon glyphicon-log-in">
                                        Login</a>
                                </li>
                            </ul>
                        </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default App;
