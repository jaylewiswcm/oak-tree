import React, {useEffect, useState, useRef } from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../../context/state'
// Components
import MaterialBed from '../../components/tableOfContents/MaterialBed';
import Reviews from '../../components/tableOfContents/Reviews';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';
import Mattress from '../../components/tableOfContents/Mattress';
import Headboards from '../../components/tableOfContents/Headboards';
import Accessories from '../../components/tableOfContents/Accessories';
import Modal from '../../components/modal/Modal';
import PopupBrochureRequestForm from '../../components/forms/PopupBrochureRequestForm';
import { InformationContainer } from '../../components/product/InformationContainer';
import { TOC } from '../../components/tableOfContents/TOC';
import ProductForm from '../../components/forms/homeVisit/ProductForm';

const TheHazel = () => {
    const [isOpen, setAccordianOpen] = useState('');
    const [product, setProduct] = useState({
        name: 'The Hazel',
        category: 'Adjustable Bed',
        usps: [
            {
                text: 'Made-To-Measure',
                img: '/icons/product-usps/made-to-measure.svg',
                alt: 'Made-to-measure'
            },
            {
                text: 'Qualifies for trade in',
                img: '/icons/product-usps/trade-in.svg',
                alt: 'Trade In'
            }
        ]
    })
    const tocRef = useRef<HTMLDivElement>(null);
    const sectionOne = useRef<HTMLDivElement>(null);

    const { setProductPage, setFormModal} = useAppContext();

    useEffect(() => {   
        setProductPage(true)
    },[setProductPage])
    

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
                    <button className='main-cta' onClick={() => setFormModal(true)}>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                </div>
            </div>
    </div>
            <div className='product-details con-reg' id='product-information'>
                <div className='product-content'>
                    <h3 className='heading'>Long-lasting style and comfort</h3>
                    <p className='desc'>Hidden away inside is a state-of-the-art motor that allows complete control of the mattress with a simple handheld control. If you’re struggling to get into and out of bed, the smart actions of the Hazel might very well be life changing.</p>
                    <div className="product-images">
                        <div className='image-wrapper'>
                        <Image
                            src='/images/products/beds/hazel/hazel-product-1.png'
                            alt='The Hazel Bed 1'
                            layout='responsive'
                            width={577}
                            height={461}
                        />
                        </div>
                        <p className='desc'>The gently curved lines lend an airy feel and bestow upon the bed a refined elegance. Hidden away inside is a state-of-the-art motor that allows complete control of the mattress with a simple handheld control. If you’re struggling to get into and out of bed, the smart actions of the Hazel might very well be life changing.</p>
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
                    </div>
                    <InformationContainer product={product} productType='bed' showForm={() => setFormModal(true)} />
            </div>
            <Reviews product='bed' isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/>
            <TOC reference={tocRef} type='bed' references={sectionOne}/>
            <div className='table-of-contents' ref={tocRef} >
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialBed isOpen={isOpen} openAccordian={() => openAccordian('material')} reference={sectionOne}/>
                <Mattress isOpen={isOpen} openAccordian={() => openAccordian('mattress')}/>
                <Headboards isOpen={isOpen} openAccordian={() => openAccordian('headboards')}/>
                <Accessories isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='bed'/>
            </div>
            <div className='request-wrapper'>
                <div className='con-reg'>
                    <div className='request-intro'>
                        <p className='subheading'>Step Five</p>
                        <h6>Request a Free Home Visit</h6>
                        <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                    </div>
                <div className='form-and-content'>
                    <div className='supporting-content'>
                        <p className='support-heading'>What will it include?</p>
                        <ul>
                            <li>
                                <div className='icon-wrapper'>
                                    <Image 
                                        src='/icons/home-visit/icon-made-to-measure.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-consulting.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-made-to-measure.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'>
                                <Image 
                                        src='/icons/home-visit/icon-consulting.svg'
                                        alt='Made-to-measure'
                                        layout='responsive'
                                        width='84'
                                        height='70'
                                    />
                                </div>
                                <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                            </li>
                        </ul>
                    </div>
                   <ProductForm/> 
                </div>
                </div>
            </div>
            <RecommendedProducts product='beds' />
        </div>
        </>
    )
}

export default TheHazel;
