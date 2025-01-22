import React from 'react';

interface NavBarProps {
  children: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">{children}</nav>
  );
};

export default NavBar;
