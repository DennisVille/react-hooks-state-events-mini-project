import React from "react";

function CategoryFilter({categories, selectedCategory, onClickHandler}) {
  const categoriesList = categories.map((category) =>
    (<button className = {selectedCategory == category ? "selected" : ""} key={category} onClick = {() => onClickHandler(category)}>{category}</button>)
    );
  console.log(categoriesList);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesList}
    </div>
  );
}

export default CategoryFilter;
