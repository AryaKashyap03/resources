import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar"> {/* Added className here */}
      <input
        type="text"
        placeholder="Search for resources..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

