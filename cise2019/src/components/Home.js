import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'
import './cartHome.css';

 class Home extends Component{
     constructor(props){
         super(props)
         this.state = {
             filter: 0            
         }
         var itemList;
         this.change0.bind(this);
         this.change1.bind(this);
     }
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }


    render(){
        if(this.state.filter===0){
        this.itemList = this.props.items.map(item=>{
            return(
                <div className="gridcontainer" key={item.id}>
                    <div className="col-sm-12">
                        <div className="img-responsive">
                        <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150"/></Link>
                        </div>
                        <div>
                            <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                            <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></button>
                            <div className="card-content">
                            <p><b>Price: ${item.price}</b></p>
                            </div>
                        </div>
                    </div>
                 </div>
            
            )
        })}
        if(this.state.filter===1){
            this.itemList = this.props.hardWoodItems.map(item=>{
                return(
                    <div className="gridcontainer" key={item.id}>
                        <div className="browseCard">
                            <div className="card-image">
                            <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150"/></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></button>
                            </div>
                            <div className="card-content">
                                <p><b>Price: ${item.price}</b></p>
                            </div>
                            </div>
                     </div>
                
                )
            })}

        return(
            <div className="container-fluid">
                <h1>Our Items</h1>
                 <form action="/action_page.php">
                            <input type="radio" name="filter" ref="filter"  onChange={() => this.change0()}/>All<br/>
                            <input type="radio" name="filter" ref="filter" onChange={() => this.change1()}/>Hardwood)<br/>
                            </form>
                <div className="row">
                    {this.itemList}
                </div>
            </div>

        )
    }
    change0(){
     this.setState({filter: 0})       
    }
    change1(){
        this.setState({filter: 1})       
       }
}
  
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      hardWoodItems : state.hardWoodItems
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)