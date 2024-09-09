import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar/index"; // Update to import Navbar
import Experience from "./Components/Experience";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Education from "./Components/Education";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./MediaQuery/index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> {/* Replace Sidebar with Navbar */}
        <div style={{ marginTop: "80px", padding: "20px" }}>
          {" "}
          {/* Add marginTop to avoid content overlap */}
          <Routes>
            <Route path="/" element={<Experience />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
