import React from 'react';
import AppStore from '../../stores/AppStore.jsx';
import Additem from './Additem.jsx';
import Actions from '../../actions/actions.jsx';
import ListAdmin from './ListAdmin.jsx';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: AppStore.getAll()
        }
        this.handleEditButton = this.handleEditButton.bind(this);
        this.addItemHandle = this.addItemHandle.bind(this);
        this._onChange = this._onChange.bind(this);
        this.updateItemHandle = this.updateItemHandle.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        AppStore.addChangeListener(this._onChange)
        document.title = 'Admin'
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({listItems: AppStore.getAll()});
    }
    addItemHandle(item) {

      //Create auto id for one item.
        var x = '';
        for (var i = 0; i < 7; i++) {
            var _id = Math.floor(Math.random() * 35);
            if (_id > 9) {
                _id = String.fromCharCode(_id - 10 + 'A'.charCodeAt('0'));
            }
            x += _id;
        }
        item.id = x;
        Actions.addItem(item);
    }

    //
    handleEditButton(index) {
        this.setState({editItem: this.state.listItems[index], editItemIndex: index});
    }

    updateItemHandle(item, index) {
        Actions.editItem(item, index);

        // set textbox null after update
        this.setState({null, editItem: {}});
    }

    deleteItem(idItem) {
        Actions.deleteItem(idItem);
    }

    render() {
        return (
            <div>
                <Additem addItemHandle={this.addItemHandle} updateItemHandle={this.updateItemHandle} item={this.state.editItem} indexItem={this.state.editItemIndex}/>
                {this.state.listItems.map(function(productAdmin, i) {
                    return (<ListAdmin handleDeleteButton={this.deleteItem} handleEditButton={this.handleEditButton} key={i} dataAdmin={productAdmin} indexItem={i}/>)
                }, this)}

            </div>
        )
    }
}
export default Admin;
