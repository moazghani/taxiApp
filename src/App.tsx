// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";  // Import Navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <NavbarComponent />  {/* Render the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
