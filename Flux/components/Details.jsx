import React from 'react';
import AppStore from '../stores/AppStore.jsx';

class Details extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log("aaaa ", AppStore.getListCart() );
        console.log("thiss ", this.context );
        return (
            <div>

                SFSDFGSFWSDF
            </div>
        );
    }
}
Details.contextTypes = {
  product: React.PropTypes.object
};
export default Details;
