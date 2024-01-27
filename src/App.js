import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import Navbar from './component/Navbar'; // Import your Home component
import Project from './component/Project'; // Import your Projects component
import Service from './component/Service'; // Import your Service component
import Contact from './component/Contact';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
