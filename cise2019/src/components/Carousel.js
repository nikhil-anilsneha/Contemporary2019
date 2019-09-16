import React, { Component } from 'react';
import ImageSlide from './ImageSlide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';
import Tomatoes from './images/Tomatoes.JPG';

export default class HomePage extends Component {
constructor(props) {
  super(props)

  this.state = {
    images: [
      Tomatoes,
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
  }
}

goToPrevSlide = () => {
  if(this.state.currentIndex === 0)
    return;
  
  this.setState(prevState => ({
    currentIndex: prevState.currentIndex - 1,
    translateValue: prevState.translateValue + this.slideWidth()
  }))
}

goToNextSlide = () => {
  // Exiting the method early if we are at the end of the images array.
  // We also want to reset currentIndex and translateValue, so we return
  // to the first image in the array.
  if(this.state.currentIndex === this.state.images.length - 1) {
    return this.setState({
      currentIndex: 0,
      translateValue: 0
    })
  }
  
  // This will not run if we met the if condition above
  this.setState(prevState => ({
    currentIndex: prevState.currentIndex + 1,
    translateValue: prevState.translateValue + -(this.slideWidth())
  }));
}

slideWidth = () => {
   return document.querySelector('.slide').clientWidth
}

render() {
  return (
    <div className="slider">

      <div className="slider-wrapper"
        style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {
            this.state.images.map((image, i) => (
              <ImageSlide key={i} image={image} />
            ))
          }
      </div>

      <LeftArrow
       goToPrevSlide={this.goToPrevSlide}
      />

      <RightArrow
       goToNextSlide={this.goToNextSlide}
      />
    </div>
  );
}
}