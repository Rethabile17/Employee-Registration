import React, { useState } from "react";

function EmployeeList({ employees, onDelete, onUpdate }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    position: "",
    id: ""
  });

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleUpdateClick = (employee) => {
    setUpdatedEmployee(employee);
    setShowUpdateModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onUpdate(updatedEmployee);
    setShowUpdateModal(false);
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.position}</td>
              <td>{employee.id}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleUpdateClick(employee)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Update Employee</h3>
            <input
              type="text"
              name="firstName"
              value={updatedEmployee.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={updatedEmployee.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <input
              type="number"
              name="age"
              value={updatedEmployee.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="gender"
              value={updatedEmployee.gender}
              onChange={handleInputChange}
              placeholder="Gender"
            />
            <input
              type="text"
              name="email"
              value={updatedEmployee.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="phoneNumber"
              value={updatedEmployee.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="position"
              value={updatedEmployee.position}
              onChange={handleInputChange}
              placeholder="Position"
            />
            <input
              type="text"
              name="id"
              value={updatedEmployee.id}
              onChange={handleInputChange}
              placeholder="ID"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowUpdateModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
