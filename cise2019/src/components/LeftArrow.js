import React from 'react';
import Arrow from './images/left arrow.jpg';

const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
         <img src={Arrow} alt="left arrow" className="arrow"/>
      </div>
    );
  }

export default LeftArrow;