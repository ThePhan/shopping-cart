import React from 'react';
import AppStore from '../../stores/AppStore.jsx';
import localStorage from 'react-localstorage';
class Details extends React.Component {
    constructor(props) {
        super(props);
        mixins : [localStorage]
        this.state = {
            param: this.props.params.id,
            listCart: AppStore.getListCart(),
            arrayDetail: []
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

        this.setState({listCart: AppStore.getListCart()});
    }
    componentWillMount() {
        var newArr = [];
        for (var i = 0; i < this.state.listCart.length; i++) {
            if (this.state.param == this.state.listCart[i].id) {
                newArr.push(this.state.listCart[i]);
            }
        }
        this.setState({listCart: newArr});
        localStorage.state = JSON.stringify(this.state);
        console.log(this.state.listCart.length + "dasdadada")

    }
    componentDidUpdate(prevProps, prevState) {
        localStorage.state = JSON.stringify(this.state);
    }
    render() {
        var details = this.state.listCart.map(function(cart, index) {
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
