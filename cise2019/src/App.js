import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode'
import './App.css';
import {connect} from 'react-redux';
import {handleChange} from './actions/promoCodeActions';
import tree from "./components/tree.jpg"

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state={total:200,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal:0,
      disablePromoButton: false
    }
  }

componentDidMount = () => {
  this.setState({
    taxes: (this.state.total+ this.state.PickupSavings) * 0.18
  },
  function() {
    this.setState({ 
    estimatedTotal: this.state.total+this.state.PickupSavings+ this.state.taxes})
  });
}

giveDiscountHandler = () => {
  if(this.props.promoCode === 'DISCOUNT') {
    this.setState({
      estimatedTotal : this.state.estimatedTotal*0.9
    },
    function() {
      this.setState({
        disablePromoButton:true
      });
    }
    );
  }
};

  render() {
    return (
    <div className="container">
      <Container className="purchase">      
        <Row classname>
         <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
      </Row>
      <Row>
      <PickupSavings price={this.state.PickupSavings}></PickupSavings>
      </Row>
      <Row><TaxesFees taxes={this.state.taxes.toFixed(2)}>
        </TaxesFees></Row>
        <hr></hr>
        <Row><EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}></EstimatedTotal></Row>
        <Row><ItemDetails price={this.state.estimatedTotal.toFixed(2)}></ItemDetails></Row>
      <hr/>
      <Row>
        <PromoCode    giveDiscount={() => this.giveDiscountHandler()}
        isDisabled={this.state.disablePromoButton} />
      </Row>
      </Container>
      <hr/>
      <img src={tree} alt="tree"></img>
    </div>
  );
    }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange}) (App);
