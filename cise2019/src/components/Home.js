import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addToCart } from './actions/cartActions'
import './cartHome.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.items)}>All</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.hardWoodItems)}>Hardwood</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.FruitItems)}>Fruit</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.PalmItems)}>Palm</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.NZNativeItems)}>NZ Native</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.ToolItems)}>Tools</button>

                    </div>
                </form>
                <br></br>
                <form action="/action_page.php">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.CheapItems)}>$50 and Less</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.MediumCostItems)}>$51-$100</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.HighCostItems)}>$100 and more</button>

                    </div>
                </form>
                <br></br>
                <form action="/action_page.php">
                    <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.ThreePlusItems)}>3m+ Trees</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.OneToTwoItems)}>1-2m Trees</button>
                    </div>
                </form>
                <br></br>
                <form action="/action_page.php">
                    <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.HighSunItems)}>High Sunlight Requirement</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.change(this.props.PartialShadeItems)}>Partial Sunlight Requirement</button>
                    </div>
                </form>
                <div className="row">
                    {this.itemList}
                </div>
            </div>

        )
    }
    change(listToRender) {
        this.setState({myList: listToRender})
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hardWoodItems: state.hardWoodItems,
        FruitItems: state.FruitItems,
        PalmItems: state.PalmItems,
        NZNativeItems: state.NZNativeItems,
        ToolItems: state.ToolItems,
        CheapItems: state.CheapItems,
        ThreePlusItems : state.ThreePlusItems,
        OneToTwoItems : state.OneToTwoItems,
        HighSunItems : state.HighSunItems,
        PartialShadeItems : state.PartialShadeItems,
        MediumCostItems : state.MediumCostItems,
        HighCostItems : state.HighCostItems
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)