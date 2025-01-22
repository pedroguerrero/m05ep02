import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
