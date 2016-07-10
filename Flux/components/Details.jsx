import React from 'react';

class Details extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          ids: this.props.ids || {}
      }
      this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            ids: nextProps.ids || {}
        });
    }
  render(){
    return(
      <h2> sssssssssssssssss{this.state.ids.nameProduct} </h2>
      );
  }
}
export default Details;
