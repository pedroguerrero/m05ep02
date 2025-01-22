import React from 'react';

interface SocialNetworkIconProps {
  icon: string;
  className: string;
}

const SocialNetworkIcon: React.FC<SocialNetworkIconProps> = ({
  icon,
  ...props
}) => {
  return (
    <li {...props}>
      <a
        className="text-body-secondary"
        target="_blank"
        href="#"
        aria-label={icon}
      >
        <i className={`bi bi-${icon}`}></i>
      </a>
    </li>
  );
};

export default SocialNetworkIcon;
