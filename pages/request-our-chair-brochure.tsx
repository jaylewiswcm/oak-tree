import React from 'react'
import Image from 'next/image';
// Components
import Previous from '../components/elements/buttons/Previous';
import Next from '../components/elements/buttons/Next';
import Tick from '../components/elements/icons/Tick';
import Testimonial from '../components/elements/testimonials/Testimonial';
import ReviewCapsule from '../components/elements/reviews/ReviewCapsule';
import OrphanReasons from '../components/elements/components/OrphanReasons';
import SideForm from '../components/forms/SideForm';

const requestOurChairBrochure = () => {
    return (
        <div className="orphan-brochure-wrapper container-regular">
            <div className='orphan-content'>
                <div className='orphan-hero'>
                    <Image 
                        src='/images/orphan/chair/chair-hero.png'
                        alt='Chair hero'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='fill'
                    />
                </div>
                <div className='orphan-header'>
                    <h1 className='section-heading'>Transform Your Life with an Oak Tree Mobility Chair</h1>
                    <p className='section-subheading'>Get your new Autumn 2022 brochure today!</p>
                </div>
                <div className='image-wrapper chair-showcase'>
                        <Image 
                            src='/images/orphan/chair/chair-hero.png'
                            alt='Chair hero'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='fill'
                        />
                    </div>
                <div className='orphan-section'> 
                    <h2 className='section-heading'>Rise, Recline, Relax</h2>
                    <p className='section-subheading'>With and Oak Tree Rise and Recline Chair</p>
                    <div className='health-grid'>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/images/icons/health/relaxes-muscles.svg'
                                    alt='Relaxes Muscles'
                                    width='70'
                                    height='70'
                                />
                            </div>
                            <p className='health-title'>Relieves Back Pain</p>
                        </div>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                src='/images/icons/health/hip-and-knees.svg'
                                alt='Support Hip & Knees'
                                width='70'
                                height='70'
                                />
                            </div>
                            <p className='health-title'>Support Hip & Knees</p>
                        </div>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/images/icons/health/aids-breathing.svg'
                                    alt='Aids Breathing'
                                    width='70'
                                    height='70'
                                />
                            </div>
                            <p className='health-title'>Aids Breathing</p>
                        </div>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                        src='/images/icons/health/circulation.svg'
                                        alt='Improves Circulation'
                                        width='70'
                                        height='70'
                                />
                            </div>
                            <p className='health-title'>Improves Circulation</p>
                        </div>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/images/icons/health/improves-sleep.svg'
                                    alt='Improves Sleep'
                                    width='70'
                                    height='70'
                                />
                            </div>
                            <p className='health-title'>Improves Sleep</p>
                        </div>
                        <div className='health-item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/images/icons/health/relaxes-muscles.svg'
                                    alt='Relaxes Muscles'
                                    width='70'
                                    height='70'
                                />
                            </div>
                            <p className='health-title'>Relaxes Muscles</p>
                        </div>
                    </div>
                </div>
                <div className='orphan-quote bg-light-green'>
                    <p className='quote'>"When my chair came, it was absolutely wonderful to sit in. For the first time of ages, I felt really comfortable."</p>
                    <p className='quote-author'>Mrs Atkins</p>
                    <p className='quote-location'>Bristol</p>
                </div>  
                <div className='orphan-section'>
                    <h3 className='section-heading'>Our New Autumn 2022 Brochure</h3>
                    <div className='image-wrapper brochure-image-wrapper'>
                        <Image 
                            src='/images/brochure/small-brochure.png'
                            alt='Oak Tree Brochure'
                            width='100'
                            height='50'
                        />
                    </div>
                    <div className='brochure-reason'>
                        <div className='number'>1.</div>
                        <p>Browse our luxury styles, with <span className='oaktree-green'>over 1000 fabrics and leather</span></p>
                    </div>
                    <div className='brochure-reason'>
                        <div className='number'>2.</div>
                        <p> <span className='oaktree-green'>Personalise your chair</span> with superb accessories such as heat and massage</p>
                    </div>
                    <div className='brochure-reason'>
                        <div className='number'>3.</div>
                        <p>Discover more about <span className='oaktree-green'>our clever motors</span> and how they can help you</p>
                    </div>
                </div>
                <div className='orphan-section'>
                    <h4 className='section-heading'>Heare what our customers have to say</h4>
                    <div className='testimonial-carousel'>
                        <div className='testimonial-item'>
                            <div className='image-wrapper'>
                                <Image 
                                    src='/images/testimonials/cx-1.png'
                                    alt='testimonial'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                            <div className='bg-gradient'></div>
                            <div className='cx-details'>
                                <p className='cx-name'>Mr Andrews</p>
                                <p className='cx-product'>The Oak Chair</p>
                                <p className='cx-location'>London</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='orphan-section'>
                <div className='trustpilot-logo'>
                    <div className='tp-logo-wrapper'>
                        <Image 
                            src='/trustpilot/trustpilot-logo-slim.svg'
                            alt='Trustpilot'
                            width='170'
                            height='41'
                        />
                    </div>
                    <p>Rated Excellent</p>
                    <div className='tp-stars'>
                        <Image
                            src='/trustpilot/stars-4_5.svg'
                            alt='Rated 4.5 stars'
                            width='176'
                            height='32'
                        />
                    </div>
                </div>
                <div className="tp-carousel">
                    <div className="tp-review">
                        <div className='tp-head'>
                            <div className='tp-rating'>
                                <Image 
                                    src='/trustpilot/review-stars-5.svg'
                                    alt='Rating 5 star'
                                    width='118'
                                    height='19'
                                />
                            </div>
                            <p className='tp-headline'>We were very pleased with the visit</p>
                        </div>
                        <div className='tp-content'>
                            <p>We were very pleased with the visit from your representative Mr Lee Wainwright, who came to see us recently. We needed to replace some inherited orthopaedic furniture with new chairs, and Lee’s visit was extremely helpful. He arrived promptly, and impressed us with his very professional manner throughout the evening. </p>
                        </div>
                        <div className="tp-footer">
                            <p className='tp-author'>John Davies</p>
                            <p className='tp-date'>3 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="orphan-section">
                <h5 className='section-heading'>5 Reasons to choose an Oak Tree Rise and Recliner</h5>    
                <div className='reason-grid'>
                    <div className="reason">
                        <div className='icon-wrapper'>
                            <Image
                                src='/images/icons/reasons/british-made.svg'
                                alt='British Made'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className='reason-title'>
                            <p className='number'>1.</p>
                            <p className='title'>British Made</p>
                        </div>
                        <p className='reason-content'>Our furniture is proudly handmade in Great Britain by skilled craftspeople, using only the finest materials.</p>
                    </div>
                    <div className="reason">
                        <div className='icon-wrapper'>
                            <Image
                                src='/images/icons/reasons/high-leg-lift.svg'
                                alt='High Leg Lift'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className='reason-title'>
                            <p className='number'>2.</p>
                            <p className='title'>Our Unique High Leg Lift</p>
                        </div>
                        <p className='reason-content'>If you suffer from poo circulation and swollen ankles, our patented high leg lift will make the difference.</p>
                    </div>
                    <div className="reason">
                        <div className='icon-wrapper'>
                            <Image
                                src='/images/icons/reasons/made-to-fit.svg'
                                alt='Made to Fit'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className='reason-title'>
                            <p className='number'>3.</p>
                            <p className='title'>Made to Fit</p>
                        </div>
                        <p className='reason-content'>Our chairs are made to fit your exact specifications, so they suit your size, material and comfort preferences perfectly.</p>
                    </div>
                    <div className="reason">
                        <div className='icon-wrapper'>
                            <Image
                                src='/images/icons/reasons/delivery.svg'
                                alt='Delivery'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className='reason-title'>
                            <p className='number'>4.</p>
                            <p className='title'>Free Delivery</p>
                        </div>
                        <p className='reason-content'>Free delivery & installation is included with all orders. A two person, white glove delivery service will set up your chair.</p>
                    </div>
                    <div className="reason">
                        <div className='icon-wrapper'>
                            <Image
                                src='/images/icons/reasons/bhf.svg'
                                alt='British Heart Foundation'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className='reason-title'>
                            <p className='number'>5.</p>
                            <p className='title'>Save £200</p>
                        </div>
                        <p className='reason-content'>If you trade-in your old furniture, we’ll donate it to the British Heart Foundation and give you £200 off your new product.</p>
                    </div>
                </div>
            </div>  
            </div>
            {/* <div className="orphan-content">
                    <div className="orphan-hero">
                        <Image src='/images/orphan/chair/chair-hero.png' alt='Chair Living Room' layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                    <div className='orphan-intro'>
                        <p className='subheading green-4'>Get your new Autumn 2021 brochure today!</p>
                        <h1 className="heading white">Transform Your Life with an<br/>Oak Tree Mobility Chair</h1>
                    </div>
                    <section className='orphan-section container-p'>
                        <h2 className='heading'>Rise, Recline, Relax</h2>
                        <p className='subheading green-2'>With an Oak Tree Chair</p>
                        <div className='seconndary-hero'></div>
                        <ul className='usp-grid'>
                            <li>
                                <div className='icon-wrapper'><Tick colour='green'/></div>
                                <p>Improve Circulation</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'><Tick colour='green'/></div>
                                <p>Support hip & knees</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'><Tick colour='green'/></div>
                                <p>Reduce swelling</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'><Tick colour='green'/></div>
                                <p>Pressure relief</p>
                            </li>
                            <li>
                                <div className='icon-wrapper'><Tick colour='green'/></div>
                                <p>Relieve back pain</p>
                            </li>
                        </ul>
                    </section>
                    <section className='orphan-section container-wide bg-green-1'>
                        <div className='quote-container'>
                            <div className='button-wrapper'>
                                <Previous id='chair-quote-prev' classname='' img='no-bg'/>
                            </div> 
                            <div className='quote-carousel'>
                                <div className='quote'>
                                    <div className='quote-mark mark-open'>
                                        <Image 
                                            src='/images/icons/quote-1.svg'
                                            alt='Quote mark open'
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center'
                                        />
                                    </div>
                                    <div className='quote-mark mark-close'>
                                        <Image 
                                            src='/images/icons/quote-2.svg'
                                            alt='Quote mark open'
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center'
                                        />
                                    </div>
                                    <p className='content'>When my chair came, it was absolutely wonderful to sit in. For the first time for ages, I felt really comfortable. </p>
                                    <p className='name green-4'>Mrs Atkins</p>
                                    <p className='place green-4'>Bristol</p>
                                    
                                </div>    
                            </div>  
                            <div className='button-wrapper'>
                                <Next id='chair-quote-next' classname='' img='no-bg'/>
                            </div>
                        </div>
                    </section>
                    <section className='orphan-section'>
                            <p className='subheading green-2'>Our New Autumn</p>
                            <h3 className='heading green-1'>2021 Brochure</h3>
                        <div className='inner-flex'>
                            <ul>
                                <li>
                                    <div className='icon-wrapper'><Tick colour='green'/></div>
                                    <p>Browse our luxury styles, with over 100 fabrics and leather</p>
                                </li>
                                <li>
                                    <div className='icon-wrapper'><Tick colour='green'/></div>
                                    <p>Personalise your chair with superb accessories such as heat and massage</p>
                                </li>
                                <li>
                                    <div className='icon-wrapper'><Tick colour='green'/></div>
                                    <p>Discover more about our clever motors and how they can help you</p>
                                </li>
                            </ul>
                            <div className='image-wrapper'>
                                <Image src='/images/orphan/chair/chair-brochure.png' alt='Chair Brochure' width='375' height='452' />
                            </div>
                        </div>
                       
                    </section>
                    <section className='orphan-section'>
                            <p className='subheading green-2'>Our Testimonials</p>
                            <h3 className='heading green-1'>Hear what our<br />customers have to say</h3>
                            <div className='orphan-testimonials'>
                            
                            </div>
                    </section>
                    <section className='orphan-section'>
                            <p className='subheading green-2'>TrustScore 4.6 | 1,252 reviews</p>
                            <h3 className='heading green-1'>Rated Excellent</h3>
                            <ReviewCapsule />
                    </section>
                    <section className='orphan-section'>
                            <p className='subheading green-2'>Why Oak Tree</p>
                            <h3 className='heading green-1'>5 Reasons to choose an<br/>Oak Tree Rise & Recliner</h3>
                            <div className='reasons-grid'>
                                <OrphanReasons 
                                    index='1.'
                                    title='British Made'
                                    content='Our furniture is proudly handmade in Great Britain by skilled craftspeople, using only the finest materials.'
                                />
                                <OrphanReasons 
                                    index='2.'
                                    title='Our Unique High Leg Lift'
                                    content='If you suffer from poor circulation & swollen ankles, our patented high leg lift will make the difference.'
                                />
                                <OrphanReasons 
                                    index='3.'
                                    title='Made To Fit'
                                    content='Our chairs are made to fit your exact specifications, so they suit your size, material and comfort preferences perfectly.'
                                />
                                <OrphanReasons 
                                    index='4.'
                                    title='Free Delivery & Installation'
                                    content='Free delivery & installation is included with all orders. A two person, white glove delivery service will set up your chair.'
                                />
                                <OrphanReasons 
                                    index='5.'
                                    title='Save £200'
                                    content='If you trade-in your old furniture, we’ll donate it to the British Heart Foundation and give you £200 off your new product.'
                                />
                                <div className='reasons-imagery'></div>
                            </div>
                            <div className='reasons-button-wrapper'>
                                <Previous img='no-bg' id='' classname=''/>
                                <Next img='no-bg' id='' classname=''/>
                            </div>
                    </section>
                    <section className='orphan-section bg-pink-5 sale-banner'>
                        <p className='subheading pink-1'>Limited Time only</p>
                        <h3 className='heading pink-3'>Half Price Sale</h3>
                        <p className='sale-content pink-1'>Get your FREE copy of our very latest brochure and enjoy our special offers…</p>
                        <p className='small-print pink-1'>*Half price sale offer valid on all second items. Half price sale item must be of the same value or less than your chosen item and must be ordered at the same time. Offer ends 31st August 2021.</p>
                    </section> 
                    <section className='orphan-section bg-green-1 op-recommended'>
                        <p className='subheading green-4'>Recommended and approved by</p>
                        <h3 className='heading white'>Occupational Therapists</h3>
                    </section>
                    <section className='orphan-section flex-row'>
                        <div className='op-content'>
                            <p className='subheading green-3'>Meet</p>
                            <h3 className='heading green-1'>Samantha Shann</h3>
                            <div className='op-image mobile-op-image'>
                                <Image 
                                    src='/images/occupational-therapist/sam-1.png' 
                                    alt='Samantha Shann' 
                                    layout='intrinsic'
                                    width='282'
                                    height='374'
                                />
                            </div>
                            <p className='content'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
                        </div>
                        <div className='op-image'>
                            <Image 
                                src='/images/occupational-therapist/sam-1.png' 
                                alt='Samantha Shann' 
                                layout='intrinsic'
                                width='282'
                                height='374'
                            />
                        </div>
                    </section>
                    <section className='orphan-section'>
                            <p className='subheading green-3'>Come and Join</p>
                            <h3 className='heading green-1'>The Oak Tree Family</h3>
                            <div className='customer-grid'>
                        <div className='customer-item'>
                            <div className='image-wrapper'>
                                <Image src='/images/orphan/chair/mrs-baker.jpg' alt='Mrs Baker'layout="fill" objectFit='cover' objectPosition='center'/>
                            </div>
                            <div className='overlay-bg'></div>
                            <div className='overlay'>
                                <p>Grace Baker loved her home demo of our rise and recline chair!</p>
                            </div>
                            <div className='customer-info'>
                                <p className='customer-name'>Grace Baker</p>
                                <div className='info-icon'>i</div>
                            </div>
                        </div>
                        <div className='customer-item'>
                            <div className='image-wrapper'>
                                <Image src='/images/orphan/chair/mrs-hughes.jpg' alt='Mrs Baker'layout="fill" objectFit='cover' objectPosition='center'/>
                            </div>
                            <div className='overlay-bg'></div>
                            <div className='overlay'>
                                <p>A very happy Mrs Hughes, who is seen here putting her feet up</p>
                            </div>
                            <div className='customer-info'>
                                <p className='customer-name'>Mrs Hughes</p>
                                <div className='info-icon'>i</div>
                            </div>
                        </div>
                        <div className='customer-item'>
                            <div className='image-wrapper'>
                                <Image src='/images/orphan/chair/mrs-swift.jpg' alt='Mrs Baker' layout="fill" objectFit='cover' objectPosition='center'/>
                            </div> 
                            <div className='overlay-bg'></div>
                            <div className='overlay'>
                                <p>Mrs Swift found our demo chair a bit too comfortable!</p>
                            </div>
                            <div className='customer-info'>
                                <p className='customer-name'>Mrs Swift</p>
                                <div className='info-icon'>i</div>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className='orphan-section orphan-partners'>
                        <h3 className='heading green-1'>Our Partners</h3>
                        <div className='partner-grid'></div>
                    </section> 
            </div> */}

            <SideForm classname='sticky-brochure' />
            {/* <div className='sticky-brochure'>
                <div className='info-and-image'>
                <div className='image-wrapper'>
                        <Image 
                            src='/images/brochure/small-brochure.png'
                            alt='brochure'
                            layout='intrinsic'
                            width='199'
                            height='120'
                        />
                    </div>
                    <h1 className='heading'>Request Your <span className='pink-3'>Free</span> Brochure</h1>
                    <p className='info'>Get our new brochure delivered to your door!</p>
                </div>
                <form action="">
                    <p className='label'>Choose your title</p>
                    <div className='title-input-wrapper'>
                        <span className='title'>
                            <input type="radio"
                                name="title" 
                                value="mrs" 
                                id='mrs'/>
                            <label htmlFor="mrs">Mrs</label>
                        </span>
                        <span className='title'>
                            <input type="radio"
                                name="title" 
                                value="ms" 
                                id='ms'/>
                            <label htmlFor="ms">Ms</label>
                        </span>
                        <span className='title'>
                            <input type="radio"
                                name="title" 
                                value="mr"
                                id='mr' />
                            <label htmlFor="mr">Mr</label>
                        </span>
                        <span className='title'>
                            <input type="radio"
                                name="title" 
                                value="miss"
                                id='miss' />
                            <label htmlFor="miss">Miss</label>
                        </span> 
                    </div>
                    <div className='form-row'>
                        <div className='input-wrapper'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" placeholder='First Name' name='fname' id='fname'/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" placeholder='Last Name' name='lname' id='lname'/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='input-wrapper address-wrapper'>
                            <label htmlFor="address">First Line of Address</label>
                            <input type="street" placeholder='First Line of Address' name='address' id='address'/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="post_code">Postal Code</label>
                            <input type="zip" placeholder='Postal Code' name='post_code' id='post_code'/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='input-wrapper'>
                            <label htmlFor="number">Telephone Number</label>
                            <input type="tell" placeholder='Telephone Number' name='number' id='number'/>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder='Email Address' name='email' id='email'/>
                        </div>
                    </div>
                    <div className='data-protection'>
                        <input type="checkbox" name='data-protect' id='data-protect'/>
                        <label htmlFor="data-protect">Tick this box if you would prefer NOT to receive offers from carefully selected third parties. To learn more, please read our privacy policy.</label>
                    </div>
                    <input type="submit" id='submit' value='Order Brochure' />
                </form>
            </div> */}
          <div className='orphan-mobile-cta'>
              <button>Request a Free Brochure</button>
          </div>
        </div>
    )
}


export default requestOurChairBrochure; 