import React from 'react';

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <div className="row">{children}</div>;
};

export default Row;
