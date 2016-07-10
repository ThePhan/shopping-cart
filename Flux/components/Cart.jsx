import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handlebtCartDelete = this.handlebtCartDelete.bind(this);
    }

    // getChildContext(){
    //   return{
    //     product: this.props.dataCart
    //   }
    // }
    //
    handlebtCartDelete() {
        this.props.handlebtCartDelete(this.props.dataCart.id);
    }

    render() {
        return (
            <div>
                {this.props.dataCart.id}
                {this.props.dataCart.nameProduct}
                {this.props.dataCart.price}
                <br/> {this.props.dataCart.numberPr}
                <Link to="details">View details</Link>
                <br/>
                <button type="button" onClick={this.handlebtCartDelete}>
                    Delete
                </button>
            </div>
        );
    }
}
// Cart.contextTypes={
//   product: this.props.dataCart
// };
export default Cart;
