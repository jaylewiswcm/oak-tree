import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import Link from 'next/link'; 
import Image from 'next/image';
// Components 
import MobileNavigation from './navigation/MobileNavigation';
import DropDown from './navigation/dropdown/DropDown';
import {Menu} from './navigation/Menu';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isShown, setShow] = useState(false);

    const toggleMobileMenu = () => {
        let dd = document.body;
        dd.classList.toggle("mobile-navbar");
        setOpen(!isOpen);
    }

    return (  
        <header>
            <div className='top-header'>
                <div className='supporting-bhf'>
                    <p>Proudly Supporting</p>
                    <div className='bhf-logo'>
                        <Image
                            src='/bhf/bhf-logo.svg'
                            alt='British Heart Foundation'
                            layout='responsive'
                            width='95.98'
                            height='26.36'
                        />
                    </div>
                </div>
            </div>
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
                <Menu />
                {/* <div className='contact-us'>
                    <button className='main-cta'><p>Contact us</p></button>
                </div> */}
                <div className='header-phone-number'>
                   <p className='number-support'>Call us <b>free</b> on:</p>
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