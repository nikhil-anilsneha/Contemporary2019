import React, { Component } from 'react';
import './tree.css'

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
    
      renderProduct = ({ tips_id, tips_title, tips_description, tips_sun, tips_soil }) => (
        <div key={tips_id}>
          <div class = "tree-name">
            <h1>{tips_title}</h1>
          </div>

            <div class = "category-content">
              <p>{tips_description}</p>
              </div>
          

          <div class = "category">
            <div class = "category-name">
              <p>Sunlight Requirements</p>
            </div>

            <div class = "category-content">
              <p>{tips_sun}</p>
            </div>        
          </div>

          <div class = "category">
            <div class = "category-name">
              <p>Soil Requirements</p>
            </div>

            <div class = "category-content">
              <p>{tips_soil}</p>
            </div>        
          </div>
        </div>
      );
    
      render() {
        const { tips } = this.state;
        return <div>{tips.map(this.renderProduct)}</div>;
      }
}