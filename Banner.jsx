import React from 'react';
// Ensure to import your CSS

const Banner = () => {
  return (
    <div className="banner-container">
      <h2 className="banner-heading">Get Involved</h2>
      <p className="banner-subheading">Help us make a difference.</p>
      <div className="banner-content">
        <div className="banner-card">
          <h3 className="card-title">Card 1</h3>
          <p className="card-description">This is the description for Card 1.</p>
        </div>
        <div className="banner-card">
          <h3 className="card-title">Card 2</h3>
          <p className="card-description">This is the description for Card 2.</p>
        </div>
        <div className="banner-card">
          <h3 className="card-title">Card 3</h3>
          <p className="card-description">This is the description for Card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
