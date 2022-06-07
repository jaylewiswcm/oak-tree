import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import {motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useIsMedium } from '../../../utils/hooks';
// images 
import desktopImage from '../../../public/occupational-therapist/sam-shann-new.png'
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
        <div className='bg-dark-green-6'>
          <div className='occ-section-flex con-reg'>
            <div className='content'>
            <div className='sam-shann-image'>
              <div className='image'>
                    <Image
                      src={desktopImage}
                      alt='Samantha Shann'
                      layout='responsive'
                      width='900'
                      height='580'
                      quality={100}
                    />
                    </div>
              </div>
            <h3>Occupational Therapist Approved</h3>
            <p className='oc-intro'>All of our products are approved by Samantha Shann, occupational therapist. Samantha fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
            <div className='partner-logo'>
              <p>In Partnership with</p>
              <div className='logo'>
                <Image 
                  src='/occupational-therapist/ukts-logo.png'
                  alt='UKTS Logo'
                  width='186'
                  height='30'
                />
              </div>
            </div>
          </div>
          
          <div className='advice-quotes'>
            <h4>Advice From Samantha</h4>
              <QuoteCarousel />
              <div className='advice-pagination'></div>
          </div>
          </div>
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
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 3' layout='responsive' width='30' height='30'/>
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
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
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
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 3' layout='responsive' width='30' height='30'/>
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
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Beds</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <p className='find-more'>Plus many more, find <Link href='/occupational-therapist'><a>all the benefits here</a></Link></p> */}
        </div>
        
        {/* <div className='health-benefits con-reg'>
          <h5>Health benefits outlined by our <br/>Occupational Therapist include</h5> 
          <h5>Oak Tree Mobility's <span>chairs</span>, <span>beds</span> and <span>bathlifts</span> can help to:</h5>
          <ul className='benefits-product-list'>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 1' layout='responsive' width='30' height='30'/>
                  </span>
                  <p>Chairs</p>
                </li>
                <li>
                  <span className='tick'>
                    <Image src='/vectors/yellow-tick.svg' alt='Tick 2' layout='responsive' width='30' height='30'/>
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
            </div>
          </div>
          <p className='find-more'>Plus many more, find <Link href='/occupational-therapist'><a>all the benefits here</a></Link></p>
        </div> */}
    </div>
  )
}

export default OccupationalTherapistSection;