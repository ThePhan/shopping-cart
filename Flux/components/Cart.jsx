import React from 'react';
import {Link} from 'react-router';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart: this.props.dataCart || {}
        }

        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataCart: this.props.dataCart || {}
        })
    }

    render() {
        return (
            <div>
                {this.props.dataCart.id}
                {this.props.dataCart.nameProduct}
                {this.props.dataCart.price}
                <br/> {this.props.dataCart.numberPr}
                <Link to="details">View details</Link>
            </div>
        )
    }
}
export default Cart;
