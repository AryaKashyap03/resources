import React from 'react';
import img1 from '../assets/images/youmatter.jpg'; // Replace with your image paths
import img2 from '../assets/images/selfcare.png';
import img3 from '../assets/images/motherkid.jpg';

const ImageGrid = () => {
  return (
    <div>
      <img src={img1} alt="Image 1" className="grid-image img1" />
      <img src={img2} alt="Image 2" className="grid-image img2" />
      <img src={img3} alt="Image 3" className="grid-image img3" />
    </div>
  );
};

export default ImageGrid;