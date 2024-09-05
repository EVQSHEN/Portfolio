import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Button from '@/components/Button';
import Contacts from '@/components/Contacts';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import FaceID from '/public/FaceID.gif';
import Avatar from '/public/Avatar.png';
import Cat_GIF from '/public/Kitty-love.gif';
import HRM_IMG from '/public/Projects/HRM.png';
import ToDoS_IMG from '/public/Projects/TodoS.png';
import Spotify_IMG from '/public/Projects/Spotify.png';
import WeatherAPP_IMG from '/public/Projects/WeatherAPP.png';

export default function Page() {
  const t = useTranslations('Page');
  const resume =
    'https://drive.google.com/file/d/1dI_iKcFCVUJNEHZKl9xGb8uwN1hVujMM/view?usp=sharing';
  const resumeUA =
    'https://drive.google.com/file/d/1RRJ6m6f6LuuqLVg-6KWWTytTjVG47dDk/view?usp=sharing';
  const projects = [
    {
      id: '2',
      titleProject: t('Projects'),
      tech: ['React Expo', 'Tailwind', 'TypeScript', 'OpenWeatherMap API', 'PostgreSQL'],
      image: WeatherAPP_IMG,
      classNameImage: 'rounded-lg',
      title: 'Weather App',
      description: t('WeatherApp'),
      href: 'https://github.com/EVQSHEN/Weather-IOS',
    },
    {
      tech: ['NextJS', 'Tailwind', 'TypeScript', 'NestJS', 'PostgreSQL'],
      image: ToDoS_IMG,
      title: 'ToDoS',
      description: t('TodoApp'),
      href: 'https://github.com/EVQSHEN/ToDoS',
      hrefWeb: 'https://todo-app-rho-nine-83.vercel.app',
    },
    {
      tech: ['ViteJS', 'Tailwind', 'TypeScript', 'Spotify API'],
      image: Spotify_IMG,
      title: 'Spotify clone',
      description: t('SpotifyApp'),
      href: 'https://github.com/EVQSHEN/Melon-SpotifyClone',
      hrefWeb: 'https://spotify-2-8cg4.vercel.app/',
    },
    {
      tech: ['JavaScript', 'Firebase', 'SCSS'],
      image: HRM_IMG,
      title: 'Human Resource Management System',
      description: t('HRMApp'),
      href: 'https://github.com/EVQSHEN/HRM',
      hrefWeb: 'https://danil-86157.web.app/authentication.html',
    },
  ];

  return (
    <>
      <section id="0" className="h-screen sm:min-h-[calc(100vh-12px)] w-full">
        <Image className="m-auto pt-2" priority src={FaceID} alt="FaceID" width={50} height={50} />
        <div className="flex justify-center items-center w-full h-[calc(100vh-20vh)] ">
          <div className="bg-custom-gray w-4/5 h-4/5 sm:h-2/4 min-h-[233px] rounded-xl flex flex-col sm:flex-row items-center relative ">
            <Image
              alt="Avatar"
              src={Avatar}
              priority
              className="sm:h-full object-contain sm:mr-4 sm:w-1/2 w-2/3 h-2/3 pl-5 pt-5"
              sizes="(max-width: 640px) 66vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="w-full h-full flex flex-col justify-center px-7 sm:px-0 z-10">
              <h1 className="text-2xl lg:text-5xl font-bold mb-2 text-white">{t('Hey')}</h1>
              <p className="text-custom-lightGray mb-3">{t('JobTitle')}</p>
              <Button target="_blank" href={resumeUA}>
                {t('Resume')}
              </Button>
            </div>
            <Contacts type="column" />
            <div className="w-full h-full bg-gradient-to-t from-custom-black/80 via-gray-50/0 to-gray-200/0 absolute"></div>
          </div>
        </div>
      </section>
      <section id="1" className="tall:h-ful mx-3 sm:h-screen sm:mx-10 sm:snap-center">
        <h2 className="text-3xl tall:text-xl pt-4 font-bold mb-5 text-center">{`<${t(
          'About',
        )}/>`}</h2>
        <p className="text-justify mb-3">{t('AboutMe1')}</p>
        <p className="text-justify mb-3">{t('AboutMe2')}</p>
        <p className="text-justify mb-5">{t('AboutMe3')}</p>
        <Skills />
      </section>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
      <section
        id="3"
        className="flex h-[300px] sm:h-[380px] flex-1 flex-col justify-end relative bg-custom-black"
      >
        <div className="h-60 sm:h-80 bg-custom-orange w-full flex flex-col items-center ">
          <Image
            src={Cat_GIF}
            unoptimized
            alt="Cat_GIF"
            className="absolute w-14 h-14 top-1 right-7"
          />
          <h2 className="text-3xl pt-10 font-bold mb-10 text-center">{`<${t('Contacts')}/>`}</h2>
          <div className="text-xl mb-5">evqcode@gmail.com</div>
          <Contacts type="row" />
        </div>
      </section>
    </>
  );
}
