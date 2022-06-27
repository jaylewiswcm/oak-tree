import React from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
// images 
import twoManDelivery from '../public/images/lifestyle/two-man-delivery.png';
import Resources from '../components/sections/resources/Resources';
import FooterCollections from '../components/sections/collections/FooterCollections';
const deliveryAndInstallation = () => {
    return (
        <>
            <NextSeo  
                title="Delivery and Installation | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
            {/* <div className='bg-dark-green-1 wave-banner'>
                <div className='con-reg'>
                    <h1 className='heading'>Delivery and Installation</h1>
                </div>
            </div> */}
            <div className='help-centre-hero'>
                <div className='con-reg inner-hero'>
                    <h1>Delivery and Installation</h1>
                    <h2>Help Centre</h2>
                    {/* <p>Everything you need to know about Oak Tree Mobility</p> */}
                </div>
            </div>

            <div className='page-intro con-reg'>
                <h2>Delivery</h2>
                <p>Once your chair or bed has been built and quality checked, our customer service team will contact you to arrange a convenient delivery date for your furniture to be delivered. </p>
            </div>
            <div className='delivery-grid con-reg'>
                <div className='del-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/delivery/icon-calender.svg'
                            alt='Calender Icon'
                            layout='responsive'
                            width='65'
                            height='65'
                        />
                    </div>
                    <p className='item-header'>Convenient Delivery Date</p>
                    <p className='item-p'>Once your chair or bed has been built and quality checked, our customer service team will contact you to arrange a delivery date.</p>
                </div>
                <div className='del-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/delivery/icon-call-time.svg'
                            alt='Call 30 minutes before'
                            layout='responsive'
                            width='65'
                            height='65'
                        />
                    </div>
                    <p className='item-header'>Call Thirty Minutes Before</p>
                    <p className='item-p'>On the day of the delivery, you can expect a call thirty minutes before your delivery to notify you they are on their way.</p>
                </div>
                <div className='del-item'>
                    <div className='icon-wrapper'>
                        <Image 
                            src='/icons/collection-usps/free-delivery.svg'
                            alt='Delivery Van Icon'
                            layout='responsive'
                            width='65'
                            height='65'
                        />
                    </div>
                    <p className='item-header'>Two-man White-glove</p>
                    <p className='item-p'>We offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds.</p>
                </div>
            </div>
            <div className='installation con-reg'>
                <h3 className='heading'>Installation</h3>
                <div className='flex-row'>
                    <div className='image-wrapper'>
                        <Image 
                            src={twoManDelivery}
                            alt='Two-man White-glove Delivery'
                            layout='responsive'
                            width='593'
                            height='552'
                            quality={100}
                            placeholder='blur'
                    />
                    </div>
                    <div className='installation-items'>
                        <div className='item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/icons/delivery/icon-package.svg'
                                    alt='Package Icon'
                                    layout='responsive'
                                    width='65'
                                    height='65'
                                /> 
                            </div> 
                            <p className='item-header'>Packaging Removed and Recycled</p>
                            <p className='item-p'>When they arrive, they will ask you where you would like your furniture to be placed. They will bring the chair or bed into your home, unwrap it, and then remove all the packaging.</p>
                        </div>
                        <div className='item'>
                            <div className='icon-wrapper'>
                                <Image 
                                    src='/icons/delivery/icon-survey.svg'
                                    alt='Survey Icon'
                                    layout='responsive'
                                    width='75'
                                    height='75'
                                /> 
                            </div> 
                            <p className='item-header'>Survey About Our Service</p>
                            <p className='item-p'>Once it is set up, they will help you familiarise yourself with the bed and its controls. When y ou are satisfied that everything is as it should be, we will ask you to complete a quick survey about our service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='returns-banner'>
                <div className="con-reg">
                    <h4>Want to return a product?</h4>
                    <p>We hope you’re happy with every purchase you make with Oak Tree Mobility, but if this isn’t the case we hope to make the returns process as simple as possible. Check our <Link href='/returns-policy'><a>returns policy here</a></Link> for details.</p>
                </div>
            </div>
            <FooterCollections />
            <Resources pageType='delivery'/>
        </>
    )
}
export default deliveryAndInstallation;


