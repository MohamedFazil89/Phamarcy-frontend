import React, { useState } from 'react';
import './Auth.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigation = useNavigate()
  const [isRegister, setIsRegister] = useState(true); // Switch between Register and Login
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state


  // Register user API call
  const PostDate = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/Register", {
        email: email,
        password: password,
      });
      alert("User registration successful");
      console.log(response);
      Navigation("/Home")
    } catch (err) {
      setErrorMessage('Registration failed: ' + err.message);
      console.log(err);
    }
  };

  // Login user API call
  const CheckData = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/Login", {
        email: email,
        password: password,
      });
     if(response.status === 200){
      alert("User login successful");
      Navigation("/Home")

     }
      console.log(response.data);
    } catch (err) {
      setErrorMessage('Login failed: ' + err.message);
      console.log(err);
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Call the PostDate function to register the user
    PostDate(email, password);
  };

  // Handle login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Call the CheckData function to login the user
    CheckData(email, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="email" className="input-label">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="submit-button">{isRegister ? "Register" : "Login"}</button>
        <a href='#' onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Login" : "Register"}</a>
      </form>
    </div>
  );
};

export default Login;
