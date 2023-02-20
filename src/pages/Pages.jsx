import React from "react";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:id" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched/>}/>
      </Routes>
  );
}

export default Pages;
