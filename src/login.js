import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './A-Closer-Look-at-Group-Projects-and-their-Significance-in-Management-Education-Blog-Post_01.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url('your-background-image-url.jpg')`, // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           borderRadius: '1rem',
//           padding: '20px',
//           maxWidth: '400px',
//           width: '100%',
//           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <form>
//           <div className="d-flex align-items-center mb-3 pb-1">
//             <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
//             <span className="h1 fw-bold mb-0">Logo</span>
//           </div>
//           <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', textAlign: 'center' }}>
//             Sign into your account
//           </h5>
//           <div className="form-outline mb-4">
//             <input
//               type="email"
//               id="form2Example17"
//               className="form-control form-control-lg"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <label
//               className={`form-label ${email ? 'active' : ''}`}
//               htmlFor="form2Example17"
//             >
//               Email address
//             </label>
//           </div>
//           <div className="form-outline mb-4">
//             <input
//               type="password"
//               id="form2Example27"
//               className="form-control form-control-lg"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <label
//               className={`form-label ${password ? 'active' : ''}`}
//               htmlFor="form2Example27"
//             >
//               Password
//             </label>
//           </div>
//           <div className="pt-1 mb-4">
//             <button
//               className="btn btn-dark btn-lg btn-block"
//               type="button"
//             >
//               Login
//             </button>
//           </div>
//           <a className="small text-muted" href="#!">
//             Forgot password?
//           </a>
//           <p className="mb-5 pb-lg-2" style={{ color: '#393f81', textAlign: 'center' }}>
//             Don't have an account? <a href="#!" style={{ color: '#393f81' }}>
//               Register here
//             </a>
//           </p>
//           <a href="#!" className="small text-muted">
//             Terms of use.
//           </a>
//           <a href="#!" className="small text-muted">
//             Privacy policy
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
function Login() {const handleSubmit = (e) => {
    
  // Handle form submission logic here
};
  return (
    <section className="vh" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100" >
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-10" >
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0" style={{ backgroundColor: 'skyblue',borderRadius: '1rem' }}>
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={image}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height:'100%',width:'100%' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onClick={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color:'black', fontSize:'20px',fontStyle:'' }}>
                        Sign into your account
                          <FontAwesomeIcon icon={faUser} />
                      </h4>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example17" style={{ color:''}}>
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example27" style={{ color:''}}>
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit} style={{ width:'100%',boxShadow: '0px 0px 0px 2px grey'}}>
                          Login
                        </button>
                      </div>
                      <a className="small text-muted text-decoration-none" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2 text-decoration-none" style={{ color: '#393f81', textDecoration:'none',}}>
                        Don't have an account? <a href="#!" className="text-decoration-none" style={{ color: '#393f81',textDecoration:'none', }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Terms of use. 
                      </a>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
