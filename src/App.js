import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import NavTabs from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavTabs />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
