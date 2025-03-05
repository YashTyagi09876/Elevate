import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./Pages/Contact.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Bootcamps from "./Pages/Bootcamps.jsx";
import Footer from "./Component/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bootcamps" element={<Bootcamps/>} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
