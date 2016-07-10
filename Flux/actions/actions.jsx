var AppDispatcher = require('../dispatchers/Appdispatcher.jsx');
var Constants = require('../constants/constants.jsx');

var actions = {
  addItem:function(text){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_ADD_ITEM,
            text:text
        });
  },
  editItem:function(id, index){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_EDIT_ITEM,
            id: id,
            index: index
        });
  },
  deleteItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DELETE_ITEM,
            id: id
        });
  },
  detailItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DETAIL_ITEM,
            id: id
        });
  },
  deleteCart:function(idd){
    AppDispatcher.handleAction({
            actionType: Constants.DELETECART_ITEM,
            idd:idd
        });
  },
  addToCart:function(product){
    AppDispatcher.handleAction({
      actionType: Constants.ACTION_CART_ITEM,
      product:product
    });
  }
};
module.exports = actions;
