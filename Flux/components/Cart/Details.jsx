import React from 'react';
import AppStore from '../../stores/AppStore.jsx';
import localStorage from 'react-localstorage';
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            param: this.props.params.id,
            listProducts: AppStore.getAll()
        }
        this._onChange = this._onChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {

        this.setState({listProducts: AppStore.getAll()});
    }

    /*
        - get id from param URL, then parse with id in listproduct.
        - if true, return and setState for listproduct.
        -rerender component with new id
    */
    componentWillMount() {
        var newArr = [];
        for (var i = 0; i < this.state.listProducts.length; i++) {
            if (this.state.param == this.state.listProducts[i].id) {
                newArr.push(this.state.listProducts[i]);
            }
        }
        this.setState({listProducts: newArr});
        console.log(this.state.listProducts.length + "dasdadada")

    }
    componentDidUpdate(prevProps, prevState) {
        localStorage.state = JSON.stringify(this.state);
    }
    render() {
      /*
        -Map function to render detail product into component
      */
        var details = this.state.listProducts.map(function(cart, index) {
            return (
                <li key={index}>
                    <div className="col-xs-12 col-sm-7 col-md-8  col-lg-8 listCartDetail">
                        <p>
                            <b>Id book:</b>
                            <span id="idBook">
                                #{cart.id}</span>
                        </p>

                        <p>
                            <b>
                                Name book:</b>
                            <span id="nameBook">
                                {cart.nameProduct}</span>
                        </p>
                        <p>
                            <b>Price:</b>
                            {cart.price}$</p>
                        <p>
                            <b>Content:</b>
                            {cart.describe}</p>
                    </div>
                </li>
            )
        }.bind(this));
        return (
            <div>
                <ul>{details}</ul>
            </div>
        );
    }
}

export default Details;
