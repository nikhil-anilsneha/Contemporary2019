import React, { Component } from "react";
import Carousel from "./Carousel";
import { Login } from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlantsImage from "./images/PlantsImage.JPG";
import ToolsImage from "./images/ToolsImage.JPG";
import Plants from "./AboutPage.js";
import Tools from "./ToolsPage.js";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import { register } from "../serviceWorker";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlantsVisible: false,
      isToolsVisible: false,
      addModal: false
    };
  }

  render() {
    return (
      <div>
        <div className="plants-tools">
          <img
            src={PlantsImage}
            className="plants-tools-images"
            alt="plants icon"
            onClick={() =>
              this.setState({
                isPlantsVisible: true,
                isToolsVisible: false,
                isHomeVisible: false
              })
            }
          />
          <img
            src={ToolsImage}
            className="plants-tools-images"
            alt="tools icon"
            onClick={() =>
              this.setState({
                isToolsVisible: true,
                isPlantsVisible: false,
                isHomeVisible: false
              })
            }
          />
        </div>
        {this.state.isPlantsVisible ? <Plants /> : null}
        {this.state.isToolsVisible ? <Tools /> : null}
      </div>
    );
  }
}
