import React from 'react';
import AppStore from '../stores/AppStore.jsx';
import Additem from './Additem.jsx';
import Actions from '../actions/actions.jsx';
import ListItem from './ListItem.jsx';
import Cart from './Cart.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: AppStore.getAll()
        }
        this._onChange = this._onChange.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        // this.deleteCart = this.deleteCart.bind(this);
    }
    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({listItems: AppStore.getAll()});
    }

    handleBuy(indexItem){
      var product = this.state.listItems[indexItem];
      Actions.addToCart(product);
    }

    // deleteCart(idItem){
    //   Actions.deleteCart(idItem);
    // }
    render() {
        return (
            <div>
            <p className= "manageStore"> LIST BOOK </p>

                {this.state.listItems.map(function(product, i) {
                    return (<ListItem itemsList={this.state.listItems} handleBuyButton={this.handleBuy} key={i} data={product} indexItem={i}/>)
                }, this)}

            </div>
        )
    }
}
export default Home;
