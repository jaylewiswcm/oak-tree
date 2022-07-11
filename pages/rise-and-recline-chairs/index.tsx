import React, { useState } from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
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
import { FAQs } from '../../components/faq/FAQs';
// images 
import heroImage from '../../public/images/heros/chair-collection-hero.jpg'
import { FAQsWrapper } from '../../components/faq/FAQsWrapper';

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
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
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
                {/* <div className='intro-box'>
                      <p>Oak Tree</p>
                      <h1>Rise and <br/>Recline Chairs</h1>
                </div> */}
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
