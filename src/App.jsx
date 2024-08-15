import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx"; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
