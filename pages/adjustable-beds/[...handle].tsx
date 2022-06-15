import React, {useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
// Context
import { useAppContext } from '../../context/state'
// Shopify
import { getProduct } from "../../lib/shopify"
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
import OurProcess from '../../components/sections/process/OurProcess';

const TheHazel = (props:any) => {
    const [isOpen, setAccordianOpen] = useState('');
    // const [product, setProduct] = useState({
    //     name: 'The Hazel',
    //     category: 'Adjustable Bed',
    //     usps: [
    //         {
    //             text: 'Qualifies for trade in',
    //             img: '/icons/product-usps/trade-in.svg',
    //             alt: 'Trade In'
    //         },
    //         {
    //             text: 'Half Price Offer Available',
    //             img: '/icons/product-usps/half-price.svg',
    //             alt: 'Half Price Offer Available'
    //         },
    //         {
    //             text: 'Unique High-Leg Lift',
    //             img: '/icons/product-usps/leg-lift.svg',
    //             alt: 'Unique High-Leg Lift'
    //         },
    //         {
    //             text: 'Made to Fit',
    //             img: '/icons/product-usps/made-to-fit.svg',
    //             alt: 'Made To Fit'
    //         },
    //     ]
    // })

    const router = useRouter()

    // Refs
    const tocRef = useRef<HTMLDivElement>(null);
    const sectionOne = useRef<HTMLDivElement>(null);
    const sectionTwo = useRef<HTMLDivElement>(null);
    const sectionThree = useRef<HTMLDivElement>(null);
    const sectionFour = useRef<HTMLDivElement>(null);

    const { setProductPage, setFormModal} = useAppContext();
    
    const { title, handle, images, id } = props.product;

    const heroImage = images.edges[0].node;


    useEffect(() => {   

        if(props.product.length === 0) {
            router.push('/404')
        }
    
        setProductPage(true);
        
        return () => {
            setProductPage(false);        
        }
    },[setProductPage, props, router])
    

    const openAccordian = (type:string) => {
        if(isOpen === type ) {
            setAccordianOpen('')
        }
        else {
            setAccordianOpen(type)
        }
    }

    const myLoader = ({src, width, quality}:any) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <>
            <NextSeo  
                title="The Hazel | Oak Tree Mobility"
                description="The Hazel adjustable bed strikes a fine balance between traditional and contemporary, making it fit in well with most interior styles. Find out more."
            />
        <div className='product-wrapper'>
            <div className='product-hero-wrapper'>
                <div className='image-wrapper'>
                    <Image
                            loader={myLoader}
                            src={heroImage.originalSrc}
                            alt={`The ${handle}`}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                </div>
            </div>
        {/* <div className='product-hero-wrapper con-reg'>
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
    </div> */}
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
                <InformationContainer product={props.product} productType='bed' showForm={() => setFormModal(true)}/>
            </div>
            <OurProcess />
            <TOC reference={tocRef} type='bed'  sectionOneRef={sectionOne} sectionTwoRef={sectionTwo} sectionThreeRef={sectionThree} sectionFourRef={sectionFour}/>
            <div className='table-of-contents' ref={tocRef} >
                <h4 className='toc-heading'>Our Process</h4>
                <MaterialBed isOpen={isOpen} openAccordian={() => openAccordian('material')} reference={sectionOne}/>
                <Mattress isOpen={isOpen} openAccordian={() => openAccordian('mattress')} reference={sectionTwo}/>
                <Headboards isOpen={isOpen} openAccordian={() => openAccordian('headboards')} reference={sectionThree}/>
                <Accessories isOpen={isOpen} openAccordian={() => openAccordian('accessories')} type='bed' reference={sectionFour}/>
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
                        <ProductForm productName='The Hazel'/> 
                   </div>
                </div>
                </div>
            </div>

            <RecommendedProducts product='beds' productId={id}/>
        </div>
        </>
    )
}

export default TheHazel;


export const getServerSideProps = async (context:any) => {

    // Retrieve route handle from context
    const productHandleFromRoute = context.params.handle

    let productHandle = '';
    // Format the product name
    if(productHandleFromRoute[0].includes('the')) {
        productHandle = productHandleFromRoute[0].split('the')[1].substring(1)
    }

    // Get Oak Product 
    const product = await getProduct(productHandle);
    
    return {
  
      props: {
        product: product   
      },
  
    };
  
  };
  