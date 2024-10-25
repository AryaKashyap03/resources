import React from 'react';

const ResourcesList = ({ resources }) => {
  return (
    <div className="resources-list"> {/* Added className here */}
      {resources.map((resource) => (
        <div key={resource.id} className="resource-card"> {/* Added className for card */}
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            View Resource
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResourcesList;

