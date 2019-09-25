import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

export default class ToolsPage extends Component {
  constructor() {
    super();
    this.state = {
      tools: []
    };
  }

  componentDidMount() {
    this.getTools();
  }

  getTips = _ => {
    fetch("http://localhost:3001/tools")
      .then(response => response.json())
      .then(response => this.setState({ tips: response.data[0] }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ tools_id, tools_name, tools_description }) => (
    <div key={tools_id}>
      <Link to={`/tools/${tools_id}`}>{tools_name}</Link>
    </div>
  );

  render() {
    const { tools } = this.state;
    return <div>{tools.map(this.renderProduct) }</div>;
  }
}