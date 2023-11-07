import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Logout</Link>
      </nav>
      <div>
        {<div>Contact US
        </div>}
      </div>
    </div>
  );
}

export default ContactUs;