var AppDispatcher = require('../dispatchers/Appdispatcher.jsx');
var Constants = require('../constants/constants.jsx');

var actions = {
  addItem:function(text){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_ADD_ITEM,
            text:text
        });
  },
  editItem:function(id, update){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_EDIT_ITEM,
            id: id,
            update: update
        });
  },
  deleteItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DELETE_ITEM,
            id: id
        });
  },
  // listItem:function(){
  //   AppDispatcher.dispatch({
  //           actionType: Constants.ACTION_LIST_ITEM
  //       });
  // },
  detailItem:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DETAIL_ITEM,
            id: id
        });
  },
  deleteCart:function(id){
    AppDispatcher.handleAction({
            actionType: Constants.ACTION_DELETECART_ITEM,
            id:id
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
