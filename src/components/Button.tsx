import React from 'react';

interface props {
  className?: string;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const Button: React.FC<props> = ({ className, href, target, children }) => {
  return (
    <a
      href={href ? href : undefined}
      target={target ? target : ''}
      className={`bg-custom-orange w-28 rounded-md text-center p-2 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
