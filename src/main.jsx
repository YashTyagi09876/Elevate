import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./Pages/Contact.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Bootcamps from "./Pages/Bootcamps.jsx";
import Footer from "./Component/Footer.jsx";
import MasterClass from "./Pages/MasterClass.jsx";
import Ourmentors from './Pages/Ourmentors.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bootcamps" element={<Bootcamps/>} />
       <Route path="/masterclass"element={<MasterClass/>}/>
       <Route path="/ourmentors" element={<Ourmentors/>}/>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
