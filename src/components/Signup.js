import React, { useState } from 'react'; // Import useState
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom'; // Import Link

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    setError(''); // Clear any previous error messages

    if (!userName || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    axios
      .post('http://127.0.0.1:5000/signup', {
        userName,
        email,
        password,
      })
      .then((response) => {
        console.log('Signup successful');

      })
      .catch((error) => {
        console.error('Signup error:', error);
        setError('Signup failed. Please try again.');
      });
  };

  return (
    <div className="container">
      <h2>Signup</h2>
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
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button className="signup-button" onClick={handleSignup}>
        Signup
      </button>
      <p>
        Already have an account?{' '}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
