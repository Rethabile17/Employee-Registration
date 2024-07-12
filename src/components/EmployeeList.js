import React from "react";

function EmployeeList({ employees, onDelete, onEdit }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (employee) => {
    onEdit(employee);
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>gender</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Position</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <th>{employee.phoneNumber}</th>
              <td>{employee.position}</td>
              <th>{employee.id}</th>
              <td>
                <button onClick={() => handleEdit(employee)}>Update</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
