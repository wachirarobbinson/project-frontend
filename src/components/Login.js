import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    setError('');
    setSuccess('');

    axios
      .post('http://127.0.0.1:5000/login', {
        userName,
        password,
      })
      .then((response) => {
        const accessToken = response.data.access_token;
        console.log('Login successful', accessToken);
        setSuccess('Login successful');
        if (response.status === 200) {
          setSuccess('Login successful');
          localStorage.setItem('accessToken', response.data.access_token); 
          
        } else {
          setError('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
