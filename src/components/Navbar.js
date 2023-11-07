// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-white shadow h-14'></div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import image from '../A-Closer-Look-at-Group-Projects-and-their-Significance-in-Management-Education-Blog-Post_01.jpg';

const Navbar = () => {
  return (
    <div className='bg-white shadow h-14 flex justify-between items-center px-4' style={{ backgroundColor: 'rgb(247, 218, 52)' }}>
      <div className='flex items-center'>
        {/* Clickable Logo */}
        <Link to='/'> {/* Use Link for the logo */}
          <img src={image} alt='Logo' className='h-8 w-8 mr-2 cursor-pointer' />
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link to="/" style={{ color: 'rgb(102, 14, 9)' }}>Home</Link>
        <Link to="/ContactUs" style={{ color: 'rgb(102, 14, 9)' }}>Contact Us</Link>
        <Link to="/About" style={{ color: 'rgb(102, 14, 9)' }}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;
