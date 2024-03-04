import {React, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Home from "./Home";

function App() {

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home cat="general" />} />
        <Route path="/business" element={<Home cat="business" />} />
        <Route path="/entertainment" element={<Home cat="entertainment" />} />
        <Route path="/health" element={<Home cat="health" />} />
        <Route path="/science" element={<Home cat="science" />} />
        <Route path="/sports" element={<Home cat="sports" />} />
        <Route path="/technology" element={<Home cat="technology" />} />
      </Routes>
    </Router>
  </div>
    
  );
}

export default App;
