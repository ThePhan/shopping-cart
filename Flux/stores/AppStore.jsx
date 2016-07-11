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
        "id": "#15RPJO34",
        "nameProduct": "Thanh cong khong voi vang",
        "price": "2000",
        "describe": "Hay lam nhung dieu minh khong thich neu...",
        "photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5R71EQl5fxhMzgc1SieZmDQDbxU52fbqdd4FFcdUT1NgG9FpF"
    }, {
        "id": "#15RPJO30",
        "nameProduct": "Dung bao gio di an mot minh",
        "price": "1000",
        "describe": "Co bao gio ban chon di..",
        "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6o8JWl_IAcKxu1-h29K1D99sqQqqMNPRbJo_iqTPXofdGZ1_0"
    }
];

var addItem = function(text) {

    listProducts.push(text);
};
var editItem = function(id, index) {
  var items = this.state.listProducts;
   items[index] = item;
   listProducts = items;
};
var delItem = function(id) {
    // listProducts.splice(index, 1);
    listProducts = listProducts.filter(function(ls) {
        return ls.id !== id;
    })
};

var delCart = function(idw) {
    var productTemp = JSON.parse(JSON.stringify(listCart));

    productTemp = productTemp.filter(function(lss) {
        return lss.id !== idw;
        // listCart.splice(idw, 1);
    });
    listCart = productTemp;
};
var addToCart = function(product) {
    product.numberPr = 1;
    var isNew = true;
    if (listCart.length > 0) {
        for (var i = 0; i < listCart.length; i++) {
            if (product.id == listCart[i].id) {
                var productTemp = JSON.parse(JSON.stringify(listCart[i]));
                productTemp.numberPr += 1;
                listCart[i] = productTemp;
                // console.log(listCart[i]);
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
            delItem(action.id);
            ShopStore.emit(CHANGE_EVENT);
            break;
        case appConstants.DELETECART_ITEM:
            delCart(action.idd);
            ShopStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ACTION_EDIT_ITEM:
            delCart(action.id, action.index);
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
