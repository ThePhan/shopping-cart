import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';
import Details from './Details.jsx';
import AppStore from '../stores/AppStore.jsx';
import Actions from '../actions/actions.jsx';
import ListCart from './ListCart.jsx';

class Cart extends React.Component {
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
        return (
            <div>
            {this.state.listCart.map(function(productCart, i) {
                return (<ListCart key={i} dataCart={productCart} indexItem={i}/>)
            }, this)}
            </div>
        )

    }
};
export default Cart;
