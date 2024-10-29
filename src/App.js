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
       
        
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Showall/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
