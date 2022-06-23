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
// images 
import heroImage from '../../public/images/heros/chair-collection-hero.jpg'

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
                        objectPosition='center'
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
              <h2 className='heading' >A Chair That is Truly Yours</h2>
              <p className='sub-heading'>Our Chairs are fully customisable and made-to-fit your measurements - we have curated a collection of chairs that embed different styles suited for different living environments</p>
                <CollectionGrid products={products}/>
                <OfferBanners />
                <HealthBenfits />
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
