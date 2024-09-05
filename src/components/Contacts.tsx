import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface props {
  type?: string;
}

const Contacts: React.FC<props> = ({ type }) => {
  const github = 'https://github.com/EVQSHEN';
  const telegram = 'https://t.me/EVQshen';
  const email = 'evqcode@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/danil-basanets-4a162a268/';

  if (type === 'row') {
    return (
      <div className="flex">
        <a href={github} target="_blank">
          <GitHubIcon fontSize="medium" className="cursor-pointer mr-4 hover:fill-custom-gray" />
        </a>
        <a href={telegram} target="_blank">
          <TelegramIcon fontSize="medium" className="cursor-pointer mr-4 hover:fill-custom-gray" />
        </a>
        <a href={linkedin} target="_blank">
          <LinkedInIcon fontSize="medium" className="cursor-pointer hover:fill-custom-gray" />
        </a>
      </div>
    );
  }

  if (type === 'column') {
    return (
      <div className="hidden tall:hidden sm:flex w-12 mr-5 h-full justify-center flex-col z-10">
        <a href={github} target="_blank">
          <GitHubIcon className="fill-custom-lightGray cursor-pointer mb-3 hover:fill-custom-orange" />
        </a>
        <a href={`mailto:${email}`} target="_blank">
          <EmailIcon className="fill-custom-lightGray cursor-pointer mb-3 hover:fill-custom-orange" />
        </a>
        <a href={telegram} target="_blank">
          <TelegramIcon
            fontSize="medium"
            className="fill-custom-lightGray cursor-pointer mb-3 hover:fill-custom-orange"
          />
        </a>
        <a href={linkedin} target="_blank">
          <LinkedInIcon className="fill-custom-lightGray cursor-pointer hover:fill-custom-orange" />
        </a>
      </div>
    );
  }
};

export default Contacts;
