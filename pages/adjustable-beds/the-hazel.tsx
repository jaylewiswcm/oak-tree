import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
// Components
import HomeVisitForm from '../../components/forms/homeVisit/HomeVisitForm';
import MaterialBed from '../../components/tableOfContents/MaterialBed';
import Reviews from '../../components/tableOfContents/Reviews';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';
import Mattress from '../../components/tableOfContents/Mattress';
import Headboards from '../../components/tableOfContents/Headboards';
import Accessories from '../../components/tableOfContents/Accessories';
import Modal from '../../components/modal/Modal';
import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';

const TheHazel = () => {
    const [isOpen, setAccordianOpen] = useState('');
    const [show, setFormToShow] = useState(false);

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
                title="The Hazel | Oak Tree Mobility"
                description="The Hazel adjustable bed strikes a fine balance between traditional and contemporary, making it fit in well with most interior styles. Find out more."
            />
            {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
        <div className='product-wrapper'>
        <div className='product-hero-wrapper con-reg'>
            <div className='product-hero-carousel'>
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/beds/hazel/hazel-collection.png'
                        alt='The Hazel bed'
                        layout='responsive'
                        width={790}
                        height={631}
                    />
                </div>
            </div>
            <div className='product-intro'>
                <p className='subheading'>An Elegant and Refined Bed</p>
                 <h1 className='name'>The Hazel</h1>
                 <h2 className='category'>Adjustable Bed</h2>
                 <p className='desc'>The Hazel bed strikes a fine balance between traditional and contemporary, making it fit in well with most interior styles.</p>
                <div className='button-wrapper'>
                    <button className='main-cta' onClick={() => setFormToShow(true)}>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                    {/* <Link href='#product-information' >
                        <a className='learn-more'>
                            <p className='mobile-text'>Learn More</p>
                            <p className='desktop-text'>Learn more about the Hazel</p>
                        </a>
                    </Link> */}
                </div>
            </div>
    </div>
            <div className='product-details con-reg' id='product-information'>
                <h3 className='heading'>Long-lasting style and comfort</h3>
                <p className='desc mobile'>Hidden away inside is a state-of-the-art motor that allows complete control of the mattress with a simple handheld control. If you’re struggling to get into and out of bed, the smart actions of the Hazel might very well be life changing.</p>
                <ul className='mobile'>
                    <li><p>Gently curved lines</p></li>
                    <li><p>State-of-the-art motor</p></li>
                    <li><p>Refined eleganct</p></li> 
                </ul>
                <p className='desc desktop'>The gently curved lines lend an airy feel and bestow upon the bed a refined elegance. Hidden away inside is a state-of-the-art motor that allows complete control of the mattress with a simple handheld control. If you’re struggling to get into and out of bed, the smart actions of the Hazel might very well be life changing.</p>
            </div>
            <div className="product-images con-reg">
                <div className='image-wrapper'>
                    <Image
                        src='/images/products/beds/hazel/hazel-product-1.png'
                        alt='The Hazel Bed 1'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
                <div className='image-wrapper'>
                <Image
                        src='/images/products/beds/hazel/hazel-product-2.png'
                        alt='The Hazel Bed 2'
                        layout='responsive'
                        width={577}
                        height={461}
                    />
                </div>
            </div>
            <div className='table-of-contents'>
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialBed isOpen={isOpen} openAccordian={() => openAccordian('material')}/>
                <Mattress isOpen={isOpen} openAccordian={() => openAccordian('mattress')}/>
                <Headboards isOpen={isOpen} openAccordian={() => openAccordian('headboards')}/>
                <Accessories isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='bed'/>
                <Reviews product='bed' isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/>
            </div>
            <div className='request-wrapper con-reg'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
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
            <RecommendedProducts product='beds' />
        </div>
        </>
    )
}

export default TheHazel;
