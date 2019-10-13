import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cartHome.css'
import { Link } from 'react-router-dom'

//import { addShipping } from './actions/cartActions'

class Recipe extends Component {

    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.subtractShipping()
    }

    //handles normal delivery
    handleChecked = (e) => {
        if (this.props.totalItem >= 10) {
            alert("As you have more than 10 items, delivery is free! (Does not apply to express delivery)")
        }
        else {
            if (this.props.checked === 0) {
                this.props.addShipping();
            }
            if (this.props.checked === 3) {
                this.props.subExpress2();
            }
        }
    }

    //handles pickup
    handleChecked2 = (e) => {
        if (this.props.checked === 1) {
            this.props.substractShipping();
        }
        if (this.props.checked === 3) {
            this.props.subExpress();
        }
    }

    //handles special delivery
    handleChecked3 = (e) => {
        if (this.props.checked === 0) {
            this.props.addExpress();
        }
        if (this.props.checked === 1) {
            this.props.addExpress2();
        }
    }

    render() {
        return (
            //shipping options and total cost
            <div className="container-fluid">
                <div className="collection2">
                    <input type="radio" name="del" className="options" ref="shipping" onChange={this.handleChecked} />Shipping(+$6)
                        <input type="radio" name="del" className="options" ref="shipping" onChange={this.handleChecked3} />Express Shipping(+$69)
                        <input type="radio" name="del" className="options" ref="shipping" onChange={this.handleChecked2} />Pickup At Mt Eden(+$0)
                        <input type="radio" name="del" className="options" ref="shipping" onChange={this.handleChecked2} />Pickup At East Tamaki(+$0)
                        <input type="radio" name="del" className="options" ref="shipping" onChange={this.handleChecked2} />Pickup At Albany(+$0)<br />
                    <b>Total:$ {this.props.total} </b>
                </div>
                <div className="checkout">
                    <button><Link to="./Checkout.js"><h5>Checkout</h5></Link></button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        checked: state.checked,
        totalItem: state.totalItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //all functions used in this class
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) },
        addExpress: () => { dispatch({ type: 'EXP_SHIPPINGA' }) },
        addExpress2: () => { dispatch({ type: 'EXP_SHIPPINGA2' }) },
        subExpress: () => { dispatch({ type: 'EXP_SHIPPINGS' }) },
        subExpress2: () => { dispatch({ type: 'EXP_SHIPPINGS2' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
