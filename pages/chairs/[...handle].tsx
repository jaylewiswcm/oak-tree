import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Context
import { useAppContext } from '../../context/state'
// Shopify
import { getProduct, getProductsForRecommendations } from "../../lib/shopify"
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
                        <div className='product-title'>
                            <h1>The {title}</h1>
                            <p>{props.product.productSubheading.value}</p>
                        </div>
                    </div>
                    <div className='scroll-down-button'>
                        <Link href='#product-information'> 
                            <a className='arrow-button'>
                                <Image 
                                    src='/buttons/scroll-down-arrow.svg'
                                    alt='Scroll Down Arrow'
                                    layout='responsive'
                                    width='50'
                                    height='50'
                                />
                            </a>
                        </Link>
                    </div>
            </div>
            <div className='product-details con-reg' id='product-information'>
                <div className='product-content'>
                    <h3 className='heading'>{props.product.productTitle.value}</h3>
                    <p className='desc'>{props.product.productParagraph.value}</p>
                    <div className='product-images chair-image-grid'>
                        <div className='image-wrapper'>
                            <Image 
                                loader={myLoader}
                                src={props.product.chairLegLiftImage.value}
                                alt={`${props.product.title} 1`}
                                layout='responsive'
                                width={1369}
                                height={1500}
                                quality={100}
                            />
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                loader={myLoader}
                                src={props.product.chairRisingImage.value}
                                alt={`${props.product.title} 2`}
                                layout='responsive'
                                width={1369}
                                height={1500}
                                quality={100}
                            />
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                loader={myLoader}
                                src={props.product.chairLifestyleImage.value}
                                alt={`${props.product.title} 3`}
                                layout='responsive'
                                width={1500}
                                height={1006}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
                    <InformationContainer product={props.product} productType='chair' showForm={() => setFormModal(true)}/>
            </div>
            {/* <Reviews product='chair' isOpen={isOpen} openAccordian={() => openAccordian('reviews')}/> */}
            <OurProcess />
            <TOC reference={tocRef} type='chair' sectionOneRef={sectionOne} sectionTwoRef={sectionTwo} sectionThreeRef={sectionThree} sectionFourRef={sectionFour}/>
            <div className='table-of-contents' ref={tocRef}>
   
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

            <RecommendedProducts products={props.recommendedProducts}/>
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

    console.log(product)
    
    let recommendedProducts

    // console.log(product.id)
    
    if(product) {
        recommendedProducts = await getProductsForRecommendations(product.id);
    }
    return {
  
      props: {
        product: product,
        

      },
  
    };
  
  };
  