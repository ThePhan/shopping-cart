import React from 'react';
import {Button, FormGroup, InputGroup, Glyphicon, FormControl} from 'react-bootstrap';
class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item || {}
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.ItemHandle = this.ItemHandle.bind(this);
        //this.addItemHandle = this.addItemHandle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.item || {}
        })
    }
    handleOnchange(field, e) {
        var item = this.state.item;
        item[field] = e.target.value;
        this.setState({listItems: item});
    }

    ItemHandle(e) {
        if (this.state.item.nameProduct == null || this.state.item.price == null || this.state.item.describe == null || this.state.item.photo == null) {
            alert("Please input enought infor...");
        } else {
            if (this.state.item.id) {
                this.props.updateItemHandle(this.state.item, this.props.indexItem);
            } else {
                this.props.addItemHandle(this.state.item);
            }
        }
    }

    render() {
        return (

            <div className="row formUser">
                <div className="col-xs-12 col-sm-6 col-md-6 subFormUser">
                    <FormGroup bsSize="large" className="formGroup">
                      <InputGroup id="inputGroup">
                            <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="input name product...." value={this.state.item.nameProduct || ''} onChange={this.handleOnchange.bind(this, 'nameProduct')}/>
                        </InputGroup>
                        <InputGroup id="inputGroup">
                            <InputGroup.Addon><Glyphicon glyph="camera"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="input price...." value={this.state.item.price || ''} onChange={this.handleOnchange.bind(this, 'price')}/>
                        </InputGroup>
                        <InputGroup id="inputGroup">
                            <InputGroup.Addon><Glyphicon glyph="camera"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="input describe...." value={this.state.item.describe || ''} onChange={this.handleOnchange.bind(this, 'describe')}/>
                        </InputGroup>
                        <InputGroup id="inputGroup">
                            <InputGroup.Addon><Glyphicon glyph="camera"/></InputGroup.Addon>
                            <FormControl type="text" placeholder="input photo...." value={this.state.item.photo || ''} onChange={this.handleOnchange.bind(this, 'photo')}/>
                        </InputGroup>
                    </FormGroup>
                    <Button bsStyle="success" bsSize="small" onClick={this.ItemHandle}><Glyphicon glyph="leaf"/> {this.state.item.id
                            ? 'Update item'
                            : 'Add item'}</Button>
                    <br/>
                </div>

            </div>
        );
    }
}
export default Additem;
