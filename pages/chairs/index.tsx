import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import YouTube from "react-youtube";
// Components
import chairs from '../../data/products/chairs.json';
import Reviews from '../../components/sections/reviews/Reviews';
import FooterCollections from '../../components/sections/collections/FooterCollections';

const index = () => {

    const opts = {
        playerVars: {
          autoplay: 1,
        },
    }

    const _onReady = (event:any) => {
        event.target.pauseVideo();
      }
      
    return (
        <>
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
          <div className='product-collections'>
              <div className='hero-image'>
                  <Image 
                    src='/images/heros/chair-collection-hero.png'
                    alt='Our Rise and Recline Chairs'
                    layout='fill'
                    objectFit='cover'
                    objectPosition=' -110px'
                  />
              </div>
              <div className="hero-intro">
                  <p className='subheading'>Oak Tree</p>
                  <h1>Rise and Recline Chairs</h1>
                  <p className='intro-statement'>Improve your quality of life wiht our made-to-fit chairs.</p>
                  <button className='main-cta'>
                      <p>Request a Brochure</p>
                  </button>
              </div>
              <h2 className='heading'>Our Chairs</h2>
              <div className='collections-grid'>
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
              <div className='usp-grid'>
                  <div className="usp-item">
                      <div className='icon-wrapper'>
                          <Image 
                            src='/icons/collection-usps/made-in-britain.svg'
                            alt='Made in Britain'
                            layout='responsive'
                            width={137}
                            height={137}
                          />
                      </div>
                      <h3 className='usp-title'>Handmade in Great Britain</h3>
                      <p className='usp-desc'>At Oak Tree Mobility, we celebrate <span className='blue-1'>British manufacturing</span>. All our electric rise and recline armchairs are made in Britain.</p>
                  </div>
                  <div className="usp-item">
                      <div className='icon-wrapper'>
                          <Image 
                            src='/icons/collection-usps/trade-in.svg'
                            alt='Made in Britain'
                            layout='responsive'
                            width={137}
                            height={137}
                          />
                      </div>
                      <h3 className='usp-title'>£200 Trade In Offer</h3>
                      <p className='usp-desc'>We will collect any old furniture and donate all the furniture that we collect to the <span className='bhf-red'>British Heart Foundation</span> and give you £200 off.</p>
                  </div>
                  <div className="usp-item">
                      <div className='icon-wrapper'>
                          <Image 
                            src='/icons/collection-usps/customer-service.svg'
                            alt='Customer Service'
                            layout='responsive'
                            width={137}
                            height={137}
                          />
                      </div>
                      <h3 className='usp-title'>Incredible Customer Service</h3>
                      <p className='usp-desc'>All our recliner chairs are available with a warranty and come with a <span className='oaktree-green'>14 day satisfaction guarantee</span>. We offer a 24/7 local call out, 365 days a year.</p>
                  </div>
              </div>
              <div className='our-process bg-dark-green-1'>
                  <h4 className='heading'>Our Process</h4>
                  <div className='process-grid'>
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
                          <h5>Request a Brochure</h5>
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
                          <h5>Consultation</h5>
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
                          <h5>Customation</h5>
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
                          <h5>Delivery and Installation</h5>
                          <p>We will deliver your new chair and set it up before taking away your old furniture.</p>
                      </div>
                  </div>
              </div>
              <div className='resources'>
                  <h6>Resources</h6>
                    <div className='resource-grid'>
                        <div className='resource'>
                            <div className='video-wrapper'>
                            <YouTube videoId="wlRVdd9s174" onReady={(event) => _onReady(event)} />
                            </div>
                            <p className='subheading'>Our Occupational Therapist</p>
                            <p className='heading'>UK Therapy Services Talk Chairs</p>
                            <p className='link'>Watch Video</p>
                        </div>
                        <div className='resource'>
                            <div className='video-wrapper'>
                            <YouTube videoId="u9-WpUGw0NM" onReady={(event) => _onReady(event)} />
                            </div>
                            <p className='subheading'>British Made</p>
                            <p className='heading'>How We Make Your Chair</p>
                            <p className='link'>Watch Video</p>
                        </div>
                        <div className='resource'>
                            <div className='video-wrapper'>
                            <YouTube videoId="vlsfU4fdZmk" onReady={(event) => _onReady(event)} />
                            </div>
                            <p className='subheading'>The Oak Tree Touch</p>
                            <p className='heading'>Unique High Leg Lift</p>
                            <p className='link'>Watch Video</p>
                        </div>
                    </div>
              </div>
          </div>
          <FooterCollections />
        </>
    )
}

export default index;
