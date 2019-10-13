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
import Shovel from './images/Shovel.png';
import Rake from './images/Rake.png';
import PottingMix from './images/PottingMix.jpg';

export default class AshTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: [],
      tree_id: this.props.match.params.treeId
    };
  }

  componentDidMount() {
    this.getTrees();
  }

  //gets all the trees from the database and stores it in the tree array
  getTrees = _ => {
    fetch("/tree/")
      .then(response => response.json())
      .then(response => this.setState({ tree: response.data[this.props.match.params.treeId] }))
      .catch(err => console.error(err));
  };

  //gets the image for each tree and tool based on the tree_id
  getImage(tree_id) {
    if (tree_id === 1) {
      return (
        <div class="img-responsive">
          <img src={AshTreePic} alt="AshTreePic" className="img-responsive" width="400" height="400" ></img>
        </div>
      );
    }
    else if (tree_id === 2) {
      return (
        <div class="img-responsive">
          <img src={OakTreePic} alt="OakTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 3) {
      return (
        <div class="img-responsive">
          <img src={AppleTreePic} alt="AppleTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 4) {
      return (
        <div class="img-responsive">
          <img src={TomatoTreePic} alt="TomatoTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 5) {
      return (
        <div class="img-responsive">
          <img src={CascadePalmTreePic} alt="CascadePalmTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 6) {
      return (
        <div class="img-responsive">
          <img src={KingPalmTreePic} alt="KingPalmTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 7) {
      return (
        <div class="img-responsive">
          <img src={KauriTreePic} alt="KauriTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 8) {
      return (
        <div class="img-responsive">
          <img src={PohutukawaTreePic} alt="PohutukawaTreePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 9) {
      return (
        <div class="img-responsive">
          <img src={Shovel} alt="ShovelPic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 10) {
      return (
        <div class="img-responsive">
          <img src={Rake} alt="RakePic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    else if (tree_id === 11) {
      return (
        <div class="img-responsive">
          <img src={PottingMix} alt="PottingMixPic" className="img-responsive" width="400" height="400"></img>
        </div>
      );
    }
    return tree_id
  }

  //displays the name, price and description for the tools (shovel, rake & potting mix) based on the tree_id
  renderTool = ({ tree_id, tree_name, tree_price, tree_description }) => (
    <div key={tree_id}>
      <div class="tree-name">
        <h1>{tree_name}</h1>
      </div>

      <br></br>
      {this.getImage(tree_id)}
      <br></br>

      <div class="header">
        <div class="header-name">
          <p>Price</p>
        </div>

        <div class="header-content">
          <p>${tree_price}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Tool Description</p>
        </div>

        <div class="header-content">
          <p>{tree_description}</p>
        </div>
      </div>
    </div>
  );

  //displays the name, type, price, conditions, maintenance, height, growth, origin and relevant facts for each tree based on the tree_id
  renderProduct = ({ tree_id, tree_name, tree_type, tree_price, tree_description, tree_condition, tree_soil, tree_sun, tree_feeding, tree_watering, tree_pruning, tree_height, tree_growth, tree_origin, tree_flowers, tree_berries, tree_uses, tree_type_info }) => (
    <div key={tree_id}>
      <div class="tree-name">
        <h1>{tree_name} Tree</h1>
      </div>

      <br></br>
      {this.getImage(tree_id)}
      <br></br>

      <div class="header">
        <div class="header-name">
          <p>Tree Category</p>
        </div>

        <div class="header-content">
          <p>{tree_type}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Price</p>
        </div>

        <div class="header-content">
          <p>${tree_price}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Conditions of Place to be Planted</p>
        </div>

        <div class="header-content">
          <p>{tree_condition}</p>
        </div>

        <div class="header-name">
          <p>Soil Drainage</p>
          <div class="header-name-sub">
            <p>(Slow/Medium/Fast/Anything)</p>
          </div>
        </div>

        <div class="header-content">
          <p>{tree_soil}</p>
        </div>

        <div class="header-name">
          <p>Sun</p>
          <div class="header-name-sub">
            <p>(Shade/Medium/Sunny/Anything)</p>
          </div>
        </div>

        <div class="header-content">
          <p>{tree_sun}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Maintenance Requirements</p>
        </div>

        <div class="header-name">
          <p>Feeding</p>
        </div>

        <div class="header-content">
          <p>{tree_feeding}</p>
        </div>

        <div class="header-name">
          <p>Watering</p>
        </div>

        <div class="header-content">
          <p>{tree_watering}</p>
        </div>

        <div class="header-name">
          <p>Pruning</p>
        </div>

        <div class="header-content">
          <p>{tree_pruning}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Maximum Height of Mature Tree</p>
          <div class="header-name-sub">
            <p>(Less than 1m, 1-2m, 2-3m, Greater than 3m)</p>
          </div>
        </div>

        <div class="header-content">
          <p>{tree_height}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Growth Rate</p>
          <div class="header-name-sub">
            <p>(Slow/Medium/Fast)</p>
          </div>
        </div>

        <div class="header-content">
          <p>{tree_growth}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Origin</p>
        </div>

        <div class="header-content">
          <p>{tree_origin}</p>
        </div>
      </div>

      <div class="header">
        <div class="header-name">
          <p>Relevant Facts</p>
        </div>

        <div class="header-name">
          <p>Flowers</p>
        </div>

        <div class="header-content">
          <p>{tree_flowers}</p>
        </div>

        <div class="header-name">
          <p>Berries</p>
        </div>

        <div class="header-content">
          <p>{tree_berries}</p>
        </div>

        <div class="header-name">
          <p>Uses</p>
        </div>

        <div class="header-content">
          <p>{tree_uses}</p>
        </div>

        <div class="header-name">
          <p>Type</p>
        </div>

        <div class="header-content">
          <p>{tree_type_info}</p>
        </div>
      </div>
    </div>
  );

  //displays the trees from tree_id 1 to 8, if the tree_id is 9 or greater we display the tools & equipment
  render() {
    const { tree } = this.state;
    if (this.state.tree_id < 9) {
      return <div>{tree.map(this.renderProduct)}</div>;
    }
    else {
      return <div>{tree.map(this.renderTool)}</div>
    }
  }
}
