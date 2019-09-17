import React, { Component } from 'react';
/* import meandjo from "./images/meandjo.jpg"; */
import Carousel from './Carousel';
import LoginForm from './LoginForm.js';


export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
          <br></br>
          <br></br>
          <Carousel></Carousel>  
          <div className="text">
          <h1>Sign Up</h1>
          <button onClick={SignUpOnClick}>Sign Up</button>
          </div> 
      </div>
    )
  }
}

function SignUpOnClick() {

    return (
      <div className="container">
        <LoginForm></LoginForm>
      </div>
    )
  
}