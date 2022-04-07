import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// Components 
import HomeVisitForm from '../../components/forms/homeVisit/HomeVisitForm';
const TheRivieraPlus = () => {
    const [stageIndex, setStageIndex] = useState(0);
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
                 <h2 className='category'>Bath Lift</h2>
                 <p className='desc'>Our Riviera Plus offers the best way to enjoy the therapeutic benefits of a hot bath again</p>
                <div className='button-wrapper'>
                    <button className='main-cta blue-cta'>
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
                            src='/images/products/bath-lifts/the-riviera/riviera-product-2.png'
                            alt='The riviera plus shot 2'
                            layout='responsive'
                            width={353}
                            height={277}
                       />
                   </div>
                   <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/riviera-product-3.png'
                            alt='The riviera plus shot 3'
                            layout='responsive'
                            width={353}
                            height={277}
                       />
                   </div>
                   <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/riviera-product-4.png'
                            alt='The riviera plus shot 4'
                            layout='responsive'
                            width={353}
                            height={277}
                       />
                   </div>
                   <div className='image-wrapper'>
                        <Image 
                            src='/images/products/bath-lifts/the-riviera/riviera-product-5.png'
                            alt='The riviera plus shot 5'
                            layout='responsive'
                            width={353}
                            height={277}
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
           <div className='product-stages'>
            <div className='con-reg flex-row'>
                   <div className='info'>
                   <div className='button-wrapper'>
                   <button onClick={() => setStageIndex(0)} className={stageIndex === 0 ? 'selected' : ''}>Getting in</button>
                   <button onClick={() => setStageIndex(1)} className={stageIndex === 1 ? 'selected' : ''}>Soaking</button>
                   <div className={`selected-line index-${stageIndex}`}></div>
               </div>
                       <h3>Safe and Reliable</h3>
                       <p className='subheading'>Packed with features that make it safe, meaning you can rely on it bath after bath.</p>
                       <ul>
                            <li>A wall-mounted system means you can continue to use your bath like normal.</li>
                            <li>The bath lift always stays taut, making it safe and easy to use.</li>
                            <li>The belt attaches easily to the floor, meaning it’s simple to remove for guests who might not want to use the bath lift.</li>
                       </ul>
                   </div>
                   <div className='image-wrapper'>
                       <Image 
                            src='/images/products/bath-lifts/the-riviera/riviera-product-6.png'
                            alt='The riviera getting in'
                            layout='responsive'
                            width='681'
                            height='482'
                       />
                   </div>
               </div>
           </div>
           <div className='con-reg'>
               <div className='feature-cards hide'>
                   <div className='feature'>
                       <div className='image-wrapper'>
                           {/* <Image 
                                src=''
                                alt=''
                                layout='responsive'
                                width={}
                                height={}
                           /> */}
                       </div>
                       <div className='info'>
                            <h4>Two Button<br/>Remote Control</h4>
                            <p>The fully waterproof and floating remote control is a standard feature on the Riviera Plus Bath Lift. Two simple buttons allow you to descend and rise gently in complete safety.</p>
                       </div>
                   </div>
               </div>
            <div className='table-of-contents'>
                <h4 className='toc-heading'>Our Process</h4>
       
            </div>
            <div className='request-wrapper'>
                <h6 className='heading'>Book a Home Visit</h6>
                <p className='content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
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
        </div>
        </>
    )
}
export default TheRivieraPlus;