import React from 'react'
import Image from 'next/image';
// Components
import Previous from '../components/elements/buttons/Previous';
import Next from '../components/elements/buttons/Next';
import Tick from '../components/elements/icons/Tick';
import Testimonial from '../components/elements/testimonials/Testimonial';
import ReviewCapsule from '../components/elements/reviews/ReviewCapsule';
import OrphanReasons from '../components/elements/components/OrphanReasons';

const requestOurChairBrochure = () => {
    return (
        <div className="orphan-brochure-wrapper container-regular">
            <div className="orphan-content">
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
                                <Testimonial name='Mr Groger' index='1' location='Bristol' date='21st September 2021'/>
                                <Testimonial name='Mr Atkins' index='2' location='London' date='29th September 2021'/>
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
        
                    {/* <div className='container-p'>
                        <div className="brochure-hero-title">
                            <h1 className="orphan-heading">Transform Your Life with an<br/>Oak Tree Mobility Chair</h1>
                            <p>Get your new Autumn 2021 brochure today!</p>
                        </div>
                        <section className="brochure-usps">
                            <div className='usp-split'>
                                <h2 className='orphan-heading'>Rise,<br/><span className='green-3'>Recline,</span><br/><span className='green-4'>Relax</span></h2>
                                <ul>
                                    <li><span className="icon"></span><p>Improve Circulation</p></li>
                                    <li><span className="icon"></span><p>Reduce Swelling</p></li>
                                    <li><span className="icon"></span><p>Relieve Back Bain</p></li>
                                    <li><span className="icon"></span><p>Support hips & Knees</p></li>
                                    <li><span className="icon"></span><p>Pressure Relief</p></li>
                                </ul>
                            </div>
                            <div className="image-wrapper">
                                <Image src='/images/orphan/chair/chair-usps.png' alt='Smiling Lady on Reclining chair' layout="fill" objectFit='cover' objectPosition='center' />
                            </div>
                        </section>
                    </div>
                <section className='customer-quote'>
                    <div className='container-regular quote-inner'>
                        <div className="image-wrapper">
                            <Image src='/images/orphan/chair/mrs-atkins.png' alt='Smiling Lady on Reclining chair' layout="fill" objectFit='cover' objectPosition='center' />
                        </div>
                        <div className='quote'>
                            <div className='quote-mark-left'>
                                <Image src='/images/icons/quote-1.svg' alt='Quote mark'  width='20' height='20'/>
                            </div>
                            <p>When my chair came, it was absolutely wonderful to sit in. For the first time for ages, I felt really comfortable.</p>
                            <div className='quote-mark-right'>
                                <Image src='/images/icons/quote-2.svg' alt='Quote mark'  width='20' height='20'/>
                            </div>
                            <p className='customer-name'>Mrs Atkins</p>
                            <p className='customer-location'>Bristol</p>
                            <div className='logo-type'>
                                <Image src='/logo/logo-type.svg' alt='Oak Tree Mobilitys' width='50' height='50' />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container-p'>
                <section className='new-brochure'>
                    <div className='brochure-inner'>
                        <h3 className='orphan-heading'>Our New Autumn 2021 Brochure</h3>
                        <ul>
                            <li>
                                <div className='tick'>
                                    <Image src='/images/icons/tick-green.svg' alt='Tick 1' width='25' height='25'/>
                                </div>
                                <p>Browse our luxury styles, with over 100 fabrics and leather</p>
                            </li>
                            <li>
                            <div className='tick'>
                                    <Image src='/images/icons/tick-green.svg' alt='Tick 1' width='25' height='25'/>
                                </div>
                                <p>Personalise your chair with superb accessories such as heat and massage</p>
                            </li>
                            <li>
                            <div className='tick'>
                                    <Image src='/images/icons/tick-green.svg' alt='Tick 1' width='25' height='25'/>
                                </div>
                                <p>Discover more about our clever motors and how they can help you</p>
                            </li>
                        </ul>
                    </div>
                    <div className='image-wrapper'>
                        <Image src='/images/orphan/chair/chair-brochure.png' alt='Chair Brochure' width='375' height='452' />
                    </div>

                </section>
                </div>
                <section className='orphan-testimonials'>
                    <h4 className='orphan-heading'>Hear what our customers have to say</h4>
                    <div className='testimonial-slider'>
                        <div className='testimonial'>
                            <div className='background-image'>
                                <Image src='/images/orphan/chair/testimonial-1.png' alt='Testimonial 1' layout="fill" objectFit='cover' objectPosition='center' />
                            </div> 
                            <div className='overlay'></div>
                            <div className='play-btn'>
                                <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'></Image>
                            </div>
                            <div className='testimonial-info'>
                                <p className='name'>Mr Groger</p>
                                <p className='location'>London</p>
                                <p className='date'>12th September 2021</p>
                            </div>
                        </div>
                        <div className='testimonial'>
                            <div className='background-image'>
                                <Image src='/images/orphan/chair/testimonial-2.png' alt='Testimonial 2' layout="fill" objectFit='cover' objectPosition='center' />
                            </div> 
                            <div className='overlay'></div>
                            <div className='play-btn'>
                                <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'></Image>
                            </div>
                            <div className='play-btn'></div>
                            <div className='testimonial-info'>
                                <p className='name'>Mrs Atkins</p>
                                <p className='location'>London</p>
                                <p className='date'>25th September 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='trustpilot-reviews'>
                        <h4 className='orphan-heading'>Rated Excellent</h4>
                        <div className='star-rating'><Image src='/trustpilot/stars-5-green-3.svg' alt='Star Rating' width='180' height='40' /></div>
                        <p className='trustscore'>TrustScore <span>4.6</span> | <span>1,252</span> reviews</p>
                        <div className='review-slider'>
                            <div className='review'>
                                <div className='review-info'>
                                    <div className='avatar'></div>
                                    <div className='review-name'>
                                        <p className='name'>May McKenzie</p>
                                        <p className="age">3 days ago</p>
                                    </div>
                                    <div className='review-rating'>
                                        <Image src='/trustpilot/stars-5.svg' alt='Star rating' width='130' height='30'></Image>
                                    </div>
                                </div>
                                <div className='review-content'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container-p'>
                <section className='orphan-reasons'>
                    <h5 className='orphan-heading'>5 Reasons to choose an Oak Tree Rise & Recline</h5>
                    <div className='reason-grid'>
                        <div className='reason-item'>
                            <div className='icon-heading'>
                           
                                <div className='icon'>
                                <Image src='/images/icons/british-made.svg' alt='british Made' width='60' height='60'/>
                                </div>
                                <p className='reason-title'>British Made</p>
                            </div>
                            <p>Our furniture is proudly handmade in Great Britain by skilled craftspeople, using only the finest materials.</p>
                            <span className='number'>1.</span>
                        </div> 
                        <div className='reason-item'>
                            <div className='icon-heading'>
                        
                                <div className='icon'>
                                <Image src='/images/icons/leg-lift.svg' alt='High Leg Lift' width='60' height='60'/>
                                </div>
                                <p className='reason-title'>Our Unique<br/>High Leg Lift </p>
                            </div>
                            <p>If you suffer from poor circulation & swollen ankles, our patented high leg lift will make the difference.</p>
                            <span className='number'>2.</span>
                        </div>
                        <div className='reason-item'>
                            <div className='icon-heading'>
                                <div className='icon'>
                                    <Image src='/images/icons/made-to-fit.svg' alt='Made to Fit' width='60' height='60'/>
                                </div>
                                <p className='reason-title'>Made To Fit</p>
                            </div>
                            <p>Our chairs are made to fit your exact specifications, so they suit your size, material and comfort preferences perfectly. </p>
                            <span className='number'>3.</span>
                        </div>
                        <div className='reason-item'>
                            <div className='icon-heading'>
                                <div className='icon'>
                                    <Image src='/images/icons/delivery.svg' alt='Delivery' width='60' height='60'/>
                                </div>
                                <p className='reason-title'>Free Delivery<br />& Installation</p>
                            </div>
                            <p>Free delivery & installation is included with all orders. A two person, white glove delivery service will set up your chair.</p>
                            <span className='number'>4.</span>
                        </div>
                        <div className='reason-item'>
                            <div className='icon-heading'>
                                <div className='icon'>
                                    <Image src='/images/icons/bhf.svg' alt='British Heart Foundation' width='60' height='60'/>
                                </div>
                                <p className='reason-title'>Save £200</p>
                            </div>
                            <p>Our chairs are made to fit your exact specifications, so they suit your size, material and comfort preferences perfectly. </p>
                            <span className='number'>5.</span>
                        </div>
                        <div className='reason-item'>
                            <Image src='/images/orphan/chair/chair-reasons-image-1.png' alt='Samantha Shann'layout="fill" objectFit='cover' objectPosition='center' />
                        </div>
                    </div>
                </section>
                </div>
                <section className='orphan-sale'>
                    <div className='sale-and-brochure'>
                        <h6 className='orphan-heading'>Half Price <br/> <span>Sale!</span></h6>
                        <div className='brochure-image'>Brochure Image</div>
                    </div>
                    <p>Get your FREE copy of our very latest brochure and enjoy our special offers…</p>
                    <p className='small-print'>*Half price sale offer valid on all second items. Half price sale item must be of the same value or less than your chosen item and must be ordered at the same time. Offer ends 31st August 2021.</p>
                </section>
                <div className='container-p'>
                    <section className='orphan-occupational'>
                        <div className='image-wrapper'>
                            <Image  src='/images/orphan/chair/sam-shann.png' alt='Samantha Shann'layout="fill" objectFit='cover' objectPosition='center'/>
                        </div>
                        <div className='content'>
                            <h6 className='orphan-heading'><span>Meet</span><br/>Samantha Shann</h6>
                            <p className='secondary-title'>Occupational Therapist</p>
                            <p className='content-p'>All of our products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services Ltd. She fully tests and evaluates everything we offer, ensuring it satisfies the high standards of an independent health professional.</p>
                        </div>
                    </section>
                </div>
                <div className='occupational-banner'>
                    <h6 className='orphan-heading'>Recommended and approved by Occupational Therapists</h6>
                    <p>Samantha Shann</p>
                    <p>Occupational Therapist</p>
                </div>
                <div className='container-p'>
                <section className='orphan-join-the-family'>
                    <h6 className='orphan-heading'>Join The Oak Tree Family</h6>
                    <p className='secondary-heading'>See how our customers transformed their lives with an Oak Tree rise and recline chair...</p>
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
                <section className='orphan-partners'>
                    <h6 className='orphan-heading'>Our Partners</h6>
                    <div className='partner-grid'></div>
                </section> 
                </div> */}
            </div>
            <div className='sticky-brochure'>
               
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
            </div>
            {/* <div className='sticky-brochure'>
                <h1>Request Your <span className='red-2'>Free</span> Brochure</h1>
                <p>Get our new brochure delivered to your door</p>
                <form action="">
                    <div className="title-wrapper"> 
                       
                        <span className="title">
                            <input type="radio" id="mrs" name="mrs"/>
                            <label htmlFor="mrs">Mrs</label>
                        </span>
                        <span className="title">
                            <input type="radio" id="ms" name="ms"/>
                            <label htmlFor="ms">Ms</label>
                        </span>
                        <span className="title">
                            <input type="radio" id="mr" name="mr"/>
                            <label htmlFor="mr">Mr</label>
                        </span>
                        <span className="title">
                            <input type="radio" id="miss" name="miss"/>
                            <label htmlFor="miss">Miss</label>
                        </span>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="fname" id="fname" className="label-sm" placeholder='First Name'/>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="lname" id="lname" placeholder='Last Name' />
                    </div>
                    <div className="input-wrapper">
                        <input type="street" name="address" id="address" placeholder='Address'/>
                    </div>
                    <div className="input-wrapper">
                        <input type="zip" name="post_code" id="post_code" placeholder='Postal Code'/>
                    </div>
                    <div className="input-wrapper">
                        <input type="tel" name="number" id="number" placeholder='Phone Number' />
                    </div>
                    <div className="input-wrapper">
                        <input type="zip" name="email" id="email" placeholder='Email Address' />
                    </div>
                    <div className="data-protection-wrapper">
                        <input type="radio" name="data-protection" id="data-protection" />
                        <label htmlFor='data-protection'>Tick this box if you would prefer NOT to receive offers from carefully 
                        selected third parties. To learn more, please read our privacy policy.</label>
                    </div>
                    <input type="submit" value='Order Brochure'/>
                </form>
            </div> */}
        </div>
    )
}


export default requestOurChairBrochure; 