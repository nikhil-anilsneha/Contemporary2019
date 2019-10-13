import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipe from './Recipe'
import './Checkout.css'

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        //displays item and all its details
                        <div>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="img-responsive" width="150" height="150" />
                            </div>

                            <div className="item-desc">
                                <span className="title"><h4>{item.title}</h4></span>
                                <p>{item.desc}</p>
                                <p><b><h5>Price: ${item.price}</h5></b></p>
                                <p>
                                    <b><h5>Quantity: {item.quantity}</h5></b>
                                </p>
                                <div className="add-remove">
                                    <Link to="./C.js"><i className="up" onClick={() => { this.handleSubtractQuantity(item.id) }}><a href="#" class="previous"> -</a></i></Link>
                                    <Link to="./C.js"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}><a href="#" class="next">+</a></i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}><h5>Remove</h5></button>
                            </div>

                        </div>

                    )
                })
            ) :

            (
                <p><h5>Nothing</h5></p>
            )
        //shows items in cart
        return (
            <div className="container-fluid">
                <div className="cart">
                    <h4>You have ordered</h4><br />

                    {addedItems}

                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)