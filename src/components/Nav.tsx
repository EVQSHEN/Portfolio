'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Tooltip } from 'react-tooltip';

const Nav = () => {
  const t = useTranslations('Page');
  const scroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const icons = [
    {
      id: 'Home',
      svg: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>,
      polyline: <polyline points="9 22 9 12 15 12 15 22"></polyline>,
    },
    {
      id: 'About',
      svg: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>,
      circle: <circle cx="12" cy="7" r="4"></circle>,
    },
    {
      id: 'Projects',
      polyline: (
        <>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </>
      ),
    },
    {
      id: 'Contact',
      svg: (
        <>
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </>
      ),
    },
  ];

  return (
    <div className="hidden tall:hidden absolute bottom-5 w-screen lg:flex justify-center items-center">
      <div className="w-[280px] flex bg-custom-black/50 backdrop-blur-lg p-2 rounded-xl">
        {icons.map((icon, indx) => (
          <a
            data-tooltip-id={icon.id}
            data-tooltip-content={t(`${icon.id}`)}
            data-tooltip-place="top"
            key={icon.id}
            className={`w-16 h-16 flex justify-center items-center rounded-xl bg-custom-gray ${
              indx === 3 ? '' : 'mr-2 '
            }cursor-pointer group`}
            onClick={() => scroll(String(indx))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FE4F02"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 group-hover:stroke-white duration-200"
            >
              {icon.svg}
              {icon.polyline}
              {icon.circle}
            </svg>
            <Tooltip className="!rounded-lg !bg-custom-gray" id={icon.id} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
