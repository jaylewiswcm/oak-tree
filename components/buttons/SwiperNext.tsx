import React from 'react';
import { useSwiper } from 'swiper/react';

interface ComponentProps {
    validation: any
    classNames: string
}

export default function SwiperNext({validation, classNames}: ComponentProps) {
  const swiper = useSwiper();
  
  const validate = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  
    if(validation() === true) {
      swiper.slideNext()
    } else {
      return false
    }
  }
  return (
    <button className={classNames} onClick={(e) => validate(e)}>Next</button>
  );
}