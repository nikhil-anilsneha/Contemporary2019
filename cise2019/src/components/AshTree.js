import React, { Component } from "react";
import './tree.css'
import AshTreePic from "./images/AshTreePic.jpg";
import OakTreePic from "./images/OakTreePic.jpg";
import AppleTreePic from "./images/AppleTreePic.jpg";
import TomatoTreePic from "./images/TomatoTreePic.jpg";
import CascadePalmTreePic from "./images/CascadePalmTreePic.jpg";
import KingPalmTreePic from "./images/KingPalmTreePic.jpg";
import KauriTreePic from "./images/KauriTreePic.jpg";
import PohutukawaTreePic from "./images/PohutukawaTreePic.jpg";

export default class AshTree extends Component {
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
      .then(response => this.setState({ tree: response.data[this.props.match.params.treeId] }))
      .catch(err => console.error(err));
  };

  getImage(tree_id) {
    if(tree_id === 1)
    {
      return (
        <div class = "tree-image">
          <img src={AshTreePic} alt="AshTreePic" className="AshTreePic" width="400" height="400" ></img>
        </div>
      );
    }
    else if(tree_id === 2)
    {
      return (
        <div class = "tree-image">
          <img src={OakTreePic} alt="OakTreePic" className="OakTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 3)
    {
      return (
        <div class = "tree-image">
          <img src={AppleTreePic} alt="AppleTreePic" className="AppleTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 4)
    {
      return (
        <div class = "tree-image">
          <img src={TomatoTreePic} alt="TomatoTreePic" className="TomatoTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 5)
    {
      return (
        <div class = "tree-image">
          <img src={CascadePalmTreePic} alt="CascadePalmTreePic" className="CascadePalmTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 6)
    {
      return (
        <div class = "tree-image">
          <img src={KingPalmTreePic} alt="KingPalmTreePic" className="KingPalmTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 7)
    {
      return (
        <div class = "tree-image">
          <img src={KauriTreePic} alt="KauriTreePic" className="KauriTreePic" width="400" height="400"></img>
        </div>
      );
    }
    else if(tree_id === 8)
    {
      return (
        <div class = "tree-image">
          <img src={PohutukawaTreePic} alt="PohutukawaTreePic" className="PohutukawaTreePic" width="400" height="400"></img>
        </div>
      );
    }
    return tree_id
  }

  renderProduct = ({ tree_id , tree_name, tree_type, tree_description }) => (
    <div key={tree_id}>

      <div class = "tree-name">
        <h1>{tree_name} Tree</h1>
      </div>

      <br></br>
      {this.getImage(tree_id)}
      <br></br>

      <div class = "category">
        <div class = "category-name">
          <p>Tree Category</p>
        </div>

        <div class = "category-content">
          <p>{tree_type}</p>
        </div>        
      </div>

      <div class = "description">
        <div class = "description-name">
          <p>Tree Description</p>
        </div>

        <div class = "description-content">
          <p>{tree_description}</p>
        </div>        
      </div>
    </div>
  );

  render() {
    const { tree } = this.state;
    return <div>{tree.map(this.renderProduct)}</div>;
  }
}