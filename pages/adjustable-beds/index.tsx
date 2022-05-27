import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image';
import Link from 'next/link';
// Components
import beds from '../../data/products/beds.json';
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import { CollectionUsps } from '../../components/sections/usps/CollectionUsps';
import OurProcess from '../../components/sections/process/OurProcess';
// import Modal from '../../components/modal/Modal';
// import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';
import CollectionForm from '../../components/forms/brochure/CollectionForm';
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
                   <CollectionForm productType='chair'/>
                </div>
              </div>   
              <p className='sub-heading' id='collection-top-chair'>Adjustable Beds</p>  
              <h2 className='heading' >The Perfect Nights Sleep</h2>
              <div className='collections-grid con-reg'>
                  {beds.map((product, index) => 
                  <Link href={product!.url} key={index}>
                    <a className='collection-item'>
                        <div className='image-wrapper'>
                            <Image 
                                src={product!.collectionImage}
                                alt={product!.name + 'Collections'}
                                layout='responsive'
                                width={580}
                                height={325.07}
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
                <Resources pageType='beds'/>
          </div>
          <FooterCollections />
        </>
    )
}

export default Index;
