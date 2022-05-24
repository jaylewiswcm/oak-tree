import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useIsMedium } from '../../utils/hooks';
// Components
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import CollectionBrochureRequestForm from '../../components/forms/brochure/SwiperBrochureRequestForm';
import { CollectionUsps } from '../../components/sections/usps/CollectionUsps';
import OurProcess from '../../components/sections/process/OurProcess';
import Modal from '../../components/modal/Modal';
import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';
import { CollectionGrid } from '../../components/collection/CollectionGrid';
// images 
import heroImage from '../../public/images/heros/chair-collection-hero.png'
// data
import chairs from '../../data/products/chairs.json';

const Index = () => {
    const [show, setFormToShow] = useState(false);
    const isMedium = useIsMedium()
    return (
        <motion.div exit={{opacity:0}} >
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
          <div className='product-collections'>
              <div className='hero-split con-reg'>
                  <div className='hero-left'>
                <div className='hero-image'>
                    <Image 
                        src={heroImage}
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition={isMedium ? '-150px' : 'center 0'}
                        quality={100}
                        placeholder='blur'
                        priority
                    />
                </div>
                <div className="hero-intro">
                <div className="intro-border"></div>
                    <p className='subheading'>Oak Tree</p>
                    <h1>Rise and Recline Chairs</h1>
                    <p className='intro-statement'>Transform Your Life with an Oak Tree Mobility Chair</p>
                </div>
                </div> 
                <div className='hero-form'>
                    <div className='form-top'>
                        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
                        <p>Get our new brochure delivered to your door!</p>
                    </div>
                    <div className='brochure-form-usps'>
      <ul>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>See our full collections</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Brand new products</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Useful help & advice</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Completely FREE!</p>
        </li>
      </ul>
      <div className="brochure-section">
        <div className='brochure-image'>
          <Image 
            src='/brochures/chair-brochure.png'
            alt='Brochure'
            layout='responsive'
            width={1000}
            height={1412}
          />
        </div>
        <div className='brochure-open'>
        <Image 
            src='/brochures/chair-brochure-open.png'
            alt='Brochure'
            layout='responsive'
            width={1000}
            height={708}
          />
        </div>
      </div>
    </div>
                   <CollectionBrochureRequestForm productType='chair'/>
                </div>
              </div>    
              {/* <p className='sub-heading' id='collection-top-chair'>Rise and Recline Chairs</p>   */}
              <h2 className='heading' >A Chair That is Truly Yours</h2>
              <p className='sub-heading'>Our Chairs are fully customisable and made-to-fit your measurements - we have curated a collection of chairs that embed different styles suited for different living environments</p>
                <CollectionGrid products={chairs}/>
                <OurProcess />
             
                <Reviews orphan={false}/>
                <CollectionUsps />
                <Resources pageType='chairs' />
          </div>
          <FooterCollections />
        </motion.div>
    )
}

export default Index;
