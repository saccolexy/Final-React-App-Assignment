import React from 'react';

// Define the props interface for the Header component
interface HeaderProps {
  title: string;             // Required title prop
  subtitle?: string;        // Optional subtitle prop
}

// Define a functional component named Header that accepts HeaderProps
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      {/* Render the title as a main heading */}
      <h1>{title}</h1>
      {/* Conditionally render the subtitle if it exists */}
      {subtitle && <h3 className="text-muted">{subtitle}</h3>}
    </div>
  );
};

// Export the Header component for use in other parts of the application
export default Header;
