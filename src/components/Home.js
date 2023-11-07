import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import welcomeImage from '../4Types.png';

function Home() {
  return (
    <div className="flex flex-col items-center w-full pt-10">
      <img src={welcomeImage} className="w-5/12" alt="" />
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Home;
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ksc1728/test7.git
// git push -u origin main