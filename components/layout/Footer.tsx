import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Components
import Logo from '../assets/Logo';


const Footer = () => {
    
    const toggleFooterNavList = (e: any) => {
        const sibling = e.target.nextElementSibling;
        sibling.classList.toggle('ul-open')
    }
    return (
        <footer>
            <div className='con-reg email-signup-container'>
                <div className='email-signup-banner'>
                    <div className='content-and-form'>
                        <div className='content'>
                            <h6>For Exclusive Offers</h6>
                            <p>Sign up to our newsletter</p>
                        </div>
                        <div className='form-wrapper'>
                            <form action="">
                                <div className="input-wrapper">
                                    <input type="text" placeholder='Enter Email Address'/>
                                    <input type="submit" value='Subscribe'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='graphic'>
                            <Image
                                src='/graphics/email-signup.svg'
                                alt='Email Newsletter Sign Up'
                                width='253.26'
                                height='197.82'
                            />
                        </div>
                </div>
            </div>
            <div className='con-reg'>
            <div className='footer-navigation'>
                <nav>                    
                    <div className='nav-section'>
                        <div className='ul-wrapper'>
                            <div className='list-header' onClick={(e) => toggleFooterNavList(e)}>About<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
                            <ul>
                                <li className='list-link'><Link href='/about'><a>About Oak Tree Mobility</a></Link></li>
                                <li className='list-link'><Link href='/occupational-therapist'><a>Our Occupational Therapist</a></Link></li>
                                <li className='list-link'><Link href='/british-made'><a>British Made</a></Link></li>
                                <li className='list-link'><Link href='/trade-in'><a>Trade In</a></Link></li>
                                <li className='list-link'><Link href='/price-guide-chairs'><a>Price Guide Chairs</a></Link></li>
                                <li className='list-link'><Link href='/price-guide-beds'><a>Price Guide Beds</a></Link></li>
                                <li className='list-link'><Link href='/testimonials-and-reviews'><a>Testimonials and Reviews</a></Link></li>
                            </ul>
                        </div>
                        <div className='ul-wrapper'>
                            <div className='list-header'onClick={(e) => toggleFooterNavList(e)}>Customer Support<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
                            <ul>
                                <li className='list-link'><Link href='/delivery-and-installation'><a>Delivery and Installation</a></Link></li>
                                <li className='list-link'><Link href='/vat-exempt-eligibility'><a>VAT Exempt Eligibility</a></Link></li>
                            </ul>   
                        </div>
                    </div>
                    <div className='nav-section'>
                        <div className='ul-wrapper'>
                            <div className='list-header'  onClick={(e) => toggleFooterNavList(e)}>Chairs<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
                            <ul>                           
                                <li className='list-link'><Link href='/recliner-chairs'><a>Recliner Chairs</a></Link></li>
                                <li className='list-link'><Link href='/riser-recliner-chairs'><a>Riser Recliner Chairs</a></Link></li>
                                <li className='list-link'><Link href='/armchairs'><a>Armchairs</a></Link></li>
                                <li className='list-link'><Link href='/chairs'><a>All Chairs</a></Link></li>
                            </ul>
                        </div>
                        <div className='ul-wrapper'>
                            <div className='list-header'  onClick={(e) => toggleFooterNavList(e)}>Beds<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
                            <ul>
                                <li className='list-link'><Link href='/adjustable-beds'><a>Adjustable Beds</a></Link></li>
                                <li className='list-link'><Link href='/headboards'><a>Headboards</a></Link></li>
                                <li className='list-link'><Link href='/beds'><a>All Beds</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='nav-section'>
                        <div className='ul-wrapper'>
                            <div className='list-header'  onClick={(e) => toggleFooterNavList(e)}>Bath Lifts<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
                            <ul>  
                                <li className='list-link'><Link href='/bath-lifts'><a>Bath Lift Range</a></Link></li>
                                <li className='list-link'><Link href='/the-riviera-plus'><a>The Riviera Plus</a></Link></li>
                                <li className='list-link'><Link href='/oak-tree-bath-lifts'><a>Oak Tree Bath Lifts</a></Link></li>
                            </ul>
                        </div>
                        <ul className='connect mobile-social'>
                            <li className='list-header'>Connect</li>
                            <li><a href='www.facebook.com' className='facebook-blue social-link'><span className='icon'><Image src='/icons/socials/facebook.svg' alt='Facebook' width='25' height='25'/></span>Facebook</a></li>
                            <li><a href='www.youtube.com' className='youtube-red social-link'><span className='icon'><Image src='/icons/socials/youtube.svg' alt='Youtube' width='25' height='25'/></span>YouTube</a></li>
                        </ul>
                    </div>
                    <div className='nav-section desktop-social'>
                        <ul className='connect'>
                            <li className='list-header'>Connect</li>
                            <li className='list-link'><a href='www.facebook.com' className='facebook-blue social-link'><span className='icon'><Image src='/icons/socials/facebook.svg' alt='Facebook' width='25' height='25'/></span>Facebook</a></li>
                            <li className='list-link'><a href='www.youtube.com' className='youtube-red social-link'><span className='icon'><Image src='/icons/socials/youtube.svg' alt='Youtube' width='25' height='25'/></span>YouTube</a></li>
                        </ul>
                    </div>
                </nav>
                <Link href='/'>
                    <a className='logo-link'>
                    <Image 
                            src='/logo/logo.svg'
                            alt='Oak Tree Mobility'
                            width='215.42'
                            height='44.89'
                        />
                    </a>
                </Link>
            </div>
            </div>
            <div className='footer-footnote'>
                <div className='footnote-inner con-reg'>
                    <p>© Copyright 2022 Oak Tree Mobility Ltd.</p>
                    <Link href="/terms-and-conditions"><a>Terms and Conditions</a></Link>
                    <Link href="/privacy-policy"><a>Privacy</a></Link>
                    <Link href="/cookie-policy"><a>Cookie Policy</a></Link>
                    <Link href="/modern-slavery-statement"><a>Modern Slavery Statement</a></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;