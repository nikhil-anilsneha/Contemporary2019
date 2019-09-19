import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Collapse, Card, Media} from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button className="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `See` : `Hide`} Item Details
                    {this.state.open === false ? ` +` : ` -`} 
                </Button>
                <Collapse in={this.state.open}>
                    
                    <div>
                        <Card className="card">
                        <Media>
                            <Media>
                            <br/>
                            <img 
                            width={100}
                            height={100}
                            alt="thumbnail"
                            src="https://images.kogan.com/image/fetch/s--INtBOaCt--/b_white,c_pad,f_auto,h_800,q_auto:good,w_1200/https://assets.kogan.com/files/product/etail/Amazon-/KHAMAE3CHA_1.jpg"/>
                        </Media>
                        <Media.Body>
                         <p>Alexa</p>
                         <Row className="media">
                             <Col md={6}>
                              <strong>{`$${this.props.price}`}</strong>
                              <br/>
                              <strong className="price-strike">{`$${this.props.price}`}</strong>
                             </Col>
                             <Col md={6}>Qty: 1</Col>
                                 </Row>  
                        </Media.Body>
                        </Media>
                        </Card>
                    </div>
                </Collapse>
            </div> 
        )
    }
}