import React from 'react';

interface ImageItemProps {
  src?: string;
  alt?: string;
  height?: string;
  className?: string;
}

const Image: React.FC<ImageItemProps> = (props) => {
  return <img {...props} />;
};

export default Image;
