// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from React Bootstrap

// Define a functional component named NavBar
const NavBar: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg"> {/* Navbar with primary background and dark theme */}
      <Navbar.Brand as={Link} to="/">To-Do App</Navbar.Brand> {/* Brand name linked to the home page */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
      <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible menu for navigation links */}
        <Nav className="ml-auto"> {/* Navigation links aligned to the right */}
          <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link to home page */}
          <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link> {/* Link to tasks page */}
          <Nav.Link as={Link} to="/add-item">Add Task</Nav.Link> {/* Link to add task page */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Export the NavBar component for use in other parts of the application
export default NavBar;
