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
        "nameProduct": "Successful Career Change In A Week",
        "price": "10",
        "describe": "Sunday: Use research to test the strength of your ideas and identify your transferable skills, Monday: Understand the financial implications of changing your job and find ways to supplement your income Tuesday: Overcome lack of skills and experience by gaining new qualifications and considering work experience Wednesday: Assess the opportunities available within your company and convince your employers of your aspirations Thursday: Create an effective CV for the outside job market and learn how to get noticed without experience Friday: Explore your options when career change is forced on you and use the temporary job market as your 'Trojan horse' Saturday: Reduce your hours and responsibilities in your current job or find a career which is less demanding ...",
        "photo": "img/366.u2654.d20160709.t153305.jpg"
    }, {
        "id": "#15RPJO30",
        "nameProduct": "Nikkei Asian Review: Bye Bye Britain?",
        "price": "15",
        "describe": "The only Asia-focused English-language publication that brings you insights about business, finance, economic and political news, comments and analysis for Asia. Nikkei Asian Review is a weekly English language news-magazine owned by Nikkei, one of Japan's leading media groups...",
        "photo": "img/20160630-bye-bye-britain_magazine_container_main_image.u335.d20160701.t155837.jpg"
    }, {
        "id": "#15R47O30",
        "nameProduct": "The Economist: Anarchy In The UK",
        "price": "12",
        "describe": "The only Asia-focused English-language publication that brings you insights about business, finance, economic and political news, comments and analysis for Asia. Nikkei Asian Review is a weekly English language news-magazine owned by Nikkei, one of Japan's leading media groups...",
        "photo": "img/20160702_cuk400.u335.d20160701.t154917.jpg"
    }, {
        "id": "#15QDJO30",
        "nameProduct": "The Profession Of Violence: The Rise and Fall Of The Kray Twins",
        "price": "32",
        "describe": "The Profession Of Violence: The Rise and Fall Of The Kray Twins The classic, bestselling account of the infamous Kray twins, now a major film, starring Tom Hardy. Reggie and Ronnie Kray ruled London’s gangland during the 60s with a ruthlessness and viciousness that shocks even now. Building an empire of organised crime that has never been matched, the brothers swindled, extorted and terrorised – while enjoying a glittering celebrity status at the heart of the swinging 60s scene, until their downfall and imprisonment for life.....",
        "photo": "img/326.u2654.d20160709.t135630.jpg"
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
