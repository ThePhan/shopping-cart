import React from 'react';
import {Link} from 'react-router';

class ListCart extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCartss = this.deleteCartss.bind(this);
    }
    deleteCartss() {
        this.props.deleteCartss(this.props.dataCart.id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 listCart">
                    <div className="col-xs-12 col-sm-7 col-md-5">
                        <img src={this.props.dataCart.photo} width="190" height="210" alt="No image"/>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-7 listCartContent">
                        <p>Id book: {this.props.dataCart.id}</p>

                        <p>
                            Name book:
                            <Link to={'/details/' + this.props.dataCart.id}>
                                {this.props.dataCart.nameProduct}
                            </Link>
                        </p>
                        <p>Price: {this.props.dataCart.price}</p>
                        <p>Number: {this.props.dataCart.numberPr}</p>
                        <p>Content: {this.props.dataCart.describe}</p>
                        <button onClick={this.deleteCartss}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListCart;
