import React from 'react';
import { useSwiper } from 'swiper/react';

interface ComponentProps {
    func: any
    classNames: string
}

export default function SwiperNext({func, classNames}: ComponentProps) {
  const swiper = useSwiper();


  const validateForm = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(func(e)) {
       console.log('Are errors')
    } else {
        swiper.slideNext()
    }
  }
  return (
    <button className={classNames} onClick={(e) => validateForm(e)}>Next</button>
  );
}