import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'
import './cartHome.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 0,
            myList: this.props.items
        }
        var itemList;
        this.change.bind(this);
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }


    render() {
        this.itemList = this.state.myList.map(item => {
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
                <br></br>
                <form action="/action_page.php">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => this.change(2)}>$50 and Less</button>
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
        if (filterNo === 0) {
            this.setState({ myList: this.props.items })
        }
        if (filterNo === 1) {
            this.setState({ myList: this.props.hardWoodItems })
        }
        if (filterNo === 2) {
            this.setState({ myList: this.props.FruitItems })
        }
        if (filterNo === 3) {
            this.setState({ myList: this.props.PalmItems })
        }
        if (filterNo === 4) {
            this.setState({ myList: this.props.NZNativeItems })
        }
        if (filterNo === 5) {
            this.setState({ myList: this.props.ToolItems })
        }
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