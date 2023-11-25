import React from 'react';
import { Link } from 'react-router-dom';

function AppLayout({ children }) {
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

export default AppLayout;
// git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/ksc1728/project_planner_frontend.git
//   git push -u origin main