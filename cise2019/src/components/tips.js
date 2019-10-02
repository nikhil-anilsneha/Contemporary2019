import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

export default class GardenTips extends Component {
  constructor() {
    super();
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    this.getTips();
  }

  getTips = _ => {
    fetch("/tips")
      .then(response => response.json())
      .then(response => this.setState({ tips: response.data[0] }))
      .catch(err => console.error(err));
  };

  renderProduct = ({ tips_id, tips_title, tips_description }) => (
    <div key={tips_id}>
      <Link to={`/tips/${tips_id}`}>{tips_title}</Link>
    </div>
  );

  render() {
    const { tips } = this.state;
    return <div>
    <h1>Gardening Tips</h1>
    {tips.map(this.renderProduct) }</div>;
  }
}
