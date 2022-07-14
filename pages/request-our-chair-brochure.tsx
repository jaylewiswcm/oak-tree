import React, { useState } from 'react'
import Image from 'next/image';
// Components

import Reviews from '../components/sections/reviews/Reviews';
import OtFamily from '../components/sections/customers/OtFamily';
import OrphanBrochureFormWrapper from '../components/forms/OrphanBrochureFormWrapper';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import { OfferBanners } from '../components/sections/banners/OfferBanners';
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';
 
const RequestOurChairBrochure = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className="orphan-brochure-wrapper">
           <Modal classNames="" visible={isOpen} setShow={setIsOpen}><VideoCarousel videoId="l9adE0mWzUY" setShow={setIsOpen} show={isOpen}></VideoCarousel></Modal>
            <div className='usp-header'>
                <div className='inner-wrapper con-reg'>
                {/* <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/landing-page/trustpilot.svg'
                            alt='TrustPilot Rating - 4.5 stars'
                            layout='responsive'
                            width={60}
                            height={60}
                        />
                    </div>
                    <p>4.5 Star Rated</p>
                </div> */}
                <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/usps/icon-british-made-small.svg'
                            alt='British Made'
                            layout='responsive'
                            width={60}
                            height={60}
                        />
                    </div>
                    <p>British Made</p>
                </div>
                <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/usps/icon-warranty-small.svg'
                            alt='10 Year Warranty'
                            layout='responsive'
                            width={60}
                            height={60}
                        />
                    </div>
                    <p>10 Year Warranty</p>
                </div>
                <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/usps/icon-free-delivery-small.svg'
                            alt='Free Delivery'
                            layout='responsive'
                            width={60}
                            height={60}
                        />
                    </div>
                    <p>Free Delivery</p>
                </div>
                <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/usps/icon-trade-in-small.svg'
                            alt='Trade In'
                            layout='responsive'
                            width={60}
                            height={60}
                        />
                    </div>
                    <p>Trade in Offer</p>
                </div>
                </div>
            </div>
        <div className='con-reg orphan-wrapper'>
        <OrphanBrochureFormWrapper productType='chair' product='R & R'/>
        <div className='content'>
            <div className='hero orphan-con-reg'>
                <Image 
                    src='/images/landing-pages/hero-chair.jpeg'
                    alt='Old man relaxing in an Oak Tree Chair'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='left'
                />
                <div className='intro-box'>
                    <div className='inner-border'></div>
                    <h1>Transform Your Life with an Oak Tree Mobility Chair</h1>
                    <p>Get your new Spring 2022 brochure today!</p>
                    {/* <div className='underline'></div> */}
                </div>
            </div>
            <div className='health-benefits orphan-con-reg orphan-padding'>
                <div className='inner-wrapper'>
                <h2>Rise, Recline, Relax</h2>
                <p>Our chairs have a variety of benefits some include:</p>
                <div className='benefits-grid'>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/back-pain.svg'
                                alt='Back Pain'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Relieves Back Pain</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/hip-and-knees.svg'
                                alt='Support Hip and Knees'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Support Hip & Knees</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/breathing.svg'
                                alt='Aids Breathing'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Aids Breathing</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/sleep.svg'
                                alt='Improves Sleep'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Improves Sleep</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/circulation.svg'
                                alt='Improves Circulation'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Improves Circulation</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/health/muscles.svg'
                                alt='Relaxes Muscles'
                                width='60'
                                height='60'
                            />
                        </div>
                        <p>Relaxes Muscles</p>
                    </div>
                </div>
                </div>
                <div className='image-wrapper orphan-con-reg'>
                   <Image 
                    src='/images/landing-pages/lady-in-chair.jpeg'
                    alt='Lady In Chair'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                   />
                </div>
            </div>
            <div className='quote bg-dark-green-1'>
                    <div className='inner-wrapper orphan-con-reg'>
                        <p className='statement'>“When my chair came, it was absolutely wonderful to sit in. For the first time for ages, I felt really comfortable.”</p>
                        <p className='author'>Mrs Atkins</p>
                        <p className='loc'>Bristol</p>
                    </div>
            </div>
            <div className='brochure-usps orphan-con-reg orphan-padding'>
                <h3>Our New Spring 2022 Brochure</h3>
                <div className='flex-row'>
                    <div className="usp-points">
                        <ul>
                            <li>
                                <div className="num-wrapper">
                                    <Image 
                                        src='/icons/numbers/1-big.svg'
                                        alt='Number one'
                                        layout='responsive'
                                        width='62'
                                        height='54'
                                    />
                                </div>
                            <p>Browse our luxury styles, with <span className='oaktree-green'>over 100 fabrics and leather</span></p>
                            </li>
                            <li>
                                <div className="num-wrapper">
                                    <Image 
                                        src='/icons/numbers/2-big.svg'
                                        alt='Number two'
                                        layout='responsive'
                                        width='62'
                                        height='54'
                                    />
                                </div>
                            <p><span className='oaktree-green'>Personalise your chair</span> with superb accessories such as heat and massage</p>
                            </li>
                            <li>
                                <div className="num-wrapper">
                                    <Image 
                                        src='/icons/numbers/3-big.svg'
                                        alt='Number three'
                                        layout='responsive'
                                        width='62'
                                        height='54'
                                    />
                                </div>
                            <p>Discover more about <span className='oaktree-green'>our clever motors</span> and how they can help you</p>
                            </li>
                        </ul>
                    </div>
                    <div className="brochure-wrapper">
                        <Image 
                            src='/brochures/chair-brochure.png'
                            alt='Chair Brochure'
                            layout='responsive'
                            width={1000}
                            height={1412}
                        />
                    </div>
                </div>
            </div>
            <div className='testimonials orphan-con-reg orphan-padding'>
                <p className='subheading'>We believe in the power of individuality. We love that every Oak Tree customer has his or her own story to tell, and we build products to fit many different people. If you’d like to hear the stories of our customers, take a look at the testimonial videos.</p>
                <Testimonials pageType='chair'/>
            </div>
            <div className='reviews-wrapper orphan-con-reg'>
                <Reviews orphan={true} />
            </div>
            <div className='orphan-reasons orphan-con-reg orphan-padding'>
                <h5>5 Reasons to choose an Oak Tree Rise and Recliner</h5>
                <div className='reasons-grid'>
                    <div className='reason'>
                        <div className='content'>
                            
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/british-made.svg'
                                    alt='British Made'
                                    layout='responsive'
                                    width='106'
                                    height='74'
                                />
                            </div>
                            <p className='reason-title'><span className='number'>1.</span> British Made</p>
                            <p className='reason-content'>Our furniture is proudly handmade in Great Britain by skilled craftspeople, using only the finest materials.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-1.jpg'
                                alt='Reason 1 - British Made'
                                layout='responsive'
                                width='800'
                                height='800'

                                // objectFit='cover'
                                // objectPosition='center'
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'>
                            
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/leg-lift.svg'
                                    alt='British Made'
                                    layout='responsive'
                                    width='68'
                                    height='68'
                                />
                            </div>
                            <p className='reason-title'><span className='number'>2.</span> Our Unique High Leg Lift</p>
                            <p className='reason-content'>If you suffer from poor circulation and swollen ankles, our patented high leg lift will make the difference.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-2.jpg'
                                alt='Reason 2 - Unique High Leg Lift'
                                layout='responsive'
                                width='800'
                                height='800'
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'>
                           
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/made-to-fit.svg'
                                    alt='Made To Fit'
                                    layout='responsive'
                                    width='68'
                                    height='68'
                                />
                            </div>
                            <p className='reason-title'><span className='number'>3.</span> Made To Fit</p>
                            <p className='reason-content'>Our furniture is proudly handmade in Great Britain by skilled craftspeople, using only the finest materials.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-3.jpg'
                                alt='Reason 3 - Made To Fit'
                                layout='responsive'
                                width='800'
                                height='800'
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'>
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/free-delivery.svg'
                                    alt='Free Delivery'
                                    layout='responsive'
                                    width='68'
                                    height='68'
                                />
                            </div>
                            <p className='reason-title'><span className='number'>4.</span> Free Delivery</p>
                            <p className='reason-content'>Free delivery & installation is included with all orders. A two person, white glove delivery service will set up your chair.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-4.jpg'
                                alt='Reason 4 - Free Delivery'
                                layout='responsive'
                                width='800'
                                height='800'
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'>                            
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/trade-in.svg'
                                    alt='£200 Trade in Offer'
                                    layout='responsive'
                                    width='68'
                                    height='68'
                                />
                            </div>
                            <p className='reason-title'><span className='number'>5.</span> Save £200</p>
                            <p className='reason-content'>If you trade-in your old furniture, we’ll donate it to the <span className='bhf-red'>British Heart Foundation</span> and give you £200 off your new product.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-5.jpg'
                                alt='Reason 5 - Save £200'
                                layout='responsive'
                                width='800'
                                height='800'
                            />
                            <div className='bhf-overlay'>
                                <Image 
                                    src='/bhf/supporting-bhf-overlay.svg'
                                    alt='Supporting The British Heart Foundation'
                                    width='159'
                                    height='73'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className='orphan-con-reg'>
                    <Image
                        src='/graphics/half-price-sale-horizontal.svg'
                        alt='Half Price Sale'
                        layout='responsive'
                        width='750'
                        height='389'
                    />
                </div> */}
                <OfferBanners orphan={true} />
                <div className='occupational-therapist orphan-con-reg orphan-padding'>
                    <div className='image-wrapper'>
                        <Image
                            src='/occupational-therapist/sam-shann-circle.png'
                            alt='Samantha Shann'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                        <p className='title'>Meet Samantha Shann</p>
                        <p className='sub-title'>Our Occupational Therapist</p>
                        <p>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
                        <button className='play-button' onClick={() => setIsOpen(true)}>
                            <div className='icon'>
                                <Image
                                    src='/buttons/watch-play-btn.svg'
                                    alt='Play button'
                                    layout='responsive'
                                    width='43'
                                    height='30'
                                />
                            </div>
                            <p>Watch our video</p>
                        </button>
                        <div className='logos-container'>
          <div className='logo'>
            <Image 
              src='/occupational-therapist/logos/the-ot-service.png'
              alt='The OT service'
              
              width='90'
              height='54'
            />
          </div>
          <div className='logo'>
            <Image 
              src='/occupational-therapist/logos/wfot.svg'
              alt='World Federation of Occupational Therapists'
              
              width='83'
              height='55'
            />
          </div>
          <div className='logo'>
            <Image 
              src='/occupational-therapist/logos/hcpc.png'
              alt='Health & Care Professions Council'
              
              width='140'
              height='39'
            />
          </div>
          <div className='logo'>
            <Image 
              src='/occupational-therapist/logos/rcot.png'
              alt='Royal College of Occupational Therapists'
              
              width='120'
              height='38'
            />
          </div>
        </div>
                </div>
            {/* <div className='occupational-therapist orphan-con-reg orphan-padding'>
                <div className='content'>
                    <p className='subheading'>Meet Samantha Shann</p>
                    <h6>Our Occupational Therapist</h6>
                    <div className='mobile-image'>
                        <Image 
                            src='/occupational-therapist/sam-shann-circle.png'
                            alt='Samantha Shann'
                            width={150}
                            height={150}
                        />
                    </div>
                    <p className='content-p'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
                    <p className='partnered-with'>Partnered with</p>
                    <div className="logo-wrapper">
                        <Image 
                            src='/occupational-therapist/ukts-logo.png'
                            alt='UK Therapy Services'
                            width={206}
                            height={33}
                        />
                    </div>
                </div>
                <div className='image-wrapper'>
                    <Image 
                        src='/occupational-therapist/sam-shann-2.png'
                        alt='Sam Shann'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
            </div> */}
            <div className='occupational-therapist-quote bg-dark-green-1'>
                <div className='orphan-con-reg'>
                    <p className='subheading'>Recommended and approved by our</p>
                    <h6>Occupational Therapists</h6>
                    <div className='ot-quote'>
                        <p className='quote-mark mark-left'>“</p>
                        <p className='quote'>Too much standing or sitting can lead to poor circulation. A high Leg Lift raises the ankles above the level of your heart which helps the blood back to the heart, meaning your heart is not having to work as hard</p> 
                        <p className='quote-mark mark-right'>”</p>
                    </div>
                    <p className='author'>Samantha Shann</p>
                </div>
            </div>
            {/* <div className='join-oak-tree orphan-con-reg orphan-padding'>
                <h6>Join The Oak Tree Family</h6>
                <p className='subheading'>See how our customers transformed their lives with an Oak Tree rise and recline chair…</p>
                <div className='cx-grid'>
                    <OtFamily productType='chair' />
                    <div className="carousel-pagination" id='ot-family-pagination'></div>
                </div>
            </div> */}
            <div className='our-partners orphan-con-reg'>
                <p>Our Partners</p>
                <div className='logo-grid'>
                    <div className='partner-logo'>
                        <Image 
                            src='/images/landing-pages/partner-logos/bfm.png'
                            alt='British Furniture Manufacturers'
                            layout='responsive'
                            width={206}
                            height={79}
                        />
                    </div>
                    <div className='partner-logo'>
                        <Image 
                            src='/images/landing-pages/partner-logos/rehacare.png'
                            alt='Rehacare Design awards'
                            layout='responsive'
                            width={206}
                            height={79}
                        />
                    </div>
                    <div className='partner-logo'>
                        <Image 
                            src='/images/landing-pages/partner-logos/furniture-omb.png'
                            alt='Furniture Ombudsman'
                            layout='responsive'
                            width={206}
                            height={79}
                        />
                    </div>
                    <div className='partner-logo'>
                        <Image 
                            src='/images/landing-pages/partner-logos/bhf.png'
                            alt='British Heart Foundation'
                            layout='responsive'
                            width={206}
                            height={79}
                        />
                    </div>
                    <div className='partner-logo'>
                        <Image 
                            src='/images/landing-pages/partner-logos/investors-in-people.png'
                            alt='Investors in People'
                            layout='responsive'
                            width={206}
                            height={79}
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
} 


export default RequestOurChairBrochure; 