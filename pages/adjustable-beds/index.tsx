import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image';
import Link from 'next/link';
// Components
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import { CollectionUsps } from '../../components/sections/usps/CollectionUsps';
import OurProcess from '../../components/sections/process/OurProcess';
import CollectionForm from '../../components/forms/brochure/CollectionForm';
import { CollectionGrid } from '../../components/collection/CollectionGrid';
// data 
import beds from '../../data/products/beds.json';
// images 
import heroImage from '../../public/images/heros/bed-collection-hero.png';

const Index = () => {
    const [show, setFormToShow] = useState(false)
    return (
        <>
            <NextSeo  
                title="Adjustable Beds | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
          <div className='product-collections'>
              <div className='hero-split con-reg'>
                  <div className='hero-left'>
                <div className='hero-image'>
                    <Image 
                        src={heroImage}
                        alt='Our Adjustable Beds'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}
                        placeholder='blur'
                        priority
                    />
                </div>
                <div className="hero-intro">
                <div className="intro-border"></div>
                    <p className='subheading'>Oak Tree</p>
                    <h1>Adjustable Beds</h1>
                    <p className='intro-statement'>Transform Your Life with an Oak Tree Mobility Bed</p>
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
                   <CollectionForm productType='bed'/>
                </div>
              </div>   
              
              <h2 className='heading' >The Perfect Nights Sleep</h2>
              <p className='sub-heading' id='collection-top-chair'>Our Beds are fully customisable and made-to-fit your measurements - we have curated a collection of beds that embed different styles suited for different living environments</p>  
              <CollectionGrid products={beds}/>  
              <OurProcess />    
              <Reviews orphan={false}/>      
              <CollectionUsps />
              <Resources pageType='beds'/>
          </div>
          <FooterCollections />
        </>
    )
}

export default Index;
