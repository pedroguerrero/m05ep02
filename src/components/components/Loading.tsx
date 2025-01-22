import React from 'react';
import Container from './Container';

interface LoadingProps {
  text?: string;
  size: string;
}

const Loading: React.FC<LoadingProps> = ({ text, size }) => {
  return (
    <Container className="text-center">
      <Container
        className="spinner-border text-primary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">{text}</span>
      </Container>
    </Container>
  );
};

export default Loading;
