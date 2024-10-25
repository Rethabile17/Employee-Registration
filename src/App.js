import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Showall from "./components/Showall";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Showall/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
