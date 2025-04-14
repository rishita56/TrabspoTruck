import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  );
}

export default App;

