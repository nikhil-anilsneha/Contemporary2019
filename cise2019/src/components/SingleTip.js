import React, { Component } from 'react';

export default class SingleTip extends Component {
   
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
        fetch("http://localhost:3001/tips/")
          .then(response => response.json())
          .then(response => this.setState({ tips: response.data[1] }))
          .catch(err => console.error(err));
      };
    
      renderProduct = ({ tips_id, tips_title, tips_description }) => (
        <div key={tips_id}>
          {tips_title} <br/> {tips_description}
        </div>
      );
    
      render() {
        const { tips } = this.state;
        return <div>{tips.map(this.renderProduct) }</div>;
      }
}