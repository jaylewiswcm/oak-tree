import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image';
// Shopify 
import { getProductsInCollection } from "../../lib/shopify"
// Context 
import {useAppContext} from '../../context/state';
// Components
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import { CollectionGrid } from '../../components/collection/CollectionGrid';
import { CollectionFormWrapper } from '../../components/forms/wrappers/CollectionFormWrapper';
import { OfferBanners } from '../../components/sections/banners/OfferBanners';
import { HealthBenfits } from '../../components/sections/health-benefits/HealthBenfits';
// images 
import heroImage from '../../public/images/heros/bed-collection-hero.webp';

const Index = (props:any) => {

    const { products } = props;
    const { setFormModal } = useAppContext();

    if(products.length === 0 ) {
      return <div>Error</div>
    }

    return (
        <>
            <NextSeo  
                title="Adjustable Beds | Oak Tree Mobility"
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
                <div className='intro-box'>
                      <p>Oak Tree</p>
                      <h1>Adjustable Beds</h1>
                </div>
                <button className='mobile-cta main-cta' onClick={() => setFormModal(true)}>
                  <p>Request a Free Brochure</p>
                </button>
                <div className='hero-form'>
                  <CollectionFormWrapper productType='beds' />
                </div>
                </div>
              </div>
              <h2 className='heading'>The Perfect Nights Sleep</h2>
              <p className='sub-heading' id='collection-top-chair'>Our Beds are fully customisable and made-to-fit your measurements - we have curated a collection of beds that embed different styles suited for different living environments</p>  
                <CollectionGrid products={products}/> 
                <OfferBanners orphan={false}/>
                <HealthBenfits product='Beds'/>
                <Reviews orphan={false}/>                    
                <Resources pageType='beds'/>
          </div>
          {/* <FooterCollections /> */}
        </>
    )
}

export default Index;


export const getServerSideProps = async (context:any) => {

  // Get All Products in Collection 
  const products = await getProductsInCollection('adjustable-beds');
  
  return {

    props: {
      products: products   
    },

  };

};
