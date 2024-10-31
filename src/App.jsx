// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import NavComponent from './components/NavComponent';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';

const PrivateRoute = ({ element }) => {
    const { state } = useAuth();
    return state.isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/private" element={<PrivateRoute element={<h2>This is a private page</h2>} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
