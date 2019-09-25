import React, { Component } from 'react';

export default class SingleTool extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tools: []
        };
      }
    
      componentDidMount() {
        this.getTools();
      }
    
      getTools = _ => {
        fetch("http://localhost:3001/tools/")
          .then(response => response.json())
          .then(response => this.setState({ tools: response.data[this.props.match.params.toolsId] }))
          .catch(err => console.error(err));
      };
    
      renderProduct = ({ tools_id, tools_name, tools_description, tools_price }) => (
        <div key={tools_id}>
          {tools_name} <br/> {tools_description} <br/> ${tools_price}
        </div>
      );
    
      render() {
        const { tools } = this.state;
        return <div>{tools.map(this.renderProduct)}</div>;
      }
}