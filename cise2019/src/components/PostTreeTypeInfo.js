import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import './tree.css'

export default class PostTreeTypeInfo extends Component {
  constructor() {
    super();
    this.state = {
      tree_type: []
    };
  }

  componentDidMount() {
    this.getTreeType();
  }

  getTreeType = _ => {
    fetch("/tree_type")
      .then(response => response.json())
      .then(response => this.setState({ tree_type: response.data[1] }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ tree_type_id, tree_type, tree_type_info }) => (
    <div key={tree_type_id}>
      <Link to={`/tree_type/${tree_type_id}`}>{tree_type}</Link>
    </div>
  );

  render() {
    const { tree_type } = this.state;
    return <div>
    <h1>Interesting Facts of Tree Types</h1>
    {tree_type.map(this.renderProduct)}</div>;
  }
}
