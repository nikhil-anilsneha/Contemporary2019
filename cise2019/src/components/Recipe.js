import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

class Recipe extends Component{

    

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
            this.props.addShipping();

    }
    handleChecked2 = (e)=>{
        this.props.substractShipping();

}

    render(){
  
        return(
            <div className="container">
                <div className="collection2">
                    
                            <form action="/action_page.php">
                            <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked} />Shipping(+$6)<hr/>
                            <input type="radio" name="del" ref="Location 1" onChange={this.handleChecked2}/>Pickup At Location 1(+$0)<br/>
                            <input type="radio" name="del" ref="Location 1" onChange={this.handleChecked2}/>Pickup At Location 2(+$0)<br/>
                            <input type="radio" name="del" ref="Location 1" onChange={this.handleChecked2}/>Pickup At Location 3(+$0)<br/>
                            </form>

                        
                        <b>Total:$ {this.props.total} </b>
                    </div>
                    <div className="checkout">
                        <button><a href="./Checkout.js">Checkout</a></button>
                    </div>
                 </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
