import React from "react";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:id" element={<Cuisine />} />
      </Routes>
  );
}

export default Pages;
