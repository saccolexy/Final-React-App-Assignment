import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h1>{title}</h1>
      {subtitle && <h3 className="text-muted">{subtitle}</h3>}
    </div>
  );
};

export default Header;
