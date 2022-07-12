import React, { useState } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Shopify 
import { getProductsInCollection } from "../../lib/shopify"
// Context 
import {useAppContext} from '../../context/state';
// Components
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import { CollectionFormWrapper } from '../../components/forms/wrappers/CollectionFormWrapper'
import { CollectionGrid } from '../../components/collection/CollectionGrid';
import { OfferBanners } from '../../components/sections/banners/OfferBanners';
import { HealthBenfits } from '../../components/sections/health-benefits/HealthBenfits';
// images 
import heroImage from '../../public/images/heros/chair-collection-hero.jpg'
import { FAQsWrapper } from '../../components/faq/FAQsWrapper';
import { Accessories } from '../../components/sections/accessories/Accessories';
import { AccessoryCarousel } from '../../components/sections/accessories/AccessoryCarousel';
// images
import chairCollection from '../../public/images/collections/collection-chairs.png'
import bedCollection from '../../public/images/collections/collection-beds.png'
import bathLiftCollection from '../../public/images/collections/collection-bathlifts.png'

const Index = (props:any) => {

    const { products } = props;
    const { setFormModal } = useAppContext();

    if(products.length === 0 ) {
      return <div>Error</div>
    }
    
    return (
        <motion.div exit={{opacity:0}} >
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="All Oak Tree Mobility rise and recline chairs are custom built made to fit you, ensuring comfort like you've never felt before. Take a look at our chairs"
            />
            
          <div className='product-collections'>
              <div className='col-hero'>
                <div className='hero-image'>
                    <Image 
                        src={heroImage}
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='left'
                        quality={100}
                        placeholder='blur'
                        priority
                    />
                </div>
                <div className='hero-inner con-reg'>
                <button className='mobile-cta main-cta' onClick={() => setFormModal(true)}>
                  <p>Request a Free Brochure</p>
                </button>
                <div className='hero-form'>
                  <CollectionFormWrapper productType='chairs'/>
                </div>
                </div>
              </div>
              <h1 className='heading' >Rise and Recline Chairs</h1>
              <p className='sub-heading'>Our Chairs are fully customisable and made-to-fit your measurements - we have curated a collection of chairs that embed different styles suited for different living environments</p>
                <CollectionGrid products={products}/>
                <div className='col-support-copy con-reg'>
                  <h2>Why a rise and recline chair?</h2>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <OfferBanners orphan={false}/>
                <HealthBenfits product='Rise and Recline Chairs'/>
                <FAQsWrapper type='chairs' title='Rise and Recline Chairs' copy='At Oak Tree Mobility our passion is to provide a service as high quality as our products, so your experience with us is second to none. We have a dedicated experienced team available to answer all of your questions and queries at any time.' />
                <Reviews orphan={false}/> 
                <div className='col-content row-2 con-reg'>
                          <div className="image-wrapper">
                            <Image 
                              src='/images/lifestyle/rep-and-chair.png'
                              alt='Rep and chair'
                              layout='fill'
                              objectFit='cover'
                              objectPosition='center'
                            />
                          </div>
                          <div className='content'>
                            <div className='icon-wrapper'>
                              <Image
                                src='/icons/collection-process/customisation.svg'
                                alt='Made To Measure'
                                layout='responsive'
                                width='136'
                                height='114'
                              />
                            </div>
                              <h2>Our Rise and Recline Chairs can be Made to Measure</h2>
                              <p>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                          </div>
                </div>

                <div className='col-content con-reg'>
                      <h2 className='heading'>Make Your Chair Your Own</h2>
                      {/* <Accessories type='chair' /> */}
                      <AccessoryCarousel type='chair' />
              </div>

              <div className='collection-other-products con-reg'>
                <h3>Explore Our Other Products</h3>

                <div className='collections-grid'>
                  <Link href='/adjustable-beds'><a className='collection-item'>
                    <Image 
                      src={bedCollection}
                      alt='Adjustable Beds'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='left'
                      placeholder='blur'
                      quality={100}
                    />
                    <div className='overlay'>
                
                      <p className='col-name'>Adjustable Beds</p>
                      <p>Take a look at our adjustable beds</p>
                    </div>
                    </a></Link>
                  <Link href='/bath-lifts'><a className='collection-item'>
                    <Image 
                      src={bathLiftCollection}
                      alt='Bath Lifts'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                      placeholder='blur'
                      quality={100}
                    />
                    <div className='overlay'>
                      <p className='col-name'>Bath Lifts</p>
                      <p>Take a look at our bath lifts</p>
                    </div>
                    </a></Link>
                </div>
              </div>

                <Resources pageType='chairs' />
          </div>
          {/* <FooterCollections /> */}
        </motion.div>
    )
}

export default Index;



export const getServerSideProps = async (context:any) => {

  // Get All Products in Collection 
  const products = await getProductsInCollection('rise-and-recline-chairs');
  
  return {

    props: {
      products: products   
    },

  };

};
