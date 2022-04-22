import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
// images 
import desktopImage from '../../../public/occupational-therapist/sam-shann-1.png'
import mobileImage from '../../../public/occupational-therapist/sam-shann-circle-2.png'
import logo from '../../../public/occupational-therapist/ukts-logo.png';

const OccupationalTherapistSection = () => {
  return (
//     <div className='occupational-therapist-wrapper con-reg hide'>
//     <div className='image-wrapper desktop-image'>
//       <Image
//         src={desktopImage}
//         alt='Sam Shann'
//         layout='fill'
//         objectFit='cover'
//         objectPosition='left top'
//         quality='100'
//         placeholder='blur'
//       />
//     </div>
//     <div className='image-wrapper mobile-image'>
//                             <Image
//                                 src='/occupational-therapist/sam-shann-circle-2.png'
//                                 alt='Sam Shann face shot'
//                                 layout='responsive'
//                                 width='250'
//                                 height='250'
//                                 quality='100' 
//                             />
//     </div>
//     <div className='content'>
//       <p className='subheading'>Meet Samantha Shann</p>
//       <p className='heading'>Our Occupational Therapist</p>
//       <p className='info'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
//       <div className='bottom'>
//         <p>In Partnership with</p>
//         <Image 
//           src={logo}
//           alt='UK Therapy Services'
//           width='264'
//           height='42'
//           quality='100'
//           placeholder='blur'
//         />
//       </div>
//     </div>
//   </div>
    <div className='oc-thera con-reg'>
        <div className='image-wrapper desktop-image'>
        <Image 
            src={desktopImage}
            alt='Sam Shann'
            layout='fill'
            objectFit='cover'
            objectPosition='left top'
            quality='100'
            placeholder='blur'
        />
        </div>
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
        <div className='content'>
        <p className='subheading'>Meet Samantha Shann</p>
        <p className='heading'>Our Occupational Therapist</p>
        <p className='info'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
        <Link href='/occupational-therapist'><a>Find out more</a></Link>
        </div>
    </div>
  )
}

export default OccupationalTherapistSection;