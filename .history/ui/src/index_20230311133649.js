
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import Landing from "./pages/Landing";

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);