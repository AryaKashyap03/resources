import React from 'react';

const ResourceItem = ({ title, description, link }) => {
  return (
    <div className="resource-card"> {/* Added className for card styling */}
      <h3 className="resource-title">{title}</h3> {/* Title */}
      <p className="resource-description">{description}</p> {/* Description */}
      <a
        href={link}
        className="resource-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resource
      </a> {/* Link */}
    </div>
  );
};

export default ResourceItem;
