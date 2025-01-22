import React from 'react';

interface FooterItemProps {
  children: React.ReactNode;
}

const FooterItem: React.FC<FooterItemProps> = ({ children }) => {
  return <li className="nav-item">{children}</li>;
};

export default FooterItem;
