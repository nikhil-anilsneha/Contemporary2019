import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'
import './cartHome.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 0
        }
        var itemList;
        this.change.bind(this);
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }


    render() {
        if (this.state.filter === 0) {
            this.itemList = this.props.items.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                                <div className="card-content">
                                    <p><b>Price: ${item.price}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if (this.state.filter === 1) {
            this.itemList = this.props.hardWoodItems.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                            </div>
                            <div className="card-content">
                                <p><b>Price: ${item.price}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if (this.state.filter === 2) {
            this.itemList = this.props.FruitItems.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                                <div className="card-content">
                                    <p><b>Price: ${item.price}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if (this.state.filter === 3) {
            this.itemList = this.props.PalmItems.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                                <div className="card-content">
                                    <p><b>Price: ${item.price}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if (this.state.filter === 4) {
            this.itemList = this.props.NZNativeItems.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                                <div className="card-content">
                                    <p><b>Price: ${item.price}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        if (this.state.filter === 5) {
            this.itemList = this.props.ToolItems.map(item => {
                return (
                    <div className="gridcontainer" key={item.id}>
                        <div className="col-sm-12">
                            <div className="img-responsive">
                                <Link to={`/tree/${item.id}`}> <img src={item.img} alt={item.title} width="150" height="150" /></Link>
                            </div>
                            <div>
                                <span className="card-title"><Link to={`/tree/${item.id}`}>{item.title}</Link></span>
                                <button to="/" className="btn-success btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></button>
                                <div className="card-content">
                                    <p><b>Price: ${item.price}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="container-fluid">
                <h1>Our Items</h1>
                <form action="/action_page.php">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => this.change(0)}>All</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(1)}>Hardwood</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(2)}>Fruit</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(3)}>Palm</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(4)}>NZ Native</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(5)}>Tools</button>
                    </div>
                </form>
                <div className="row">
                    {this.itemList}
                </div>
            </div>

        )
    }
    change(filterNo) {
        this.setState({ filter: filterNo })
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hardWoodItems: state.hardWoodItems,
        FruitItems: state.FruitItems,
        PalmItems: state.PalmItems,
        NZNativeItems: state.NZNativeItems,
        ToolItems: state.ToolItems
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)