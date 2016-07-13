import React from 'react';
import AppStore from '../stores/AppStore.jsx';
import Actions from '../actions/actions.jsx';
import ListItem from './ListItem.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: AppStore.getAll()
        }
        this._onChange = this._onChange.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    // was call after finish render
    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    //was call after data in stores was change, and setState....
    _onChange() {
        this.setState({listItems: AppStore.getAll()});
    }


// Use indexItem to get all product: id, price, describe....
    handleBuy(indexItem){
      var product = this.state.listItems[indexItem];
      Actions.addToCart(product);
    }

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
