'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ButtonOutline from './ButtonOutline';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslations } from 'next-intl';

interface props {
  id?: string;
  href: string;
  hrefWeb?: string;
  classNameImage?: string;
  title: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  titleProject?: string;
}

const Project: React.FC<props> = ({
  classNameImage,
  id,
  title,
  description,
  tech,
  image,
  href,
  hrefWeb,
  titleProject,
}) => {
  const t = useTranslations('Page');

  return (
    <section
      id={id ? id : ''}
      className={`h-auto sm:h-[calc(100dvh)] tall:h-auto  p-5 ${
        titleProject ? ' sm:p-10 sm:pt-4' : 'sm:p-10 '
      } sm:snap-center sm:snap-always`}
    >
      {titleProject && (
        <h2 className="text-3xl tall:text-xl font-bold text-center mb-8 sm:mb-0 tall:mb-3 ">{`<${titleProject}/>`}</h2>
      )}
      <div className="flex flex-col tall:flex-col sm:flex-row justify-center">
        <motion.div
          className="sm:w-1/2  flex justify-center items-center relative h-[50vh] w-full tall:w-full sm:h-[calc(100vh-80px)] sm:mr-7"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: false }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt=""
              fill
              quality={100}
              className={`${classNameImage} object-contain pb-7 sm:py-0`}
            />
          </div>
        </motion.div>
        <div className="w-full tall:w-full sm:w-1/2 flex flex-col justify-center tall:mt-4">
          <div className="flex flex-wrap mb-2">
            {tech.map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
              >
                <ButtonOutline className="block mb-2 mr-3">{tech}</ButtonOutline>
              </motion.div>
            ))}
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            className="text-xl sm:text-5xl  tall:text-xl font-bold mb-2"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            className="text-custom-lightGray mb-5 text-base text-justify  sm:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <div className="flex">
              <Button
                href={href}
                target="_blank"
                className="flex justify-center items-center w-40 mr-3 h-11"
              >
                <GitHubIcon className="mr-3 fill-[#FFC1A6]" />
                <p className="text-nowrap">{t('SourceCode')}</p>
              </Button>
              {hrefWeb && (
                <ButtonOutline
                  href={hrefWeb}
                  target="_blank"
                  className="flex items-center cursor-pointer pb-0.5 px-3 h-11"
                >
                  {t('Link')}
                </ButtonOutline>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
