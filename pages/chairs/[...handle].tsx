import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
// Context
import { useAppContext } from '../../context/state'
// Shopify
import { getProduct } from "../../lib/shopify"
// Product Section Components
import MaterialChair from '../../components/tableOfContents/MaterialChair';
import MotorChair from '../../components/tableOfContents/MotorChair';
import SizeChair from '../../components/tableOfContents/SizeChair';
import Accessories from '../../components/tableOfContents/Accessories';
import RecommendedProducts from '../../components/sections/recommendedProducts/RecommendedProducts';
import { TOC } from '../../components/tableOfContents/TOC';
import { InformationContainer } from '../../components/product/InformationContainer';
// Form
import ProductForm from '../../components/forms/homeVisit/ProductForm';
import OurProcess from '../../components/sections/process/OurProcess';


const ChairProduct = (props:any) => {
    const [isOpen, setAccordianOpen] = useState('');
    // const [product, setProduct] = useState({
    //     name: 'The Oak',
    //     category: 'Rise and Recline Chair',
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
        console.log(props.product.chairRisingImage);

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
                title="The Oak Rise and Recline Chair| Oak Tree Mobility"
                description="Choose a stylish & comfortable rise and recline chair & settee from our Oak Collection, representing the very best of classic British design."
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
            <div className='product-details con-reg' id='product-information'>
                <div className='product-content'>
                    <h3 className='heading'>{props.product.productTitle.value}</h3>
                    <p className='desc'>{props.product.productParagraph.value}</p>
                    <div className='product-images chair-image-grid'>
                        {/* <div className='image-wrapper'>
                            <Image 
                                loader={myLoader}
                                src={props.product.chairRisingImage.value}
                                alt='The Oak Chair'
                                layout='responsive'
                                width={577}
                                height={461}
                            />
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                loader={myLoader}
                                src={props.product.chairLegLiftImage.value}
                                alt='The Oak Chair'
                                layout='responsive'
                                width={577}
                                height={461}
                            />
                        </div> */}
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/products/chairs/oak/oak-product-2.png'
                                alt='The Oak Chair'
                                layout='responsive'
                                width={577}
                                height={461}
                            />
                        </div>
                    </div>
                    {/* <div className="product-images">
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
                    </div> */}
                </div>
                    <InformationContainer product={props.product} productType='chair' showForm={() => setFormModal(true)}/>
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
                        <ProductForm productName={`The ${title}`}/> 
                   </div>
                </div>
                </div>
            </div>

            {/* <RecommendedProducts product='chairs' productId={id}/> */}
        </div>
        </>
    )
}

export default ChairProduct;

export const getServerSideProps = async (context:any) => {

    // Retrieve route handle from context
    const productHandleFromRoute = context.params.handle

    let productHandle = '';
    // Format the product name
    if(productHandleFromRoute[0].includes('the')) {
        productHandle = productHandleFromRoute[0].split('the')[1].substring(1)
    }

    // Get Product By Handle
    const product = await getProduct(productHandle);
    
    return {
  
      props: {
        product: product   
      },
  
    };
  
  };
  