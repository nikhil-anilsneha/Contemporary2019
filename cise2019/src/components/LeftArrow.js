import React from 'react';

const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
         {/* put html for arrow here */}
         </div>
    );
  }

export default LeftArrow;