import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <NavComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
