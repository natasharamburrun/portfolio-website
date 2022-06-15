
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Index from './components/Index';
import Manage from './components/Manage';
import Bookmark from './components/Bookmark';
import Insure from './components/Insure';
import Flyo from './components/Flyo';

import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/portfolio' element={<Index />} />
        <Route path='/manage' element={<Manage />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/insure' element={<Insure />} />
        <Route path='/flyo' element={<Flyo />} />
        {/* <Route path='/contact-me' element={Contact-Me} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
