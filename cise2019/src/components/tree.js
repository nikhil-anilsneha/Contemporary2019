import React, { Component } from "react";

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
    fetch("http://localhost:3001/tree")
      .then(response => response.json())
      .then(response => this.setState({ tree: response.data }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ tree_id , tree_name, tree_type, tree_description }) => (
    <div key={tree_id}>
      {tree_id} : {tree_name} <br/> {tree_type} <br/> {tree_description}<br/>
    </div>
  );

  render() {
    const { tree } = this.state;
    return <div>{tree.map(this.renderProduct)}</div>;
  }
}
