import React from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

class ListAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    };

    handleEditButton() {
        this.props.handleEditButton(this.props.indexItem);
    }
    handleDeleteButton() {
        this.props.handleDeleteButton(this.props.dataAdmin.id);
    }

    render() {
        return (

            <div className="col-xs-12 col-sm-6 col-md-6 adminContent">

                <div className="col-xs-12 col-sm-7 col-md-5 imgAdmin">

                    <span className="ima"><img src={this.props.dataAdmin.photo} width="180" height="190" alt="No image"/></span>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-7 contendProductAdmin">

                    <p>
                        <b>
                            Id: #
                        </b>
                        {this.props.dataAdmin.id}
                    </p>
                    <p>
                        <b>
                            Name product:
                        </b>{this.props.dataAdmin.nameProduct}
                    </p>
                    <p>
                        <b>
                            Price:
                        </b>{this.props.dataAdmin.price}
                    </p>
                    <p>
                        <b>
                            describe:
                        </b>{this.props.dataAdmin.describe}
                    </p>

                    <Button id="spaceButton" onClick={this.handleDeleteButton} bsStyle="danger" bsSize="small"><Glyphicon glyph="remove "/>
                        Delete</Button>
                    <Button id="spaceButton" onClick={this.handleEditButton} bsStyle="warning" bsSize="small"><Glyphicon glyph="edit"/>
                        Edit</Button>
                </div>
            </div>

        );
    }
}

export default ListAdmin;
