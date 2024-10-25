import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = () => {
    if (!email || !password) {
      setErrorMessage("All fields are required");
      return;
    }
  
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
  
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser) {
      // Check if the entered email and password match the stored credentials
      if (storedUser.email === email && storedUser.password === password) {
        // Successful login
        navigate("/");
      } else {
        // Display error message if credentials don't match
        setErrorMessage("Invalid email or password");
      }
    } else {
      // Display error if no user is found in local storage
      setErrorMessage("User not found. Please register first.");
    }
  };
  

  return (
    <div className="Login">
      <div className="Login-modal">
        <div className="Login-modal-content">
          <h3 className="Login-head">Login</h3>
          {errorMessage && <p className="Login-error-message">{errorMessage}</p>} 
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button onClick={handleSubmit}>Submit</button> 
        </div>
      </div>
    </div>
  );
}

export default Login;
