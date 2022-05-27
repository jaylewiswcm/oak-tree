import React from 'react'
import Image from 'next/image';
// Components
import Reviews from '../components/sections/reviews/Reviews';
import OtFamily from '../components/sections/customers/OtFamily';
// import OrphanBrochureForm from '../components/forms/OrphanBrochureForm';
import OrphanBrochureForm from '../components/forms/OrphanBrochureFormWrapper';
import Testimonials from '../components/sections/Testimonials/Testimonials';
// Images
import hero from '../public/images/products/bath-lifts/bath-lift-collection-hero.png';
import bathlift1 from '../public/images/products/bath-lifts/the-riviera/bath-lift-1.png';
import bathlift2 from '../public/images/products/bath-lifts/the-riviera/bath-lift-2.png';
import bathlift3 from '../public/images/products/bath-lifts/the-riviera/bath-lift-3.png';
import brochure from '../public/brochures/bath-lift-brochure.png';

const requestOurBathLiftBrochure = () => {
    return (
        <div className="orphan-brochure-wrapper">
            <div className='usp-header'>
                <div className='inner-wrapper con-reg'>
                <div className='usp-item'>
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
                </div>
                <div className='usp-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/landing-page/british-made.svg'
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
                            src='/icons/landing-page/10-year-warranty.svg'
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
                            src='/icons/landing-page/free-delivery.svg'
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
                            src='/icons/landing-page/trade-in.svg'
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
        <OrphanBrochureForm productType='bath-lift'/>
        <div className='content'>
            <div className='hero orphan-con-reg'>
                <Image 
                    src={hero}
                    alt='Lady in bath using bath lift'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='right'
                    quality={100}
                    priority
                />
                <div className='intro-box'>
                    <div className='inner-border'></div>
                    <h1>Transform Your Life with an Oak Tree Mobility Bath Lift</h1>
                    <p className='blue-3'>Get your new Spring 2022 brochure today!</p>
                    {/* <div className='underline'></div> */}
                </div>
            </div>
            <div className='health-benefits orphan-con-reg orphan-padding'>
                <div className='inner-wrapper'>
                <h2>Your Comfort is Our Strength</h2>
                <div className='benefits-grid bathing'>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/vectors/green-tick.svg'
                                alt='Green Tick'
                                width='35'
                                height='35'
                                layout='responsive'
                            />
                        </div>
                        <p>Quick and Simple Installation</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/vectors/green-tick.svg'
                                alt='Green Tick'
                                width='35'
                                height='35'
                                layout='responsive'
                            />
                        </div>
                        <p>Can be fitted to almost any bath</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/vectors/green-tick.svg'
                                alt='Green Tick'
                                width='35'
                                height='35'
                                layout='responsive'
                            />
                        </div>
                        <p>Enjoy sitting at the bottom of the bath</p>
                    </div>
                    <div className='health-item'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/vectors/green-tick.svg'
                                alt='Green Tick'
                                width='35'
                                height='35'
                                layout='responsive'
                            />
                        </div>
                        <p>Gently get into the bath with ease</p>
                    </div>
                </div>
                </div>
                <div className='image-wrapper orphan-con-reg'>
                   <Image 
                    src={bathlift3}
                    alt='Lady In Chair'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                   />
                </div>
            </div>
            <div className='quote bg-dark-green-1'>
                    <div className='inner-wrapper orphan-con-reg'>
                        <p className='statement'>“I didn’t know a Bath Lift would help my mum so much… she can now enjoy a hot bath once again.”</p>
                        <p className='author'>Andrew Masters</p>
                        <p className='author'>Nottingham</p>
                    </div>
            </div>
            <div className='brochure-usps orphan-con-reg orphan-padding'>
                <h3>Our New Spring 2022 Brochure</h3>
                <div className='flex-row'>
                    <div className="usp-points">
                        <ul>
                            <li>
                            <div className="num-wrapper">1.</div>
                            <p>Learn all about how a Oak Tree bath lift can <span className='oaktree-green'>change your life</span>.</p>
                            </li>
                            <li>
                            <div className="num-wrapper">2.</div>
                            <p>Take your time to <span className='oaktree-green'>discover our unique Riviera bath lift</span> with full colour photos.</p>
                            </li>
                            <li>
                            <div className="num-wrapper">3.</div>
                            <p>See all the <span className='oaktree-green'>options for installation and customisation</span> of your very own Oak Tree bath lift</p>
                            </li>
                        </ul>
                    </div>
                    <div className="brochure-wrapper">
                        <Image 
                            src={brochure}
                            alt='Chair Brochure'
                            layout='responsive'
                            width='1000'
                            height='1412'
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className='testimonials bathing orphan-con-reg orphan-padding'>
                <h4>Hear what our customers have to say</h4>
                <p className='subheading'>We believe in the power of individuality. We love that every Oak Tree customer has his or her own story to tell, and we build products to fit many different people. If you’d like to hear the stories of our customers, take a look at the testimonial videos.</p>
                <Testimonials pageType='bath-lift'/>
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
                            <p className='reason-title'><span className='number bathing '>1.</span> British Made</p>
                            <p className='reason-content'>Our Bath Lifts are proudly handmade in Great Britain by skilled engineers.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-1.png'
                                alt='Reason 1 - British Made'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'> 
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/lift-belt.svg'
                                    alt='Bath lift belt'
                                    layout='responsive'
                                    width='106'
                                    height='74'
                                />
                            </div>
                            <p className='reason-title'><span className='number bathing'>2.</span> State-of-the-art belt</p>
                            <p className='reason-content'>Gently lower yourself in and out of the bath for a truly relaxing experience.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src={bathlift2}
                                alt='Reason 2 - State of the art belt'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'> 
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/bath.svg'
                                    alt='Fitted to almost any bath'
                                    layout='responsive'
                                    width='106'
                                    height='74'
                                />
                            </div>
                            <p className='reason-title'><span className='number bathing'>3.</span> Can be fitted to almost any bath</p>
                            <p className='reason-content'>With no expensive renovations, our lifts can even be fitted to corner and stand-alone baths.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src={bathlift1}
                                alt='Reason 3 - Made To Fit'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'> 
                            <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/free-delivery.svg'
                                    alt='Free delivery'
                                    layout='responsive'
                                    width='106'
                                    height='74'
                                />
                            </div>
                            <p className='reason-title'><span className='number bathing'>4.</span> Free Delivery</p>
                            <p className='reason-content'>Free delivery & installation is included with all orders. A two person, white glove delivery service will install your bath lift.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-4.png'
                                alt='Reason 4 - Free Delivery'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                    </div>
                    <div className='reason'>
                        <div className='content'>        
                        <div className="icon-wrapper">
                                <Image 
                                    src='/icons/landing-page/trade-in.svg'
                                    alt='Trade In'
                                    layout='responsive'
                                    width='106'
                                    height='74'
                                />
                            </div>                     
                            <p className='reason-title'><span className='number bathing'>5.</span> Save £200</p>
                            <p className='reason-content'>If you trade-in your old furniture, we’ll donate it to the <span className='bhf-red'>British Heart Foundation</span> and give you £200 off your new product.</p>
                        </div>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/landing-pages/reasons-chair/reason-5.png'
                                alt='Reason 5 - Save £200'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                quality={100}
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
            <div className='orphan-con-reg'>
                    {/* <p className='subheading'>Limited Time Only</p>
                    <h6>Half Price Sale</h6>
                    <p>Get your FREE copy of our very latest brochure and enjoy our special offers…</p> */}
                         <Image
                        src='/graphics/half-price-sale-horizontal.svg'
                        alt='Half Price Sale'
                        layout='responsive'
                        width='750'
                        height='389'
                    />
                </div>
            {/* <div className='sales-banner bg-red-2'>
                
            </div> */}
            <div className='occupational-therapist orphan-con-reg orphan-padding bathing'>
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
            </div>
            <div className='occupational-therapist-quote bg-dark-green-1'>
                <div className='orphan-con-reg'>
                    <p className='subheading'>Recommended and approved by our</p>
                    <h6>Occupational Therapists</h6>
                    <div className='ot-quote'>
                        <p className='quote-mark mark-left'>“</p>
                        <p className='quote'>Bathing brings a world of benefits, from rest and relaxation to soothing away aches and pains. Yet for so many getting in and out can be a struggle that risks aggravating rather than alleviating pains. Oak Tree’s bath lift makes the whole experience easier on joints and muscles.</p> 
                        <p className='quote-mark mark-right'>”</p>
                    </div>
                    <p className='author'>Samantha Shann</p>
                </div>
            </div>
            <div className='join-oak-tree orphan-con-reg orphan-padding'>
                <h6>Join The Oak Tree Family</h6>
                <p className='subheading'>See how our customers transformed their lives with an Oak Tree Bath Lift…</p>
                <div className='cx-grid'>
                    <OtFamily productType='bath-lift'/>
                    <div className="carousel-pagination" id='ot-family-pagination'></div>
                </div>
            </div>
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
    )
} 


export default requestOurBathLiftBrochure; 