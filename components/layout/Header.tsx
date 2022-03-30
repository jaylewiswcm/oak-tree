import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import Link from 'next/link'; 
import Image from 'next/image';
import MobileNavigation from './navigation/MobileNavigation';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMobileMenu = () => {
        let dd = document.body;
        console.log(dd);
        dd.classList.toggle("mobile-navbar");
        setOpen(!isOpen);
    }

    return (  
        <header>
            {/* <div className='top-header'>
                <div className='inner-wrapper con-reg'>
                    <div className='header-bhf'>
                        <Image 
                            src='/bhf/bhf-logo.svg'
                            alt='Oak Tree Mobility'
                            layout='responsive'
                            width='106'
                            height='29'
                        />
                    </div>
                    <p>Questions? Call us FREE today on:</p>
                    <Link href='tel:0800094999'><a className='number'>0800 094 999</a></Link>
                </div>
            </div> */}
            <div className='header-inner con-reg'>
                <div className="header-logo">
                    <Link href="/">
                        <a className="logo">
                        <Image 
                            src='/logo/logo.svg'
                            alt='Oak Tree Mobility'
                            layout='responsive'
                            width={215.42}
                            height={44.89}
                        />
                         </a>
                    </Link>
                </div>
                {/* <div className='header-bhf'>
                    <Image 
                          src='/bhf/supporting-bhf.svg'
                          alt='Oak Tree Mobility'
                          width='117.07'
                          height='49.84'
                    />
                </div> */}
                <nav className='main-nav'>
                    <ul>
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/about'><a>About</a></Link></li>
                        <li><Link href='/chairs'><a>Chairs</a></Link></li>
                        <li><Link href='/adjustable-beds'><a>Beds</a></Link></li>
                        <li><Link href='/bath-lifts'><a>Bath Lifts</a></Link></li>
                        <li><Link href='/express-delivery'><a>Express Delivery</a></Link></li>
                    </ul>
                </nav>
                {/* <div className='contact-us'>
                    <button className='main-cta'><p>Contact us</p></button>
                </div> */}
                <div className='header-phone-number'>
                   <p className='number-support'>Questions? Call us <b>free</b>:</p>
                   <p className='number'>0800 094 999</p>
                </div> 
                <div className='mobile-menu-btn'>
                    <button className='icon-btn' onClick={() => toggleMobileMenu()}>
                        <Image
                            src='/buttons/menu-open.svg'
                            alt='Open Menu'
                            width='40'
                            height='30'
                        />
                    </button>
                </div> 
            </div>
            <MobileNavigation isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}/>
        </header>
    )
}

export default Header;