import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'

 class ToolsPage extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="recard" key={item.id}>
                        <div className="card-image">
                        <Link to={`/tools/${item.id}`}> <img src={item.img} alt={item.title}/></Link>
                        </div>
                        <div>
                            <span className="card-title"><Link to={`/tools/${item.id}`}>{item.title}</Link></span>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></button>
                        </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })

        return(
            <div className>
                <h1 className="center">Tools</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(ToolsPage)