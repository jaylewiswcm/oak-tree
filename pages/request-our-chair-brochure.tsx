import React from 'react'
import Image from 'next/image';

const requestOurChairBrochure = () => {
    return (
        <div className="orphan-brochure-wrapper container-regular">
            <div className="orphan-content">
                    <div className="brochure-hero">
                        <Image src='/images/orphan/chair/chair-hero.png' alt='Chair Living Room' layout="fill" objectFit='cover' objectPosition='center' />
                    </div>
                    <div className='container-p'>
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
                </div>
            </div>
            <div className='sticky-brochure'>
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
                        {/* <label htmlFor="fname">First Name</label> */}
                        <input type="text" name="fname" id="fname" className="label-sm" placeholder='First Name'/>
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="lname">Last Name</label> */}
                        <input type="text" name="lname" id="lname" placeholder='Last Name' />
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="address">First Line of Address</label> */}
                        <input type="street" name="address" id="address" placeholder='Address'/>
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="post_code">Postal Code</label> */}
                        <input type="zip" name="post_code" id="post_code" placeholder='Postal Code'/>
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="number">Telephone Number</label> */}
                        <input type="tel" name="number" id="number" placeholder='Phone Number' />
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="email">Email Address</label> */}
                        <input type="zip" name="email" id="email" placeholder='Email Address' />
                    </div>
                    <div className="data-protection-wrapper">
                        <input type="radio" name="data-protection" id="data-protection" />
                        <label htmlFor='data-protection'>Tick this box if you would prefer NOT to receive offers from carefully 
                        selected third parties. To learn more, please read our privacy policy.</label>
                    </div>
                    <input type="submit" value='Order Brochure'/>
                </form>
            </div>
        </div>
    )
}


export default requestOurChairBrochure; 