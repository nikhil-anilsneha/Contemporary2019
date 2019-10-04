import React, { Component } from 'react';
import './tree.css'

export default class PostTreeOrigin extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tree: []
        };
      }
    
      componentDidMount() {
        this.getTrees();
      }
      
      getTrees = _ => {
        fetch("/tree/")
          .then(response => response.json())
          .then(response => this.setState({ tree: response.data[0] }))
          .catch(err => console.error(err));
      };
    
      renderProduct = ({ tree_id, tree_name, tree_origin }) => (
        <div key={tree_id}>
            <div class = "tree-name">
                <h1>{tree_name} Tree</h1>
            </div>
  
            <div class = "header">
                <div class = "header-name">
                    <p>Tree Origin</p>
                </div>
  
                <div class = "header-content">
                    <p>{tree_origin}</p>
                </div>        
            </div>
        </div>
      );
    
      render() {
        const { tree } = this.state;
        return <div>{tree.map(this.renderProduct)}</div>;
      }
}