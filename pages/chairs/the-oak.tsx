import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
// Context
import { useAppContext } from '../../context/state'
// Product Section Components
import MaterialChair from '../../components/tableOfContents/MaterialChair';
import MotorChair from '../../components/tableOfContents/MotorChair';
import SizeChair from '../../components/tableOfContents/SizeChair';
import Accessories from '../../components/tableOfContents/Accessories';
import Reviews from '../../components/tableOfContents/Reviews';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';
import { TOC } from '../../components/tableOfContents/TOC';
import { InformationContainer } from '../../components/product/InformationContainer';
// Form
import ProductForm from '../../components/forms/homeVisit/ProductForm';
import OurProcess from '../../components/sections/process/OurProcess';


const TheOak = () => {
    const [isOpen, setAccordianOpen] = useState('');
    const [product, setProduct] = useState({
        name: 'The Oak',
        category: 'Rise and Recline Chair',
        usps: [
            {
                text: 'Qualifies for trade in',
                img: '/icons/product-usps/trade-in.svg',
                alt: 'Trade In'
            },
            {
                text: 'Half Price Offer Available',
                img: '/icons/product-usps/half-price.svg',
                alt: 'Half Price Offer Available'
            },
            {
                text: 'Unique High-Leg Lift',
                img: '/icons/product-usps/leg-lift.svg',
                alt: 'Unique High-Leg Lift'
            },
            {
                text: 'Made to Fit',
                img: '/icons/product-usps/made-to-fit.svg',
                alt: 'Made To Fit'
            },
        ]
    })

    // Refs
    const tocRef = useRef<HTMLDivElement>(null);
    const sectionOne = useRef<HTMLDivElement>(null);
    const sectionTwo = useRef<HTMLDivElement>(null);
    const sectionThree = useRef<HTMLDivElement>(null);
    const sectionFour = useRef<HTMLDivElement>(null);
    
    const { setProductPage, setFormModal} = useAppContext();
  
    useEffect(() => {   
        setProductPage(true);
        return () => {
            setProductPage(false);
        }
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
                title="The Oak Rise and Recline Chair| Oak Tree Mobility"
                description="Choose a stylish & comfortable rise and recline chair & settee from our Oak Collection, representing the very best of classic British design."
            />
        <div className='product-wrapper'>
            <div className='product-hero-wrapper'>
                    <div className='image-wrapper'>
                        <Image
                            src='/images/products/chairs/oak/oak-collection.png'
                            alt='The Oak Chair'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
            </div>
            <div className='product-details con-reg' id='product-information'>
                <div className='product-content'>
                    <h3 className='heading'>Unparralleled Comfort and Support</h3>
                    <p className='desc'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home. With the simple-to-use handheld control panel, sitting and standing will be a breeze too.</p>
                    <div className="product-images">
                        <div className='image-wrapper'>
                            <Image
                                src='/images/products/chairs/oak/oak-product-2.png'
                                alt='The Oak Chair'
                                layout='responsive'
                                width={577}
                                height={461}
                            />
                        </div>
                        <p className='desc'>The chairs in this range each feature three luxuriously filled back cushions, which provide unparalleled comfort and support. In addition, with their scroll arms and piped wings, these recliners are perfectly suited to those looking to add a touch of elegance to their home. With the simple-to-use handheld control panel, sitting and standing will be a breeze too.</p>
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
                </div>
                    <InformationContainer product={product} productType='chair' showForm={() => setFormModal(true)}/>
            </div>
            {/* <Reviews product='chair' isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/> */}
            <OurProcess />
            <TOC reference={tocRef} type='chair' sectionOneRef={sectionOne} sectionTwoRef={sectionTwo} sectionThreeRef={sectionThree} sectionFourRef={sectionFour}/>
            <div className='table-of-contents' ref={tocRef}>
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialChair isOpen={isOpen} openAccordian={() => openAccordian('material')} reference={sectionOne}/>
                <SizeChair isOpen={isOpen} openAccordian={() => openAccordian('size')} reference={sectionTwo}/>
                <MotorChair isOpen={isOpen} openAccordian={() => openAccordian('motor')} reference={sectionThree}/>
                <Accessories  isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='chair' reference={sectionFour}/>
            </div>
            <div className='request-wrapper'>
                <div className='con-reg'>
                    {/* <div className='request-intro'>
                        <p className='subheading'>Step Five</p>
                        <h6>Request a Free Home Visit</h6>
                        <p>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                    </div> */}
                <div className='form-and-content'>
                    <div className='supporting-content'>
                        <p className='support-heading'>Your Home Visit Will Include</p>
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
                    <div className='form-wrapper'>
                        <ProductForm productName='The Oak'/> 
                   </div>
                </div>
                </div>
            </div>

            <RecommendedProducts product='chairs'/>
        </div>
        </>
    )
}

export default TheOak;
