import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cartHome.css'
//import { addShipping } from './actions/cartActions'

class Recipe extends Component{

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.subtractShipping()
    }

    handleChecked = (e)=>{
        if(this.props.check===0){
       this.props.addShipping();
        }
    }
    handleChecked2 = (e)=>{
        if(this.props.check === 1)
        {
        this.props.subtractShipping();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection2">
                    
                            <form action="/action_page.php">
                           <h5 className="radButton"> <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked} />Shipping(+$6)<br/></h5>
                           <h5 className="radButton"> <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2} />Pickup At Mt Eden(+$0)<br/></h5>
                           <h5 className="radButton"><input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2}/>Pickup At East Tamaki(+$0)<br/></h5>
                           <h5 className="radButton"><input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2}/>Pickup At Albany(+$0)<br/> </h5>
                            </form>

                        
                        <h5><b>Total:$ {this.props.total} </b></h5>
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
        total: state.total,
        check: state.check
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
