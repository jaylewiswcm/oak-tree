import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import {motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useIsMedium } from '../../../utils/hooks';
// images 
import desktopImage from '../../../public/occupational-therapist/sam-shann-1.png'
import mobileImage from '../../../public/occupational-therapist/sam-shann-circle-2.png'
import logo from '../../../public/occupational-therapist/ukts-logo.png';

const OccupationalTherapistSection = () => {

  const isMedium = useIsMedium() 

  const [ref, inView] = useInView({rootMargin: "-270px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if(isMedium) {
      console.log('isMedium')
    }
    if (inView) {
      controls.start("visible");
      console.log('Visibile')
    }
  }, [controls, inView, isMedium]);


const easing =[.6, -.05, .01, .99]

const fadeInLeft = {
  visible: { x:0, opacity: 1, transition: { duration: .8, ease: easing } },
  hidden: {  x:-500, opacity: 0 }
};

const fadeInFromAbove1 = {
  visible: { y:0, opacity: 1, transition: { duration: 1.1, ease: easing } },
  hidden: {  y:-300, opacity: 0 }
}

const fadeInFromAbove2 = {
  visible: { y:0, opacity: 1, transition: { duration: 0.9, ease: easing } },
  hidden: {  y:-100, opacity: 0 }
}
const fadeInFromBelow = {
  visible: { y:0, opacity: 1, transition: { duration: 0.9, ease: easing } },
  hidden: {  y:100, opacity: 0 }
}

const stagger = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}


  return (
    <div className='oc-thera con-reg'>
        <motion.div  
          ref={ref}
          animate={controls}
          variants={fadeInLeft}
          initial="hidden"
          className='image-wrapper desktop-image'>
          <Image 
              src={isMedium ? desktopImage : mobileImage}
              alt='Sam Shann'
              layout='fill'
              objectFit='cover'
              objectPosition='left top'
              quality='100'
              placeholder='blur'
          />
        </motion.div>
        
        
        <div className='image-wrapper mobile-image'>
                            <Image
                                src={mobileImage}
                                alt='Sam Shann face shot'
                                layout='responsive'
                                width='250'
                                height='250'
                                quality='100' 
                                placeholder='blur'
                            />
        </div>
        <motion.div  animate={controls} initial="hidden"   variants={stagger} className='content'>
            <motion.p variants={fadeInFromAbove1} className='subheading'>Meet Samantha Shann</motion.p>
            <motion.p variants={fadeInFromAbove2} className='heading'>Our Occupational Therapist</motion.p>
          
        <motion.p variants={fadeInFromBelow} className='info'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</motion.p>
        <motion.a variants={fadeInFromBelow} href='/occupational-therapist'>Find out more</motion.a>
        </motion.div>
    </div>
  )
}

export default OccupationalTherapistSection;