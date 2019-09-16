import React, { Component } from 'react';
import Carousel from 'react-responsive-carousel';

export default class SlideShow extends Component {
    render() {
      return (
        <div className="container">
            <Carousel showArrows={true}>
                <div>
                    <img src="./images/meandjo.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src=".images/dadandjo.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
      )
    }
  }