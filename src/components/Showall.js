// Showall.js
import React, { useState, useEffect } from "react";
import Add from "../components/add";
import EmployeeList from "./EmployeeList";
import SearchFunction from "./SearchFunction";

const Showall = () => {
  const [view, setView] = useState("Employee Form");
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load employees from local storage when the component mounts
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save employees to local storage whenever the employees array changes
  const saveEmployeesToLocalStorage = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const addEmployee = (firstName, lastName, age, gender, email, phoneNumber, position, id) => {
    const newEmployee = { firstName, lastName, age, gender, email, phoneNumber, position, id };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    if (updatedEmployees.length === employees.length) {
      console.log("No employee found with the provided ID:", id);
    }
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.id.includes(searchTerm)
  );

  return (
    <div className="App">

      <div style={{display:"flex"}}>
        <div>
        <button
        className={`employee-form ${view === "Employee Form" ? "active" : ""}`}
        onClick={() => setView("Employee Form")}
      >
        Registration Form
      </button>
        </div>

        <div>
        <button
        className={`employee-list ${view === "Employee List" ? "active" : ""}`}
        onClick={() => setView("Employee List")}
      >
        Employee List
      </button>
        </div>

      </div>
      
     
      
      {view === "Employee Form" && <Add add={addEmployee} />}
      {view === "Employee List" && (
        <>
          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onUpdate={updateEmployee}
          />
          <SearchFunction onSearch={handleSearch} />
        </>
      )}
    </div>
  );
};

export default Showall;
