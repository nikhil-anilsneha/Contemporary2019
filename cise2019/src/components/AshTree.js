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

  renderProduct = ({ tree_id, tree_name, tree_type, tree_price, tree_description, tree_condition, tree_soil, tree_sun, tree_feeding, tree_watering, tree_pruning, tree_height, tree_growth, tree_flowers, tree_berries }) => (
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

      <div class = "price">
        <div class = "price-name">
          <p>Price</p>
        </div>
        
        <div class = "price-content">
          <p>${tree_price}</p>
          </div>
      </div>

      {/* <div class = "description">
        <div class = "description-name">
          <p>Tree Description</p>
        </div>

        <div class = "description-content">
          <p>{tree_description}</p>
        </div>        
      </div> */}

      <div class = "conditions">
        <div class = "conditions-name">
          <p>Conditions of Place to be Planted</p>
        </div>

        <div class = "conditions-content">
          <p>{tree_condition}</p>
        </div>

        <div class = "soil-name">
          <p>Soil Drainage</p>
          <div class = "soil-name-sub">
            <p>(Slow/Medium/Fast/Anything)</p>
          </div>
        </div>

        <div class = "soil-content">
          <p>{tree_soil}</p>
        </div>

        <div class = "sun-name">
          <p>Sun</p>
          <div class = "sun-name-sub">
            <p>(Shade/Medium/Sunny/Anything)</p>
          </div>
        </div>

        <div class = "sun-content">
          <p>{tree_sun}</p>
        </div>
      </div>

      <div class = "maintenance">
        <div class = "maintenance-name">
          <p>Maintenance Requirements</p>
        </div>

        <div class = "maintenance-content"></div>

        <div class = "maintenance-feeding">
          <div class = "maintenance-feeding-name">
            <p>Feeding</p>
          </div>

          <div class = "maintenance-feeding-content">
            <p>{tree_feeding}</p>
          </div>
        </div>

        <div class = "maintenance-watering">
          <div class = "maintenance-watering-name">
            <p>Watering</p>
          </div>

          <div class = "maintenance-watering-content">
            <p>{tree_watering}</p>
          </div>
        </div>

        <div class = "maintenance-pruning">
          <div class = "maintenance-pruning-name">
            <p>Pruning</p>
          </div>

          <div class = "maintenance-pruning-content">
            <p>{tree_pruning}</p>
          </div>
        </div>
      </div>

      <div class = "height">
        <div class = "height-name">
          <p>Maximum Height of Mature Tree</p>
          <div class = "height-name-sub">
            <p>(Less than 1m, 1-2m, 2-3m, Greater than 3m)</p>
          </div>
        </div>

        <div class = "height-content">
          <p>{tree_height}</p>
        </div>
      </div>

      <div class = "growth">
        <div class = "growth-name">
          <p>Growth Rate</p>
          <div class = "growth-name-sub">
            <p>(Slow/Medium/Fast)</p>
          </div>
        </div>

        <div class = "growth-content">
          <p>{tree_growth}</p>
        </div>
      </div>

      <div class = "facts">
        <div class = "facts-flowers-name">
          <p>Relevant Facts Flowers</p>
        </div>

        <div class = "facts-flowers-content">
          <p>{tree_flowers}</p>
        </div>

        <div class = "facts-berries-name">
          <p>Relevant Facts Berries</p>
        </div>

        <div class = "facts-berries-content">
          <p>{tree_berries}</p>
        </div>
      </div>
    </div>
  );

  render() {
    const { tree } = this.state;
    return <div>{tree.map(this.renderProduct)}</div>;
  }
}
