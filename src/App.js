import react from 'react'; 
import React, { useState } from "react";
import './App.css';
import Add from "./components/add";




function App() {
  const [employee, setEmployee] = useState([]);

  const addEmployee = (
    name,
    lastName,
    age,
    gender,
    email,
    phoneNumber,
    position,
    id
  ) => {
    setEmployee((prevEmployee) => [
      ...prevEmployee, { 
        name,
    lastName,
    age,
    gender,
    email,
    phoneNumber,
    position,
    id
      }
    }
  }
  return (
    <div className='App'>
     <Add/>
    </div>
  );
}
  

export default App;
