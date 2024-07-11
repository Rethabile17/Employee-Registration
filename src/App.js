import React, { useState } from "react";
import './App.css';
import Add from "./components/add";
import EmployeeList from "./components/EmployeeList";

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
    setEmployee((prevEmployees) => [
      ...prevEmployees,
      {
        name,
        lastName,
        age,
        gender,
        email,
        phoneNumber,
        position,
        id
      },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployee((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div className='App'>
      <Add add={addEmployee}/>
      <EmployeeList employees={employee} onDelete={deleteEmployee} />
    </div>
  );
}

export default App;
