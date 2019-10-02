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
handleChecked3 = (e)=>{
    if(this.props.checked===0)
    {
    this.props.addExpress();
    }
    if(this.props.checked===1)
    {
        this.props.addExpress2();
    }
}

    render(){
  
        return(
            <div className="container">
                <div className="collection2">
                    
                            <form action="/action_page.php">
                           <h5 className="radButton"> <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked} /> Shipping(+$6)<br/></h5>
                           <h5 className="radButton"> <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked3} /> Express Shipping(+$6)<br/></h5>
                           <h5 className="radButton"> <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2} /> Pickup at Mt Eden(+$0)<br/></h5>
                           <h5 className="radButton"><input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2}/> Pickup at East Tamaki(+$0)<br/></h5>
                           <h5 className="radButton"><input type="radio" name="del" ref="shipping" onChange= {this.handleChecked2}/> Pickup at Albany(+$0)<br/> </h5>
                            </form>

                        
                        <h5><b>Total: ${this.props.total} </b></h5>
                    </div>
                    <div className="checkout">
                        <button><a href="./Checkout.js"><h5>Checkout</h5></a></button>
                    </div>
                 </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        checked : state.checked,
        totalItem : state.totalItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        addExpress: ()=>{dispatch({type: 'EXP_SHIPPINGA'})},
        addExpress2: ()=>{dispatch({type: 'EXP_SHIPPINGA2'})},
        subExpress: ()=>{dispatch({type: 'EXP_SHIPPINGS'})},
        subExpress2: ()=>{dispatch({type: 'EXP_SHIPPINGS2'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
