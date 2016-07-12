import React from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleBuyButton = this.handleBuyButton.bind(this);
    };

    handleBuyButton() {
        this.props.handleBuyButton(this.props.indexItem);
    }

    render() {
      var content = (this.props.data.describe).substring(0, 190) + "...." ;
        return (
          <ul>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 adminContent">
                    <div className="col-xs-12 col-sm-7 col-md-5 imgAdmin">
                        <img src={this.props.data.photo} width="200" height="270" alt="No image"/>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-7 contendProductAdmin">
                        <p>
                            <b>
                                Id:
                            </b>
                            <span id="idBook"> {this.props.data.id}</span>
                        </p>
                        <p>
                            <b>
                                Name book:
                            </b> <span id="nameBook">{this.props.data.nameProduct} </span>
                        </p>
                        <p>
                            <b>
                                Price:
                            </b>{this.props.data.price}$
                        </p>
                        <p>
                            <b>
                                Content:
                            </b>{content}
                        </p>
                        <Button onClick={this.handleBuyButton} bsStyle="info" bsSize="small"><Glyphicon glyph="arrow-down"/>
                            Buy</Button>
                    </div>

                </div>
            </div>
            </ul>
        );
    }
}

export default ListItem;
