import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home"
import { Navigate } from "react-router-dom";

export default function App() {
    return ( 
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Navigate to="/"/>} />
            </Routes>
        
    );
}