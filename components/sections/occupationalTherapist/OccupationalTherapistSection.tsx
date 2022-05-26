import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import {motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useIsMedium } from '../../../utils/hooks';
// images 
import desktopImage from '../../../public/occupational-therapist/sam-shann-new.jpeg'
import mobileImage from '../../../public/occupational-therapist/sam-shann-circle-2.png'
import logo from '../../../public/occupational-therapist/ukts-logo.png';
import Modal from '../../modal/Modal';
import { QuoteCarousel } from './QuoteCarousel';
import VideoCarousel from '../../modal/video/VideoCarousel';

const OccupationalTherapistSection = () => {
  const [isOpen, setOpenModal] = useState(false)
  const isMedium = useIsMedium() 

  const [ref, inView] = useInView({rootMargin: "-270px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    // if(isMedium) {
      
    // }
    if (inView) {
      controls.start("visible");
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
    <div className='occupational-therapist-wrapper'>
      {isOpen && <Modal classNames="" setShow={setOpenModal}><VideoCarousel videoId="l9adE0mWzUY" setShow={setOpenModal} show={isOpen}></VideoCarousel></Modal> }
        <h3>Occupational Therapist Approved</h3>
        <p className='oc-intro'>All of our products are approved by Samantha Shann, occupational therapist. Samantha fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
        {/* <div className='sam-shann-intro con-reg'>
          <div className='image-wrapper'>
            <div className='image'>
              <Image
                src={desktopImage}
                alt='Samantha Shann'
                layout='responsive'
                width='575.5'
                height='346.06'
                quality={100}
              />
            </div>
            <p className='greeting'>Meet Samantha Shann</p>
            <button onClick={() => setOpenModal(true)}>
              <div className="icon-wrapper">
                <Image
                  src='/buttons/play-btn-fill.svg'
                  alt='Play button'
                  width='13'
                  height='16'
                />
              </div>
              <p>Meet Samantha Shann</p>
            </button>
          </div>
          <div className='content'>
            <p className='content-h'>All of our products are approved by Samantha Shann, occupational therapist.</p>
            <p className='content-p'>Samantha fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
            <div className='partner-logo'>
              <p>In Partnership with</p>
              <div className='logo'>
                <Image
                  src={logo}
                  alt='UK Therapy services'
                  layout='responsive'
                  width='160.5'
                  height='25.83'
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className='advice-quotes'>
          <div className='sam-shann-image'>
            <div className='image'>
                <Image
                  src={desktopImage}
                  alt='Samantha Shann'
                  layout='responsive'
                  width='238'
                  height='216'
                  quality={100}
                />
              </div>
          </div>
          <h4>Advice From Samantha</h4>
            <QuoteCarousel />
            <div className='advice-pagination'></div>
        </div>

        <div className='health-benefits con-reg'>
          <h5>Health benefits outlined by our <br/>Occupational Therapist include</h5>
          <div className='benefits-grid'>
            <div className='benefit'>
              <div className='icon-wrapper'>
                <Image
                  src='/icons/health/lighter/back-pain.svg'
                  alt='Relieves Back Pain'
                  width='68'
                  height='68'
                  layout='responsive'
                />
              </div>
              <p>Relieves Back Pain</p>
              <ul>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 3' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Bath Lifts</p>
                </li>
              </ul>
            </div>
            <div className='benefit'>
              <div className='icon-wrapper'>
                <Image
                  src='/icons/health/lighter/hip-and-knees.svg'
                  alt='Support Hip & Knee'
                  width='68'
                  height='68'
                  layout='responsive'
                />
              </div>
              <p>Support Hip & Knees</p>
              <ul>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
              </ul>
            </div>
            <div className='benefit'>
              <div className='icon-wrapper'>
                <Image
                  src='/icons/health/lighter/circulation.svg'
                  alt='Improves Circulation'
                  width='68'
                  height='68'
                  layout='responsive'
                />
              </div>
              <p>Improves Circulation</p>
              <ul>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 3' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Bath Lifts</p>
                </li>
              </ul>
            </div>
            <div className='benefit'>
              <div className='icon-wrapper'>
                <Image
                  src='/icons/health/lighter/sleep.svg'
                  alt='Improves Sleep'
                  width='68'
                  height='68'
                  layout='responsive'
                />
              </div>
              <p>Improves Sleep</p>
              <ul>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/red-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
              </ul>
            </div>
          </div>
          <p className='find-more'>Plus many more, find <Link href='/occupational-therapist'><a>all the benefits here</a></Link></p>
        </div>
{/* 
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
        </motion.div> */}
    </div>
  )
}

export default OccupationalTherapistSection;