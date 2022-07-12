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
import heroImage from '../../public/images/heros/chair-collection-hero.webp'
import { FAQsWrapper } from '../../components/faq/FAQsWrapper';
import { Accessories } from '../../components/sections/accessories/Accessories';
import { AccessoryCarousel } from '../../components/sections/accessories/AccessoryCarousel';
// images
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
                <div className='col-support-copy'>
                  <div className='con-reg'>
                  <h2>Why a Rise and Recline Chair?</h2>
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

                <div className='motor-container'>
            <div className='content con-reg'>
                {/* <p className='subheading oaktree-green'>Step Three</p> */}
                <h5 className='heading'>Precision Engineering</h5>
                <p className='desc'>We offer a number of motors, each of which suits a particular requirement. If you like to sleep on a chair that reclines.</p>
                <div className='comp-table'>
                  <div className='motor'>
                    <p className='motor-name'>Dual Motor</p>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Can operate footrest and back independently</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back can be dropped down to almost flat position</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Allows a complete upright back when footrest moves</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Additional back support especially in lumbar region</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                    </ul>

                  </div>
                  <div className='motor'>
                    <p className='motor-name'>Unique High Leg Lift</p>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Elevates feet 6” above hips</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back and footrest works together in tilt in space action meaning no pressure on joints</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Additional back support especially in lumbar region</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Extra Motor to allow the backrest to move independently</p>
                      </li>
                    </ul>

                  </div>
                  <div className='motor stand-out'>
                  <div className='most-popular'>Most Popular</div>
                  <div className='stand-out-bg'></div>
                    <div className='flex-row'>
                      <p className='motor-name'>Unique High Leg Lift PLUS</p>
                    </div>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Elevates feet 6” above hips</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back and footrest works together in tilt in space action meaning no pressure on joints</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Extra Motor to allow the backrest to move independently</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>This Extra feature can be used when footrest raised or not</p>
                      </li>
    
                    </ul>

                  </div>
                </div>
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
