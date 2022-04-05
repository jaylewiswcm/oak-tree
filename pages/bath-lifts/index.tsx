import React from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image';
import Link from 'next/link';
 // Components
 import CollectionBrochureRequestForm from '../../components/forms/brochure/SwiperBrochureRequestForm';
import OurProcess from '../../components/sections/process/OurProcess';
import Reviews from '../../components/sections/reviews/Reviews';
import Resources from '../../components/sections/resources/Resources';
import FooterCollections from '../../components/sections/collections/FooterCollections';
import { Video } from '../../components/video/Video';

const index = () => {
    return (
        <div>
            <NextSeo  
                title="Bath Lifts | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
             <div className='product-collections'>
              <div className='hero-split con-reg'>
                  <div className='hero-left'>
                <div className='hero-image'>
                    <Image 
                        src='/images/products/bath-lifts/bath-lift-collection-hero.png'
                        alt='Our Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                    />
                </div>
                <div className="hero-intro">
                    <p className='subheading'>Oak Tree</p>
                    <h1>Bath Lifts</h1>
                    <p className='intro-statement'>Enjoy sitting at the the bottom of the bath and bathing as normal</p>
                    <button className='main-cta brochure-request-btn'>
                        <p>Request a Brochure</p>
                    </button>
                    <Link href='#collection-top-bath-lift'>
                        <a className='main-cta cta-link'>
                            <p>Explore Bath Lifts</p>
                        </a>
                    </Link>
                </div>
                </div>
                <div className='hero-form'>
                    <div className='form-top'>
                        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
                        <p>Get our new brochure delivered to your door!</p>
                    </div>
                   <CollectionBrochureRequestForm productType='bath_lift'/>
                </div>
              </div>    
              <div className='intro'>
                <h2 className='heading' id='collection-top-bath-lift'>Enjoy a Bath Like You Used To</h2>
                <p className='statement'>Do you miss relaxing in a nice warm bath? An Oak Tree electric powered bath lift gently lowers you in and out of the bath, helping you enjoy a relaxing and therapeutic soak again. Say goodbye to fussy plastic seats, expensive renovations or baths with doors… With the Riviera, you’ll enjoy bathing just like you used to.</p>
              </div>
              <div className='collections-grid con-reg'>
                  <Link href='/bath-lifts/the-riviera-plus'>
                    <a className='collection-item'>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/products/bath-lifts/the-riviera/the-riviera-collection.png'
                                alt='The Riviera Plus'
                                layout='responsive'
                                width={580}
                                height={325.07}
                            />
                        </div>
                        <p className='subheading'>Enjoy a Nice Hot Bath Again</p>
                        <h2>The Riviera Plus</h2>
                        <p className='desc'>If you are looking for a more comfortable way to bathe, the Oak Tree Riviera bath lift could change your life. The Riviera relies on state-of-the-art technology to gently aid the elderly, disabled and those with limited mobility into and out of the bath.</p>
                       <div className='main-cta blue-cta'><p>View Bath Lift</p></div>
                    </a>
                    </Link>
              </div>
              <div className='collection-details con-reg'>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/the-riviera/tech-1.png'
                            alt='The Best Technology'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                          <h3>The Best Technology</h3>
                          <p>Our bath lifts use state-of-the-art technology to ensure reliability and safety. Unlike other bath lifts, the belt of the Riviera stays taught, reducing wobble and ensuring that you can easily stay balanced. This makes it incredibly simple to enter and leave the bath.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/the-riviera/tech-2.png'
                            alt='Remote Control'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                          <h3>Keeping You Safe</h3>
                          <p>Every bath lift is thoroughly tested before it leaves our factory and a range of safety features come as standard. The lift is powered from the mains, but has a back-up battery in case of a power cut. The floating remote control is waterproof and the belt itself is extremely strong.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/lifestyle/customer-service.png'
                            alt='Customer Service'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                          <h3>Incredible Customer Service</h3>
                          <p>The Riviera is available with a 2-year warranty and 14-day satisfaction guarantee. Our UK-based call centre is on hand if you ever need any help, and in the rare instance that you need a technician to visit your home, we offer a 24/7 local call out, 365 days a year.</p>
                      </div>
                  </div>
              </div>
                <Reviews orphan={false}/>
                <div className='bath-lift-testimonial con-reg'>
                    <h6>Our Customers View</h6>
                    <div className='inner-wrapper'>
                        <Video videoId='YpIhtPvr76M' placeholder=''/>
                        <div className='customer-details'>
                            <p className='name'>Mr Parks</p>
                            <p className='location'>Cornwall</p>
                            <p className='statement'>After suffering a mini stroke which affected his balance, Richard Parks hadn't had a bath in years. Now, thanks to his Oak Tree Mobility bath lift, he can enjoy a relaxing bath once again.</p>
                            <Link href='/bath-lifts/the-riviera-plus'><a>View The Riviera Plus</a></Link>
                        </div>
                    </div>
                </div>
                <OurProcess />
                <Resources />
          </div>
          <FooterCollections />
        </div>
    )
}

export default index;
