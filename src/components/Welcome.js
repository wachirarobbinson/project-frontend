import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
    <div>
        <span className="GRABZZZ">
            Welcome to <span class="text-style-1">G</span>RABZZZ
         </span>

      <div className="button-container">
        <Link to="/login">
          <button className="welcome-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="welcome-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
