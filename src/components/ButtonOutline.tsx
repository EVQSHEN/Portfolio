import React from 'react';

interface props {
  className?: string;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const ButtonOutline: React.FC<props> = ({ className, href, target, children }) => {
  return (
    <a
      href={href ? href : undefined}
      target={target ? target : ''}
      className={`border-2 border-custom-lightGray rounded-md text-center px-2 text-custom-lightGray text-nowrap hover:border-gray-300 hover:text-gray-300 ease-linear duration-300 cursor-default ${className}`}
    >
      {children}
    </a>
  );
};

export default ButtonOutline;
