import React from "react";
import Directory from "./components/Directory/Directory";

const categories = [
  {
    id: 1,
    title: "Men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
  {
    id: 2,
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 3,
    title: "Kids",
    imageUrl:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 4,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 5,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 6,
    title: "Hats & Caps",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
];

const App = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
