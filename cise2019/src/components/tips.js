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

  //gets all the tips from the database and stores it in the tips array
  getTips = _ => {
    fetch("/tips")
      .then(response => response.json())
      .then(response => this.setState({ tips: response.data[0] }))
      .catch(err => console.error(err));
  };

  //displays the title of the tip as a clickable link
  renderProduct = ({ tips_id, tips_title}) => (
    <div key={tips_id}>
      <h3><Link to={`/tips/${tips_id}`}>{tips_title}</Link></h3>
    </div>
  );

  render() {
    const { tips } = this.state;
    return <div>
      <h1>Gardening Tips</h1>
      <br />
      {tips.map(this.renderProduct)}</div>;
  }
}
