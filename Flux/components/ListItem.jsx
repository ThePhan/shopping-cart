import React from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleBuyButton = this.handleBuyButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    };

    handleBuyButton() {
        this.props.handleBuyButton(this.props.indexItem);
    }

    handleEditButton() {
        this.props.handleEditButton(this.props.indexItem);
    }
    handleDeleteButton() {
        this.props.handleDeleteButton(this.props.data.id);
    }

    render() {
        return (
            <div id="try">
                <ul id="listUser">
                    <table>
                        <tbody>
                            <tr>
                                <td><img src={this.props.data.photo} width="180" height="190" alt="No image"/></td>
                                <td>
                                    <b>
                                        Id:
                                    </b>
                                    {this.props.data.id}
                                    <br/>
                                    <b>
                                        Name product:
                                    </b>{this.props.data.nameProduct}
                                    <br/>
                                    <b>
                                        Price:
                                    </b>{this.props.data.price}
                                    <br/>
                                    <b>
                                        describe:
                                    </b>{this.props.data.describe}
                                    <br/>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <Button id="spaceButton" onClick={this.handleDeleteButton} bsStyle="warning" bsSize="small"><Glyphicon glyph="pencil"/>
                        Delete
                    </Button>
                    <Button id="spaceButton" onClick={this.handleBuyButton} bsStyle="warning" bsSize="small"><Glyphicon glyph="pencil"/>
                        Buy
                    </Button>
                    <Button id="spaceButton" onClick={this.handleEditButton} bsStyle="warning" bsSize="small"><Glyphicon glyph="pencil"/>
                        Edit
                    </Button>
                </ul>
            </div>
        );
    }
}

export default ListItem;
