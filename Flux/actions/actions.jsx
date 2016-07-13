var AppDispatcher = require('../dispatchers/Appdispatcher.jsx');
var Constants = require('../constants/constants.jsx');

var actions = {
  /*
     Add item into listproduct:
     - id, nameProduct, price, description
  */
  addItem(text){// syntax es6
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_ADD_ITEM,
            text:text
        });
  },
  /*
    edit one product: use idProduct and index of product in listproduct.
  */
  editItem:function(id, index){//seyntax es5
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_EDIT_ITEM,
            id: id,
            index: index
        });
  },
  /*
    Delete product use id of this product.
  */
  deleteItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DELETE_ITEM,
            id: id
        });
  },
  /*
    View detail of one item use id of this item
    id: was get from param URL.
  */
  detailItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DETAIL_ITEM,
            id: id
        });
  },
  /*
    Delete one item in cart use id....
  */
  deleteCart:function(idd){
    AppDispatcher.handleAction({
            actionType: Constants.DELETECART_ITEM,
            idd:idd
        });
  },
  /*
  Add one product into Cart: id, nameProduct, price, number, describe.
  */
  addToCart:function(product){
    AppDispatcher.handleAction({
      actionType: Constants.ACTION_CART_ITEM,
      product:product
    });
  }
};
module.exports = actions;
