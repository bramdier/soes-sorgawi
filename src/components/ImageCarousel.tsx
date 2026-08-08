import React from 'react';
import { CAROUSEL_IMAGES } from '../data/soesData';

export const ImageCarousel: React.FC = () => {
  return (
    <div
      className="w-full overflow-hidden pb-12 md:pb-16 group/carousel"
      role="region"
      aria-label="Soes Surgawi product gallery"
    >
      <div className="flex w-max gap-4 md:gap-5 animate-carousel group-hover/carousel:[animation-play-state:paused] group-focus-within/carousel:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:px-5 md:motion-reduce:px-16">
        <ul className="flex shrink-0 gap-4 md:gap-5 list-none m-0 p-0">
          {CAROUSEL_IMAGES.map((image) => (
            <li key={image.src} className="shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="h-44 w-60 sm:h-52 sm:w-72 md:h-64 md:w-80 object-cover rounded-2xl"
                width={320}
                height={256}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <ul
          className="flex shrink-0 gap-4 md:gap-5 list-none m-0 p-0 motion-reduce:hidden"
          aria-hidden="true"
        >
          {CAROUSEL_IMAGES.map((image) => (
            <li key={`dup-${image.src}`} className="shrink-0">
              <img
                src={image.src}
                alt=""
                className="h-44 w-60 sm:h-52 sm:w-72 md:h-64 md:w-80 object-cover rounded-2xl"
                width={320}
                height={256}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
