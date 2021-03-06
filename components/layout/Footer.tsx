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
                            <h6>Sign up to the Oak Tree newsletter</h6>
                            <p>We'll send you the latest edition of our magazine for absolutely <span className='yellow-3'>FREE</span>! It's packed with:</p>
                            <ul>
                                <li>
                                    <span className='tick'>
                                        <Image src='/icons/yellow-tick.svg' alt='Yellow Tick 1' layout='responsive' width='17.55' height='18.2' />
                                    </span>
                                    <p>Fascinating articles</p>
                                </li>
                                <li>
                                    <span className='tick'>
                                        <Image src='/icons/yellow-tick.svg' alt='Yellow Tick 2' layout='responsive' width='17.55' height='18.2' />
                                    </span>
                                    <p>Lifestyle and health tips</p>
                                </li>
                                <li>
                                    <span className='tick'>
                                        <Image src='/icons/yellow-tick.svg' alt='Yellow Tick 3' layout='responsive' width='17.55' height='18.2' />
                                    </span>
                                    <p>And much more!</p>
                                </li>
                            </ul>                    
                        </div>
                        <div className='form-wrapper'>
                            <form action="">
                                <div className="input-wrapper">
                                    <input type="text" placeholder='Enter Email Address'/>
                                    <input type="submit" value='Subscribe'id='subscribe-to-email'/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='graphic'>
                            <Image
                                src='/images/email-newsletter/email-newsletter.png'
                                alt='Email Newsletter Sign Up'
                                layout='responsive'
                                width='382'
                                height='223'
 
                            />
                        </div>
                </div>
            </div>
            <div className='con-reg'>
            <div className='footer-navigation'>
                <nav>  
                    {menuConfig.map((menu, index) => <FooterNav menuConfig={menu} key={index}/>)}
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
            <div className='social-container con-reg'>
                <p className='heading'>Follow us on:</p> 
                <div className='social-grid'>
                            <a href='https://www.facebook.com/OakTreeMobility/' className='social-wrapper facebook-blue' target='__blank' rel="noopener noreferrer">
                                <div className='icon desktop facebook-icon'>
                                    <Image 
                                        src='/icons/socials/facebook.svg' 
                                        alt='Facebook' 
                                        layout='responsive' 
                                        width='50' 
                                        height='50'
                                    />
                                </div>
                                <div className='icon mobile'>
                                    <Image 
                                        src='/icons/socials/facebook-mobile.svg' 
                                        alt='Facebook' 
                                        layout='responsive' 
                                        width='50' 
                                        height='50'
                                    />
                                </div>
                                <p className='facebook-blue'>Facebook</p> 
                            </a>
                            <a href='https://www.youtube.com/c/oaktreemobility' className='social-wrapper youtube-red' target='__blank' rel="noopener noreferrer">
                                <div className='icon desktop'>
                                    <Image 
                                        src='/icons/socials/youtube.svg' 
                                        alt='Youtube' 
                                        layout='responsive' 
                                        width='50' 
                                        height='50'/>
                                </div>
                                <div className='icon mobile'>
                                    <Image 
                                        src='/icons/socials/youtube-mobile.svg' 
                                        alt='Youtube' 
                                        layout='responsive' 
                                        width='50' 
                                        height='50'/>
                                </div>
                                <p className='youtube-red'>Youtube</p>   
                            </a>
                            <a href='https://www.linkedin.com/company/oak-tree-mobility' className='social-wrapper linkedin-blue' target='__blank' rel="noopener noreferrer">
                                <div className='icon desktop'>
                                    <Image 
                                        src='/icons/socials/linkedin.svg' 
                                        alt='LinkedIn' layout='responsive' width='50' height='50'/>
                                </div>
                                <div className='icon mobile'>
                                    <Image 
                                        src='/icons/socials/linkedin-mobile.svg' 
                                        alt='LinkedIn' layout='responsive' width='50' height='50'/>
                                </div>
                                <p className='linkedin-blue'>LinkedIn</p>   
                            </a>
                </div>
            </div>
            <div className='footer-footnote'>
                <div className='footnote-inner con-reg'>
                        <p>?? Copyright 2022 Oak Tree Mobility Ltd.</p>
                        <Link href="/terms-and-conditions"><a>Terms and Conditions</a></Link>
                        <Link href="/privacy-policy"><a>Privacy</a></Link>
                        <Link href="/cookie-policy"><a>Cookie Policy</a></Link>
                </div>
                <div className='reg-address con-reg'><p>Oak Tree Mobility Limited. Registered Office: 2nd Floor, St. James Court, 9/12 St James Parade, Bristol, BS1 3LH, United Kingdom. Registered Number: 06829860. Registered in England and Wales.</p></div>
            </div>
        </footer>
    )
}

export default Footer;

const menuConfig = [
    { menuHeader: 'About', menu: [
        {link: '/about', text: 'About Oak Tree Mobility' },
        { link: '/occupational-therapist', text: 'Our Occupational Therapist' },
        { link: '/trade-in', text: 'Trade In' },
        { link: '/british-made', text: 'British Made' },
        { link: '/testimonials-and-reviews', text: 'Testimonials And Reviews' },
        { link: '/modern-slavery-statement', text: 'Modern Slavery Statement' }
    ]},
    {
        menuHeader: 'Customer Support', menu: [
            { link: '/delivery-and-installation', text: 'Delivery and Installation' },
            { link: '/vat-exempt-eligibility', text: 'VAT Exempt Eligibilty' },
            { link: '/frequently-asked-questions', text: 'Frequently Asked Questions'}
        ]
    },
    { menuHeader: 'Chairs', menu: [
        {link: '/rise-and-recline-chairs', text: 'Riser Recliner Chairs' },
        {link: '/price-guide-chair', text: 'Price Guide Chairs' },
    ]},
    { menuHeader: 'Beds', menu: [
        {link: '/adjustable-beds', text: 'Adjustable Beds' },
        {link: '/price-guide-bed', text: 'Price Guide Beds' },
    ]},
    { menuHeader: 'Bath Lifts', menu: [
        {link: '/bath-lifts', text: 'Oak Tree Bath Lift' },
    ]},
  ];