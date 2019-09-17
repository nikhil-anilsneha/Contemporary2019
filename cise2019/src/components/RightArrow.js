import React from 'react';

const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        {/* put html for arrow here */}
      </div>
    );
  }

export default RightArrow;