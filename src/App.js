import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";

const Shop = () => {
  return <div>This is the Shop Page!</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
