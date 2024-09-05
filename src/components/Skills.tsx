import React from 'react';
import Image, { StaticImageData } from 'next/image';
import API from '/public/Skills/API.png';
import Git from '/public/Skills/Git.png';
import Expo from '/public/Skills/Expo.png';
import Vite from '/public/Skills/Vite.png';
import Figma from '/public/Skills/Figma.png';
import JavaScript from '/public/Skills/JS.png';
import TypeScript from '/public/Skills/TS.png';
import NextJS from '/public/Skills/Nextjs.png';
import NestJS from '/public/Skills/Nestjs.png';
import Firebase from '/public/Skills/Firebase.png';
import Photoshop from '/public/Skills/Photoshop.png';
import Postgresql from '/public/Skills/Postgresql.png';
import Tailwind from '/public/Skills/TailwindCSS.png';
import SCSS from '/public/Skills/SCSS.png';
import ResponsiveDesign from '/public/Skills/ResponsiveDesign.png';

const Skills = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap sm:flex-nowrap">
        {dataRow1.map((el) => (
          <div
            key={el.title}
            className="lg:p-4 tall:p-2 p-2 w-fit tall:w-fit lg:w-[156px] h-18 flex items-center bg-custom-gray rounded-lg mr-4 mb-4"
          >
            <Image
              src={el.image}
              alt=""
              className={`h-8 w-8 hidden tall:hidden lg:block mr-2 ${el?.classNameImage}`}
            />
            <p className={`text-custom-lightGray text-sm" ${el?.className}`}>{el.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap sm:flex-nowrap">
        {dataRow2.map((el) => (
          <div
            key={el.title}
            className="lg:p-4 tall:p-2 p-2 w-fit tall:w-fit lg:w-[156px] h-18 flex items-center bg-custom-gray rounded-lg mr-4 mb-4"
          >
            <Image
              src={el.image}
              alt=""
              className={`h-8 w-8 hidden tall:hidden lg:block mr-2 ${el?.classNameImage}`}
            />
            <p className={`text-custom-lightGray text-sm" ${el?.className}`}>{el.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap sm:flex-nowrap">
        {dataRow3.map((el) => (
          <div
            key={el.title}
            className="lg:p-4 tall:p-2 p-2 w-fit tall:w-fit lg:w-[156px] h-18 flex items-center bg-custom-gray rounded-lg mr-4 mb-4"
          >
            <Image
              src={el.image}
              alt=""
              className={`h-8 w-8 hidden tall:hidden lg:block mr-2 ${el?.classNameImage}`}
            />
            <p className={`text-custom-lightGray text-sm" ${el?.className}`}>{el.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

type dataRowType = {
  image: StaticImageData;
  title: string;
  className?: string;
  classNameImage?: string;
}[];

const dataRow1: dataRowType = [
  {
    image: JavaScript,
    title: 'JavaScript',
  },
  {
    image: TypeScript,
    title: 'TypeScript',
  },
  {
    image: Vite,
    title: 'Vite',
  },
  {
    image: NextJS,
    title: 'NextJS',
  },
  {
    image: Expo,
    title: 'Expo',
  },
];

const dataRow2: dataRowType = [
  {
    image: NestJS,
    title: 'NestJS',
  },
  {
    image: API,
    title: 'REST API',
  },
  {
    image: Postgresql,
    title: 'Postgresql',
  },
  {
    image: Firebase,
    title: 'Firebase',
  },
  {
    image: Git,
    title: 'Git',
  },
];

const dataRow3: dataRowType = [
  {
    image: SCSS,
    title: 'SCSS',
  },
  {
    image: Tailwind,
    title: 'UI Libraries',
    className: '!text-sm',
    classNameImage: '!w-7 !h-7',
  },
  {
    image: ResponsiveDesign,
    title: 'Responsive Design',
    className: '!text-sm',
    classNameImage: '!w-7 !h-7',
  },
  {
    image: Figma,
    title: 'Figma',
  },
  {
    image: Photoshop,
    title: 'Photoshop',
  },
];
