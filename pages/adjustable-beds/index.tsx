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
import { FAQsWrapper } from '../../components/faq/FAQsWrapper';
// images 
import heroImage from '../../public/images/heros/bed-collection-hero.webp';
import { RecommendedCollections } from '../../components/sections/recommendedProducts/RecommendedCollections';

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
                description="Oak Tree Mobility specialise in handmade adjustable beds which allow you to sleep soundly and in comfort at night. Take a look at our range of adjustable beds."
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
                  <CollectionFormWrapper productType='beds' />
                </div>
                </div>
              </div>
              <h1 className='heading'>Adjustable Beds</h1>
              <p className='sub-heading' id='collection-top-chair'>Our Beds are fully customisable and made-to-fit your measurements - we have curated a collection of beds that embed different styles suited for different living environments</p>  
                <CollectionGrid products={products}/> 
                <div className='col-support-copy'>
                  <div className='con-reg'>
                  <h2>Why an Adjustable Bed?</h2>
                  <div className='flex-col-3'>
                                <div className='item'>
                                    <div className='icon'></div>
                                    <p className='reason-title'>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                </div>
                                <div className='item'>
                                    <div className='icon'></div>
                                    <p className='reason-title'>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                </div>
                                <div className='item'>
                                    <div className='icon'></div>
                                    <p className='reason-title'>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                </div>
                              </div>
                        </div>  
                </div>
                <OfferBanners orphan={false}/>
                <HealthBenfits product='Beds'/>
                <FAQsWrapper type='chairs' title='Rise and Recline Chairs' copy='At Oak Tree Mobility our passion is to provide a service as high quality as our products, so your experience with us is second to none. We have a dedicated experienced team available to answer all of your questions and queries at any time.' />
                <Reviews orphan={false}/>         
                <RecommendedCollections collection='beds' />
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
