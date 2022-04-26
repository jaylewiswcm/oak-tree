import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useIsMedium } from '../../utils/hooks';
// Components
import chairs from '../../data/products/chairs.json';
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import CollectionBrochureRequestForm from '../../components/forms/brochure/SwiperBrochureRequestForm';
import { CollectionUsps } from '../../components/sections/usps/CollectionUsps';
import OurProcess from '../../components/sections/process/OurProcess';
import Modal from '../../components/modal/Modal';
import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';
// images 
import heroImage from '../../public/images/heros/chair-collection-hero.png'
const Index = () => {
    const [show, setFormToShow] = useState(false)
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
                    
                    {/* <button className='main-cta brochure-request-btn' onClick={() => setFormToShow(true)}>
                        <p>Request a Brochure</p>
                    </button>
                    {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
                    <Link href='#collection-top-chair'>
                        <a className='main-cta cta-link'>
                            <p>Explore our Chairs</p>
                        </a>
                    </Link> */}
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
      <div className='brochure-image'>
        <Image 
          src='/images/landing-pages/brochure.jpeg'
          alt='Brochure'
          layout='responsive'
          width={218}
          height={130}
        />
      </div>
    </div>
                   <CollectionBrochureRequestForm productType='chair'/>
                </div>
              </div>    
              <p className='sub-heading' id='collection-top-chair'>Rise and Recline Chairs</p>  
              <h2 className='heading' >A Chair That is Truly Yours</h2>
              <div className='collections-grid con-reg'>
                  {chairs.map((product, index) => 
                  <Link href={product!.url} key={index}>
                    <a className='collection-item'>
                        <div className='image-wrapper'>
                            <Image 
                                src={product!.collectionImage}
                                alt={product!.name + 'Collections'}
                                layout='responsive'
                                width={1000}
                                height={671}
                                quality={100}
                            />
                        </div>
                        <div className='col-name-wrapper'>
                            <div className='name-wrapper'>
                                <p className='subheading'>{product!.subheading}</p>
                                <h2>{product!.name}</h2>
                            </div>
                            <span className='icon-wrapper'>
                                <Image src={product.icon} alt={product.name} layout='responsive' width={40} height={40}/>
                            </span>
                        </div>
               
                        <p className='desc'>{product!.desc}</p>
                       <div className='main-cta'><p>View Collection</p></div>
                    </a>
                    </Link>
                    )}
              </div>
                <CollectionUsps />
                <Reviews orphan={false}/>
                <OurProcess />
                <Resources pageType='chairs' />
          </div>
          <FooterCollections />
        </motion.div>
    )
}

export default Index;
