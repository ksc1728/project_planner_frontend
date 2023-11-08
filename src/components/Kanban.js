import React from "react";
import Task from "./Task"; // Import your Task component
import Navbar from "./Navbar"; // Import your Navbar component
import Sidebar from "./Sidebar"; // Import your Sidebar component
import { Link } from 'react-router-dom';
function Kanban() {
  return (
    <div>
      <Navbar /> {/* the Navbar component */}
      <div className="flex container mx-auto">
        <Sidebar /> {/* the Sidebar component */}
        <div className="flex-1">
          <Task /> {/* the Task component here */}
          {/* Other Kanban content */}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
