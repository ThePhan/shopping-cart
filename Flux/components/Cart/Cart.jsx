import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';
import Details from './Details.jsx';
import AppStore from '../../stores/AppStore.jsx';
import Actions from '../../actions/actions.jsx';
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
    deleteCartss(idItem){
      Actions.deleteCart(idItem);
    }

    render() {
        var src = "http://www.psdgraphics.com/file/cart-icon.jpg";
        var numberProduct = 0;
        for (var i = 0; i < this.state.listCart.length; i++) {
            numberProduct += this.state.listCart[i].numberPr;
        }
        return (

            <div className="container">
            <p className="titleCart"> Cart book </p>
                <div className="cartNull">
                    {numberProduct > 0
                        ? ""
                        : <span><img src={src} width="200" height="230" alt="No image" /> Your cart null </span>}
                </div>

                {this.state.listCart.map(function(productCart, i) {
                    return (<ListCart key={i} dataCart={productCart} deleteCartss={this.deleteCartss.bind(this)} indexItem={i}/>)
                }, this)}
            </div>
        )

    }
};
export default Cart;
