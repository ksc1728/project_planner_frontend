import React from 'react';
import { Link } from 'react-router-dom';

function TeamIdeation({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Logout</Link>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
}

export default TeamIdeation;
