import React from 'react'
import Link from 'next/link';
// Components
import Logo from '../assets/Logo';

const Footer = () => {
    const toggleFooterNav = () => {

    }
    return (
        <footer>
            <div className='container-regular'>
                <div className="email-signup">
                    <h6>For Exclusive Offers</h6>
                    <p>Sign up to our newsletter</p>
                    <form action="">
                        <input type="text" placeholder='Enter your Email Address'/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div className="footer-navigation">
                    <ul>
                        <li><p className="list-header">About Oak Tree</p></li>
                        <li><Link href='/about'><a>About Oak Tree Mobility</a></Link></li>
                        <li><Link href='/occupational-therapist'><a>Meet Our Occupational Therapist</a></Link></li>
                        <li><Link href='/testimonials-and-reviews'><a>Testimonials and Reviews</a></Link></li>
                        <li><Link href='/delivery-and-installation'><a>Delivery and Installation</a></Link></li>
                        <li><Link href='/british-made'><a>British Made</a></Link></li>
                    </ul>
                    <ul>
                        <li><p className="list-header">Prices Explained</p></li>
                        <li> <Link href='/prices-explained'><a>Prices Explained</a></Link></li>
                        <li><Link href='/trade-in'><a>Trade In</a></Link></li>
                        <li><Link href='/vat-exempt'><a>VAT Exempt Eligibilty</a></Link></li>
                    </ul>
                    <ul>
                        <li><p className="list-header">Chairs</p></li>
                        <li><Link href='/rise-and-recline-chairs'><a>Recliner Chairs</a></Link></li>
                        <li> <Link href='/rise-and-recline-chairs'><a>Riser Recliner Chairs</a></Link></li>
                        <li> <Link href='/rise-and-recline-chairs'><a>Armchairs</a></Link></li>
                        <li> <Link href='/rise-and-recline-chairs'><a>All Chairs</a></Link></li>
                    </ul>
                    <ul>
                        <li><p className="list-header">Beds</p></li>
                        <li><Link href='/adjustable-beds'><a>Adjustable Beds</a></Link></li>
                        <li><Link href='/adjustable-beds'><a>Headboards</a></Link></li>
                        <li><Link href='/adjustable-beds'><a>All Beds</a></Link></li>
                    </ul>
                    <ul>
                        <li><p className="list-header">Bath Lifts</p></li>
                        <li><Link href='/bath-lifts'><a>Bath Lift Range</a></Link></li>
                        <li><Link href='/bath-lifts'><a>The Riveira Plus</a></Link></li>
                        <li><Link href='/bath-lifts'><a>Oak Tree Bath Lifts</a></Link></li>
                    </ul>
                </div>
                {/* <div className='mobile-footer-navigation'>
                    <div className='mobile-logo'>
                        <Logo colour='original' />
                    </div>
                    <button onClick={() => toggleFooterNav()}>About Oak Tree</button>
                    <ul >
                        <li><a>About Oak Tree Mobility</a></li>
                        <li><a>Meet Our Occupational Therapist</a></li>
                        <li><a>Testimonials and Reviews</a></li>
                        <li><a>Delivery and Installation</a></li>
                        <li><a>British Made</a></li>
                    </ul>
                    <button>Our Products</button>
                    <ul>
                        <li><a>Price Guide for Chairs</a></li>
                        <li><a>Price Guide for Beds</a></li>
                        <li><a>Trade In</a></li>
                        <li><a>VAT Exempt Eligibilty</a></li>
                    </ul>
                    <button>Prices Explained</button>
                    <ul>
                        <li><a>Price Guide for Chairs</a></li>
                        <li><a>Price Guide for Beds</a></li>
                        <li><a>Trade In</a></li>
                        <li><a>VAT Exempt Eligibilty</a></li>
                    </ul>
                    <div className='mobile-social'>
                        <div className='social-icon'>
                            <Link href='/'>
                            <a></a>
                            </Link>
                        </div>
                        <div className='social-icon'>
                            <Link href='/'>
                                <a></a>
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className="footer-footnote">
                    <div className="logo">
                        <Logo colour='original' />
                    </div>
                    <div className="social-icons"></div>
                </div>
            </div>
                <div className="footer-details">
                    <div className="container-regular">
                        <p>© Copyright 2021 Oak Tree Mobility Ltd. Terms & Conditions. Read our Cookie policy</p>
                        <div className="link-wrapper">
                            <Link href='/'>
                                <a>Modern Slavery Statement</a>
                            </Link>
                            <Link href='/'>
                                <a>Privacy and Cookies Policy</a>
                            </Link>
                        </div>
                        <p>Oak Tree Mobility Limited. Registered Office: 2nd Floor, St James Court, 9/12 St James Parade, Bristol, BS1 3LH, United Kingdom.</p>
                        <p>Registered Number: 06829860. Registered in England and Wales </p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;