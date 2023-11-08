// import AppLayout from "./components/AppLayout";
// import Task from "./components/Task";
// import { Toaster } from "react-hot-toast";
// import { Login } from "./login";
// import Signup from './signup';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// // import Home component
// import Home from "./components/Home";
// // import About component
// import About from "./components/About";
// // import ContactUs component
// import ContactUs from "./components/ContactUs";

// function App() {
//   console.log('render app..')
//   return (
//     <AppLayout>
//       <Toaster
//         position="top-right"
//         gutter={8}
//       />
//       <Routes>
//         <Route path="/:projectId" element={<Task />} />
//         <Route path="/" element={
//           <div className="flex flex-col items-center w-full pt-10">
//             <img src="./image/welcome.svg" className="w-5/12" alt="" />
//             <h1 className="text-lg text-gray-600">Select or create new project</h1>
//           </div>
//         } />
//       </Routes>
//     </AppLayout>
//   );
// }

// export default App;
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './login';
import Signup from './signup';
import Kanban from './components/Kanban'; // Import your Kanban component
import CreateProject from './components/CreateProject';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/createproject" element={<CreateProject/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
  );
}

export default App;
