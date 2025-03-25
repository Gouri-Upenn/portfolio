import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect ,useRef} from 'react';  // Import useState and useEffect hooks
import NavigationBar from "./components/NavBar/NavigationBar.js";
import Intro from "./components/Intro/Intro.js";
import Links from "./components/Links/Links.js";
import Projects from './components/MyProjects/Projects.js';
import Resume from './components/Resume/Resume.js'; 
import Courses from './components/Courses/Courses.js';


function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Links />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> {/* Define Resume route */}
        <Route path="/courses" element={<Courses />} />
        </Routes>
    </div>
  </Router>
);
}

export default App;