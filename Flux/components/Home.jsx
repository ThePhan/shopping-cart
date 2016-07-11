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
            listItems: AppStore.getAll(),
            listCart: AppStore.getListCart()
        }
        this.handleEditButton = this.handleEditButton.bind(this);
        this.addItemHandle = this.addItemHandle.bind(this);
        this._onChange = this._onChange.bind(this);
        this.updateItemHandle = this.updateItemHandle.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.deleteCart = this.deleteCart.bind(this);
    }
    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({listItems: AppStore.getAll(), listCart:AppStore.getListCart()});
    }
    addItemHandle(item) {
      var idItem = new Date().getTime();
        var x = '';
        for (var i = 0; i < 7; i++) {
            var _id = Math.floor(Math.random() * 35);
            if (_id > 9) {
                _id = String.fromCharCode(_id - 10 + 'A'.charCodeAt('0'));
            }
            x += _id;
        }
        item.id = '#' + x;
        Actions.addItem(item);
    }
    handleEditButton(index) {
        this.setState({editItem: this.state.listItems[index], editItemIndex: index});
    }

    updateItemHandle(item, index) {
      Actions.editItem(item, index);

        this.setState({null, editItem:{} });
    }

    handleBuy(indexItem){
      var product = this.state.listItems[indexItem];
      Actions.addToCart(product);
    }

    deleteItem(idItem){
      Actions.deleteItem(idItem);
    }

    // deleteCart(idItem){
    //   Actions.deleteCart(idItem);
    // }
    render() {
        return (
            <div>
                <Additem addItemHandle={this.addItemHandle} updateItemHandle={this.updateItemHandle} item={this.state.editItem} indexItem={this.state.editItemIndex}/>
                {this.state.listItems.map(function(product, i) {
                    return (<ListItem itemsList={this.state.listItems} handleDeleteButton={this.deleteItem} handleEditButton={this.handleEditButton} handleBuyButton={this.handleBuy} key={i} data={product} indexItem={i}/>)
                }, this)}

            </div>
        )
    }
}
export default Home;
