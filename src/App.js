
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
        {/* <Route path='/portfolio' element={Portfolio} />
        <Route path='/contact-me' element={Contact-Me} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
