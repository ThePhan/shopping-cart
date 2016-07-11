import React from 'react';
import {Link} from 'react-router';

class ListCart extends React.Component{
  constructor(props) {
      super(props);
      this.deleteCartss = this.deleteCartss.bind(this);
  }
  deleteCartss(){
    this.deleteCartss(this.props.dataCart.id);
  }
  render(){
    return(
      <div>
      <table>
        <tr>
            <td><img src={this.props.dataCart.photo} width="180" height="190" alt="No image"/></td>
            <td id ="contentTD">
            Id book: {this.props.dataCart.id} <br />
            Name book: <Link to={'/details/' + this.props.dataCart.id}>
                {this.props.dataCart.nameProduct}
            </Link> <br />
            Price: {this.props.dataCart.price}<br />
            Number: {this.props.dataCart.numberPr}<br />
            Content: {this.props.dataCart.describe}
            <button onClick={this.deleteCartss}> Delete </button></td>
        </tr>

        </table>
      </div>
    );
  }
}
export default ListCart;
