import React, { Component } from 'react';

export default class SingleTip extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tips: []
        };
      }
    
      componentDidMount() {
        this.getTips();
      }
    
      getTips = _ => {
        fetch("/tips/")
          .then(response => response.json())
          .then(response => this.setState({ tips: response.data[this.props.match.params.tipsId] }))
          .catch(err => console.error(err));
      };
    
      renderProduct = ({ tips_id, tips_title, tips_description }) => (
        <div key={tips_id}>
          {tips_title} <br/> {tips_description}
        </div>
      );
    
      render() {
        const { tips } = this.state;
        return <div>{tips.map(this.renderProduct)}</div>;
      }
}