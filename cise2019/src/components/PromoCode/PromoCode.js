import React, {Component} from 'react';
import {Button, Collapse, Card, Form, Row, Col, FormGroup, FormControl, FormLabel} from 'react-bootstrap';

class PromoCode extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            open: false,
            value: ''
        };
    }
    render() {
        return(
            <div>
                <Button className= "promo-code-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open})}>
                     {this.state.open === false ? `Apply` : `Hide`} Promo Code
                    {this.state.open === false ? ` +` : ` -`} 
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card className="card">
                            <Row>
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            <FormLabel>Promo Code</FormLabel>
                                            <FormControl type="text" 
                                            placeholder="Enter Promo Code"
                                            value= { this.props.promoCode}
                                            onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <Button
                                        block
                                        bsStyle="success"
                                        className ="apply-button"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}>
                                            Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default PromoCode;