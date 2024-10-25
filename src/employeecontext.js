import React, { createContext, useState, useEffect } from "react";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Retrieve from local storage on initial load
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.id.includes(searchTerm)
  );

  return (
    <EmployeeContext.Provider
      value={{
        employees: filteredEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        handleSearch,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;
