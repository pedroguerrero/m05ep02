import { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Container;
