import React from "react";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import './App.css';  // Importing custom CSS for theming
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/About";
import ProjectsPage from "./components/pages/Projects";
import ContactPage from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router


const App = () => {
  return (
    <Router>
    {/* <NavBar/>
    <Footer/> */}
    <NavBar /> {/* Your navigation bar */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
