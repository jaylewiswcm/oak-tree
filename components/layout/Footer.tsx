import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Components
import Logo from '../assets/Logo';
import { FooterNav } from './navigation/FooterNav';

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
                            <p>Sign up to our newsletter</p>
                            <h6>For Exclusive Offers</h6>
                    
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
                    <div className='graphic hide'>
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
                    {menuConfig.map((menu, index) => <FooterNav menuConfig={menu} key={index}/>)}

                    {/* <div className='nav-section desktop-social'>
                        <ul className='connect'>
                            <li className='list-header'>Connect</li>
                            <li className='list-link'><a href='www.facebook.com' className='facebook-blue social-link'><span className='icon'><Image src='/icons/socials/facebook.svg' alt='Facebook' width='25' height='25'/></span>Facebook</a></li>
                            <li className='list-link'><a href='www.youtube.com' className='youtube-red social-link'><span className='icon'><Image src='/icons/socials/youtube.svg' alt='Youtube' width='25' height='25'/></span>YouTube</a></li>
                        </ul>
                    </div> */}
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

const menuConfig = [
    { menuHeader: 'About', menu: [
        {link: '/about', text: 'About Oak Tree Mobility' },
        { link: '/occupational-therapist', text: 'Our Occupational Therapist' },
        { link: '/british-made', text: 'British Made' },
        { link: '/trade-in', text: 'Trade In' },
        { link: '/modern-slavery-statement', text: 'Modern Slavery Statement' }
    ]},
    {
        menuHeader: 'Customer Support', menu: [
            { link: '/delivery-and-installation', text: 'Delivery and Installation' },
            { link: '/vat-exempt-eligibility', text: 'VAT Exempt Eligibilty' },
            { link: '/testimonials-and-reviews', text: 'Testimonials And Reviews' }
        ]
    },
    { menuHeader: 'Chairs', menu: [
        {link: '/chairs/recliner-chairs', text: 'Recliner Chairs' },
        {link: '/chairs/riser-recliner-chairs', text: 'Riser Recliner Chairs' },
        {link: '/chairs', text: 'All Chairs' },
        {link: '/price-guide-chairs', text: 'Price Guide Chairs' },
    ]},
    { menuHeader: 'Beds', menu: [
        {link: '/adjustable-beds', text: 'Adjustable Beds' },
        {link: '/adjustable-beds', text: 'All Beds' },
        {link: '/price-guide-beds', text: 'Price Guide Beds' },
    ]},
    { menuHeader: 'Bath Lifts', menu: [
        {link: '/bath-lifts', text: 'Bath Lift Range' },
        {link: '/bath-lifts/the-riviera-plus', text: 'The Riviera Plus' },
        {link: '/bath-lifts/home-visit', text: 'Oak Tree Bath Lifts' },
    ]},
  ];