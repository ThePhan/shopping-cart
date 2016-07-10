// AppStore.js
import AppDispatcher from '../dispatchers/Appdispatcher.jsx';
import appConstants from '../constants/constants.jsx';
import objectAssign from 'object-assign';
import {EventEmitter} from 'events';

// Initial data
var CHANGE_EVENT = 'change';

var listCart = [];
var listProducts = [
    {
        "id": "1",
        "nameProduct": "Vai",
        "price": "2000",
        "describe": "ssssssssssssssssssss",
        "photo": "http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg"
    }, {
        "id": "2",
        "nameProduct": "Haha",
        "price": "1000",
        "describe": "eeeeeeeee",
        "photo": "http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg"
    }
];

var addItem = function(text) {

    listProducts.push(text);
};
var editItem = function() {};
var delItem = function() {};
var delCart = function() {};
var addToCart = function(product) {
    product.numberPr = 1;
    var isNew = true;
    if (listCart.length > 0) {
        for (var i = 0; i < listCart.length; i++) {
            if (product.id == listCart[i].id) {
                var productTemp = JSON.parse(JSON.stringify(listCart[i]));
                productTemp.numberPr += 1;
                listCart[i] = productTemp;
                console.log(listCart[i]);
                isNew = false;
                break;
            }
        }
        if (isNew) {
            listCart.push(product);
        }
    } else {
        listCart.push(product);
    }
};
var ShopStore = objectAssign({}, EventEmitter.prototype, {

    getAll() {
        return listProducts;
    },
    getListCart() {
        return listCart;
    },
    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;
    switch (action.actionType) {
        case appConstants.ACTION_ADD_ITEM:
            if (text != '') {
                addItem(action.text);
                ShopStore.emit(CHANGE_EVENT);
            }
            break;
        case appConstants.ACTION_DELETE_ITEM:
            deleteItem(action.id);
            ShopStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ACTION_CART_ITEM:
            addToCart(action.product);
            ShopStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});
module.exports = ShopStore;
