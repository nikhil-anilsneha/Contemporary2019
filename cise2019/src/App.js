import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees';
import './App.css';

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state={total:100,PickupSavings: -3.85,taxes: 0}
  }
  render() {
    return (
    <div className="container">
      <Container className="purchase">      
        <Row classname="show-grid">
         <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
      </Row>
      <Row>
      <PickupSavings price={this.state.PickupSavings}></PickupSavings>
      </Row>
      <Row><TaxesFees taxes={this.state.taxes.toFixed(2)}>
        </TaxesFees></Row>
      </Container>
    </div>
  );
    }
}

export default App;
