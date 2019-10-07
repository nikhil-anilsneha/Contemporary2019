import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class tree extends Component {
  constructor() {
    super();
    this.state = {
      tree: []
    };
  }

  componentDidMount() {
    this.getTrees();
  }

  getTrees = _ => {
    fetch("/tree")
      .then(response => response.json())
      .then(response => this.setState({ tree: response.data[0] }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ tree_id, tree_name, tree_type, tree_price, tree_description, tree_condition, tree_soil, tree_sun, tree_feeding, tree_watering, tree_pruning, tree_height, tree_growth, tree_origin, tree_flowers, tree_berries, tree_uses, tree_type_info }) => (
    <div key={tree_id}>
      <Link to={`/tree/${tree_id}`}>{tree_name}</Link>
    </div>
  );

  render() {
    const { tree } = this.state;
    return <div>{tree.map(this.renderProduct) }</div>;
  }
}