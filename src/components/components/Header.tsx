import React from 'react';

interface HeaderItemProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderItemProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
