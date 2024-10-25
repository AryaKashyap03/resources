import React from 'react';

const Categories = ({ setCategory }) => {
  const categories = ['All', 'Anxiety', 'Depression', 'Self-care'];

  return (
    <div className="categories"> {/* Added className here */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
