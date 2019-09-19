import React from 'react';

const ImageSlide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100'
  }
  
  return <div className="slide" style={styles}></div>
  }

export default ImageSlide;