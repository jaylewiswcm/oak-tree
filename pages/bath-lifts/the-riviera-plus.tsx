import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// Components 
import HomeVisitForm from '../../components/forms/homeVisit/HomeVisitForm';
import BathLiftSteps from '../../components/sections/how-it-works/BathLiftSteps';
import BathLiftStages from '../../components/sections/stages/BathLiftStages';
const TheRivieraPlus = () => {
    return (
        <>
            <NextSeo  
                title="The Riviera Plus | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
        <div className='product-wrapper'>
            <div className='con-reg'>
        <div className='product-hero-wrapper '>
            <div className='product-hero-carousel'>
                <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/riviera-product-1.png'
                            alt='The riviera plus shot 1'
                            layout='responsive'
                            width={790}
                            height={631}
                       />
                </div>
            </div>
            <div className='product-intro'>
                <p className='subheading blue-3'>Enjoy a Nice Hot Bath Again</p>
                 <h1 className='name'>The Riviera Plus</h1>
                 <h2 className='category  blue-3'>Bath Lift</h2>
                 <p className='desc'>Our Riviera Plus offers the best way to enjoy the therapeutic benefits of a hot bath again</p>
                <div className='button-wrapper'>
                    <button className='blue-cta'>
                        <p className='mobile-text'>Request a Brochure</p>
                        <p className='desktop-text'>Request Your Free Brochure</p>
                    </button>
                    <Link href='#product-information' ><a className='learn-more'>
                        <p className='mobile-text'>Learn More</p>
                        <p className='desktop-text'>Learn more about the Oak</p>
                        </a></Link>
                </div>
            </div>
    </div>
           <div className='info-and-images'>
               <div className='image-grid'>
               <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/bath-lift-4.png'
                            alt='The riviera plus shot 5'
                            layout='responsive'
                            width={2000}
                            height={1136}
                       />
                   </div>
                   <div className='image-wrapper'>
                       <Image 
                            src='/images/products/bath-lifts/the-riviera/bath-lift-2.png'
                            alt='The riviera plus shot 2'
                            layout='responsive'
                            width={1000}
                            height={666}
                       />
                   </div>
                   <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/bath-lift-3.png'
                            alt='The riviera plus shot 3'
                            layout='responsive'
                            width={1500}
                            height={1000}
                       />
                   </div>
               </div>
                <div className='info'>
                    <h2>Experience the revolutionary new bath lift</h2>
                    <p>If you are looking for a more comfortable way to bathe, the Oak Tree Riviera Plus bath lift could change your life. The Riviera Plus relies on state-of-the-art technology to gently lower you into and out of the bath.</p>
                    <ul>
                        <li>Floating Controller</li>
                        <li>Wall Mount Controls</li>
                        <li>Comfortable Saddleboard</li>
                    </ul>
                </div>
           </div>
           </div>
           <BathLiftStages />
      
           <div className='collection-details con-reg bathlift-details'>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/the-riviera/tech-2.png'
                            alt='The Best Technology'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                          <h3>Two Button <br/>Remote Control</h3>
                          <p>The fully waterproof and floating remote control is a standard feature on the Riviera Plus Bath Lift. Two simple buttons allow you to descend and rise gently in complete safety.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/the-riviera/tech-3.png'
                            alt='Remote Control'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                          <h3>Comfort Slider <br/>Levelling Belt</h3>
                          <p>The unique levelling belt with a built in ‘comfort slider’ to maintain balance is extremely strong and made from superior seat belt material.</p>
                      </div>
                  </div>
                  <div className='detail'>
                      <div className="image-wrapper">
                          <Image 
                            src='/images/products/bath-lifts/the-riviera/tech-4.png'
                            alt='Customer Service'
                            layout='responsive'
                            width={593}
                            height={355}
                          />
                      </div>
                      <div className='content'>
                            <h3>State Of The Art <br/>Lithium Battery</h3>
                            <p>Our bath lift uses state of the art lithium battery technology to provide a reliable and safe way to keep the motor powered. It also makes installation easier than ever.</p>
                      </div>
                  </div>
              </div>
              <div className='how-it-works con-reg bathlift'>
                <div className='image-wrapper'>
                    <Image 
                        src='/images/products/bath-lifts/the-riviera/step-1.png'
                        alt='Sit on bath lift'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                    />    
                </div>     
                <div className='content'>
                    <h4>Easy steps to use the Bath Lift</h4>
                    <ul>
                        <li>
                            <span className="num">1</span>
                            <div className='step'>
                                <p className='step-head'>Sit on the Bath Belt</p>
                                <p className='step-p'>When the saddleband is taut across the top of the bath, simply sit on the saddleband on the comfort slider.</p>
                            </div>
                        </li>
                        <li>
                            <span className="num">2</span>
                            <div className='step'>
                                <p className='step-head'>Lower Yourself Into the Bath</p>
                                <p className='step-p'>Press the down button on the unit or remote control. The saddleband will begin gently lowering you into the bath.</p>
                            </div>
                        </li>
                        <li>
                            <span className="num">3</span>
                            <div className='step'>
                                <p className='step-head'>Relax and Enjoy A Proper Soak</p>
                                <p className='step-p'>Once at the bottom of your bath, relax and bathe as normal. This is what the Oak Tree Riviera Plus was invented for.</p>
                            </div>
                        </li>
                        <li>
                            <span className="num">4</span>
                            <div className='step'>
                                <p className='step-head'>Raise Yourself Out of the Bath</p>
                                <p className='step-p'>Once at the bottom of your bath, relax and bathe as normal. This is what the Oak Tree Riviera Plus was invented for.</p>
                            </div>
                        </li>
                    </ul>
                </div>               
              </div>
            <div className='request-wrapper con-reg'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Our consultant will be able to advise exactly which product is best for you and your home.</p>
                <div className='image-and-form'>
                    <div className='image-wrapper'>
                        <Image 
                            src='/images/lifestyle/home-visit-desktop.png'
                            alt='home visit'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className='form-and-cta'>
                        <button className='main-cta'>
                            <p>Request A Home Visit</p>
                        </button>
                        <HomeVisitForm />
                    </div>
                </div>
            </div>
            </div>
    
        </>
    )
}
export default TheRivieraPlus;