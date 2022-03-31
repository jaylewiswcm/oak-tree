import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';

// Components
import chairs from '../../data/products/chairs.json';
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import Resources from '../../components/sections/resources/Resources';
import CollectionBrochureRequestForm from '../../components/forms/brochure/SwiperBrochureRequestForm';
import { CollectionUsps } from '../../components/sections/usps/CollectionUsps';

const index = () => {
    return (
        <>
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
          <div className='product-collections'>
              <div className='hero-split con-reg'>
                  <div className='hero-left'>
                <div className='hero-image'>
                    <Image 
                        src='/images/heros/chair-collection-hero.png'
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                    />
                </div>
                <div className="hero-intro">
                    <p className='subheading'>Oak Tree</p>
                    <h1>Rise and Recline Chairs</h1>
                    <p className='intro-statement'>Combining amazing comfort and exceptional looks, the Oak is our most popular collection.</p>
                    <button className='main-cta brochure-request-btn'>
                        <p>Request a Brochure</p>
                    </button>
                    <Link href='#collection-top-chair'>
                        <a className='main-cta cta-link'>
                            <p>Explore our Chairs</p>
                        </a>
                    </Link>
                </div>
                </div>
                <div className='hero-form'>
                    <div className='form-top'>
                        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
                        <p>Get our new brochure delivered to your door!</p>
                    </div>
                   <CollectionBrochureRequestForm productType='chair'/>
                </div>
              </div>    
              <h2 className='heading' id='collection-top-chair'>Our Chairs</h2>
              <div className='collections-grid con-reg'>
                  {chairs.map(product => 
                    <div className='collection-item' key={product.name}>
                        <div className='image-wrapper'>
                            <Image 
                                src={product!.collectionImage}
                                alt={product!.name + 'Collections'}
                                layout='responsive'
                                width={580}
                                height={325.07}
                            />
                        </div>
                        <p className='subheading'>{product!.subheading}</p>
                        <h2>{product!.name}</h2>
                        <p className='desc'>{product!.desc}</p>
                        <Link href={product!.url}><a className='main-cta'><p>View Chair</p></a></Link>
                    </div>
                    )}
              </div>
              <Reviews orphan={false}/>
                <CollectionUsps />
              <div className='our-process bg-dark-green-1'>
                  <h4 className='heading'>Our Process</h4>
                  <div className='process-grid con-reg'>
                      <div className="item">
                          <div className='icon-wrapper'>
                            <Image 
                                src='/icons/collection-process/brochure.svg'
                                alt='Request a Brochure'
                                layout='responsive'
                                width={130}
                                height={81}
                            />
                          </div>
                          <h5><span className='number'>1.</span> Request a Brochure</h5>
                          <p>Read through our brochure and arrange a free no-obligation consultation.</p>
                      </div>
                      <div className="item">
                          <div className='icon-wrapper'>
                            <Image 
                                src='/icons/collection-process/consultation.svg'
                                alt='Consulation'
                                layout='responsive'
                                width={130}
                                height={81}
                            />
                          </div>
                          <h5><span className='number'>2.</span> Consultation</h5>
                          <p>Meet one of our friendly advisors and try a chair in the comfort of your own home.</p>
                      </div>
                      <div className="item">
                          <div className='icon-wrapper'>
                            <Image 
                                src='/icons/collection-process/customisation.svg'
                                alt='Customation'
                                layout='responsive'
                                width={130}
                                height={81}
                            />
                          </div>
                          <h5><span className='number'>3.</span> Customation</h5>
                          <p>Our designers and engineers create a chair that matches you and your specifications.</p>
                      </div>
                      <div className="item">
                          <div className='icon-wrapper'>
                            <Image 
                                src='/icons/collection-process/delivery.svg'
                                alt='Delivery and Installation'
                                layout='responsive'
                                width={130}
                                height={81}
                            />
                          </div>
                          <h5><span className='number'>4.</span> Delivery and Installation</h5>
                          <p>We will deliver your new chair and set it up before taking away your old furniture.</p>
                      </div>
                  </div>
              </div>
                <Resources />
          </div>
          <FooterCollections />
        </>
    )
}

export default index;
