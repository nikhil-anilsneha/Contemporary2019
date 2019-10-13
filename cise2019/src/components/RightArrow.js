import React from 'react';
import Arrow from './images/right arrow.jpg';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <img src={Arrow} alt="right arrow" className="arrow" />
    </div>
  );
}

export default RightArrow;