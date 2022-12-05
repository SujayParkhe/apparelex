import React from "react";
import "./categories.styles.scss";

const categories = [
  {
    id: 1,
    title: "Men",
  },
  {
    id: 2,
    title: "Women",
  },
  {
    id: 3,
    title: "Kids",
  },
  {
    id: 4,
    title: "Sneakers",
  },
  {
    id: 5,
    title: "Jackets",
  },
  {
    id: 6,
    title: "Hats & Caps",
  },
];

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
