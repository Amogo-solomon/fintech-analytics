import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importing components
import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  Analytics from './components/Analytics';
import  Newsletter  from './components/Newsletter';
import  Cards  from './components/Cards';
import  Footer  from './components/Footer';
import  Home  from './components/Home';


function App() {
  return (
    <>
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
            <Footer />
    </Router>
    </>
  );
}

export default App;

