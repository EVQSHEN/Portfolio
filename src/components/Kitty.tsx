'use client';
import { useState } from 'react';
import Image from 'next/image';
import KittyGif from '/public/Kitty.gif';
import KittyLoveGif from '/public/KittyLove.gif';

const Kitty = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);

    setTimeout(() => {
      setIsAnimated(false);
    }, 810);
  };
  return (
    <>
      <Image
        src={KittyGif}
        priority
        onClick={handleClick}
        alt="KittyGIF"
        className={`absolute w-14 h-14 top-1 right-7 ${
          isAnimated ? 'hidden' : 'block cursor-pointer'
        }`}
      />
      <Image
        src={KittyLoveGif}
        priority
        onClick={handleClick}
        alt="KittyGIF"
        className={`absolute w-14 h-14 top-1 right-7 ${isAnimated ? 'block' : 'hidden'}`}
      />
    </>
  );
};

export default Kitty;
