import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-4">
      <p>&copy; {new Date().getFullYear()} Lex's To-Do App. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;