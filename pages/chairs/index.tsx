import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
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

const Index = () => {
    const [show, setFormToShow] = useState(false)
    return (
        <>
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
          <div className='product-collections'>
              <div className='hero-split con-reg'>
                  <div className='hero-left'>
                <div className='hero-image'>
                    <Image 
                        src='/images/heros/chair-collection-hero.png'
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                    />
                </div>
                <div className="hero-intro">
                    <p className='subheading'>Oak Tree</p>
                    <h1>Rise and Recline Chairs</h1>
                    <p className='intro-statement'>Transform Your Life with an Oak Tree Mobility Chair</p>
                    <button className='main-cta brochure-request-btn' onClick={() => setFormToShow(true)}>
                        <p>Request a Brochure</p>
                    </button>
                    {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
                    <Link href='#collection-top-chair'>
                        <a className='main-cta cta-link'>
                            <p>Explore our Chairs</p>
                        </a>
                    </Link>
                </div>
                </div>
                <div className='hero-form'>
                    <div className='form-top'>
                        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
                        <p>Get our new brochure delivered to your door!</p>
                    </div>
                   <CollectionBrochureRequestForm productType='chair'/>
                </div>
              </div>    
              <h2 className='heading' id='collection-top-chair'>A Chair That is Truly Yours</h2>
              <div className='collections-grid con-reg'>
                  {chairs.map((product, index) => 
                  <Link href={product!.url} key={index}>
                    <a className='collection-item'>
                        <div className='image-wrapper'>
                            <Image 
                                src={product!.collectionImage}
                                alt={product!.name + 'Collections'}
                                layout='responsive'
                                width={580}
                                height={325.07}
                            />
                        </div>
                        <p className='subheading'>{product!.subheading}</p>
                        <h2>{product!.name}</h2>
                        <p className='desc'>{product!.desc}</p>
                       <div className='main-cta'><p>View Chair</p></div>
                    </a>
                    </Link>
                    )}
              </div>
              <Reviews orphan={false}/>
                <CollectionUsps />
                <OurProcess />
                <Resources />
          </div>
          <FooterCollections />
        </>
    )
}

export default Index;
