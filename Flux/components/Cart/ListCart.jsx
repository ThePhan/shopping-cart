import React from 'react';
import {Link} from 'react-router';
import {Button, Glyphicon} from 'react-bootstrap';

class ListCart extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCartss = this.deleteCartss.bind(this);
    }
    deleteCartss() {
        this.props.deleteCartss(this.props.dataCart.id);
    }
    render() {
      var content = (this.props.dataCart.describe).substring(0, 150) + "...." ;
      var conti = " view detail";
      var total = Number((this.props.dataCart.numberPr) * (this.props.dataCart.price));
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-5 col-md-6 col-lg-7 listCart">
                    <div className="col-xs-12 col-sm-5 col-md-4  col-lg-4">
                        <img src={this.props.dataCart.photo} width="190" height="260" alt="No image"/>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-8  col-lg-8 listCartContent">
                        <p><b>Id book:</b> <span id="idBook"> #{this.props.dataCart.id}</span></p>

                        <p><b> Name book:</b> <span id="nameBook">{this.props.dataCart.nameProduct}</span></p>
                        <p><b>Price:</b> {this.props.dataCart.price}$</p>
                        <p><b>Number:</b> {this.props.dataCart.numberPr}</p>
                        <p><b>Total:</b> {total}$</p>
                        <p><b>Content:</b> {content}<Link to={'/details/' + this.props.dataCart.id}> {conti}</Link></p>
                        <Button onClick={this.deleteCartss} bsSize="small" bsStyle="danger"><Glyphicon glyph="remove "/> Delete </Button>
                    </div>
                </div>

            </div>
        );
    }
}
export default ListCart;
