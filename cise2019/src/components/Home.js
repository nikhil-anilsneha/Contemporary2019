import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'
import './cartHome.css';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="gridcontainer" key={item.id}>
                    <div className="browseCard">
                        <div className="card-image">
                        <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150"/></Link>
                        </div>
                        <div>
                            <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></button>
                        </div>
                        <div className="card-content">
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                        </div>
                 </div>
            
            )
        })

        return(
            <div className>
                <h1 className="ourItems">Our items</h1>
                <div className="center">
                    {itemList}
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)