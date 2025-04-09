import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useCardAnimation = (index: number) => {
    const ref = useRef<HTMLAnchorElement>(null); 

    useGSAP(() => {
    if (!ref.current) return;

    const direction = index % 2 === 0 ? -100 : 100;

    gsap.fromTo(
      ref.current,
      {
        x: direction,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
      },
    );
  }, [index]);

  return ref;
};
