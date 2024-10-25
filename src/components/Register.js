import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }
  
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
  
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
  
    localStorage.setItem("user", JSON.stringify(user)); // Save user data to local storage
    navigate("/Login");
  };
  
  return (
    <div className="register">
      <div className="register-modal">
        <div className="register-modal-content">
          <h3 className="register-head">Sign Up </h3>

          {errorMessage && <p className="Register-error-message">{errorMessage}</p>} 

          <input type="text" name="firstName" placeholder="First Name"  value={firstName}
            onChange={(e) => setFirstName(e.target.value)}  />
          <input type="text" name="lastName" placeholder="Last Name" value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
          <input type="text" name="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}  />
          <input type="text" name="Password" placeholder="Password"   value={password}
            onChange={(e) => setPassword(e.target.value)}  />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
