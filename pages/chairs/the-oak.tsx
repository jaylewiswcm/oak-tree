import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
// Components
import HomeVisitForm from '../../components/forms/homeVisit/HomeVisitForm';
import MaterialChair from '../../components/tableOfContents/MaterialChair';
import MotorChair from '../../components/tableOfContents/MotorChair';
import SizeChair from '../../components/tableOfContents/SizeChair';
import Accessories from '../../components/tableOfContents/Accessories';
import Reviews from '../../components/tableOfContents/Reviews';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';

const TheOak = () => {
    const [isOpen, setAccordianOpen] = useState('');


    const openAccordian = (type:string) => {
        if(isOpen === type ) {
            setAccordianOpen('')
        }
        else {
            setAccordianOpen(type)
        }

    }
    return (
        <>
             <NextSeo  
                title="The Oak Rise and Recline Chair| Oak Tree Mobility"
                description="Choose a stylish & comfortable rise and recline chair & settee from our Oak Collection, representing the very best of classic British design."
            />
        <div className='product-wrapper'>
        <div className='product-hero-wrapper con-reg'>
            <div className='product-hero-carousel'>
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/oak/oak-product-1.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={790}
                        height={631}
                    />
                </div>
            </div>
            <div className='product-intro'>
                <p className='subheading'>A Touch of Elegance</p>
                 <h1 className='name'>The Oak</h1>
                 <h2 className='category'>Rise and Recliner Chair</h2>
                 <p className='desc'>Combining amazing comfort and exceptional looks, the Oak is our most popular collection</p>
                <div className='button-wrapper'>
                    <button className='main-cta'>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                    <Link href='#product-information' ><a className='learn-more'>
                        <p className='mobile-text'>Learn More</p>
                        <p className='desktop-text'>Learn more about the Oak</p>
                        </a></Link>
                </div>
            </div>
    </div>
            <div className='product-details con-reg' id='product-information'>
                <h3 className='heading'>Unparralleled Comfort and Support</h3>
                <p className='desc mobile'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support.</p>
                <ul className='mobile'>
                    <li><p>Scroll Arms</p></li>
                    <li><p>Piped Wings</p></li>
                    <li><p>Perfectly Elegant</p></li> 
                </ul>
                <p className='desc desktop'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home. With the simple-to-use handheld control panel, sitting and standing will be a breeze too.</p>
            </div>
            <div className="product-images con-reg">
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/chairs/oak/oak-product-2.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
                <div className='image-wrapper'>
                <Image
                        src='/images/products/chairs/oak/oak-product-3.png'
                        alt='The Oak Chair'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
            </div>
            <div className='table-of-contents'>
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialChair isOpen={isOpen} openAccordian={() => openAccordian('material')}/>
                <SizeChair isOpen={isOpen} openAccordian={() => openAccordian('size')}/>
                <MotorChair isOpen={isOpen} openAccordian={() => openAccordian('motor')}/>
                <Accessories  isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='chair'/>
                <Reviews isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/>
            </div>
            <div className='request-wrapper con-reg'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                <div className='image-and-form'>
                    <div className='image-wrapper'>
                        <Image 
                            src='/images/lifestyle/home-visit-desktop.png'
                            alt='home visit'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className='form-and-cta'>
                        <button className='main-cta'>
                            <p>Request A Home Visit</p>
                        </button>
                        <HomeVisitForm />
                    </div>
                </div>
            </div>
            <RecommendedProducts product='chairs'/>
        </div>
        </>
    )
}

export default TheOak;
