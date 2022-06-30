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
              <div className='con-reg'>
                <p>We're rated excellent on</p>
                <div className='trustpilot-logo'>
                    <Image
                      src='/trustpilot/trustpilot-logo-heeader.svg'
                      alt='Trust pilot rated 4.5 stars'
                      layout='responsive'
                      width='160.76'
                      height='16.15'
                    />
                </div>
                <div className='supporting-bhf'>
                <p>Proudly supporting the</p>
                <div className='bhf-logo'>
                  <Image
                      src='/bhf/bhf-logo-header.svg'
                      alt='British Heart Foundation'
                      layout='responsive'
                      width='153'
                      height='28'
                    />
                </div>
                </div>
              </div>
            </div>
            <div className='header-inner main-header'>
              <div className='con-reg'>
                <div className="header-logo">
                    <Link href="/">
                        <a className="logo">
                          <div className='desktop-logo'>
                            <Image 
                                src='/logo/logo.svg'
                                alt='Oak Tree Mobility'
                                layout='responsive'
                                width={215.42}
                                height={44.89}
                            />
                          </div>
                          <div className='mobile-logo'>
                            <Image 
                                src='/logo/logo-mobile.svg'
                                alt='Oak Tree Mobility'
                                layout='responsive'
                                width={101.83}
                                height={37.29}
                            />
                          </div>
                         </a>
                    </Link>
                </div>
                <Menu />
                <div className='mobile-phone-btn mobile-header-btn'>
                    <a href='tel:0800094999' className='icon-btn'>
                        <Image
                            src='/buttons/call.svg'
                            alt='Telephone'
                            width='40'
                            height='30'
                        />
                        <p>Call Us</p>
                    </a>
                </div> 
                <div className='mobile-menu-btn mobile-header-btn'>
                    <button className='icon-btn' onClick={() => toggleMobileMenu()}>
                        <Image
                            src='/buttons/menu-open.svg'
                            alt='Open Menu'
                            width='40'
                            height='30'
                        />
                        <p>Menu</p>
                    </button>
                </div> 
                <div className='header-phone-number'>
                   <p className='number-support'>Questions? Call us <b>free</b> today:</p>
                   <p className='number'>0800 094 999</p>
                </div> 
                </div>
            </div>
            <MobileNavigation isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}/>
            <div className='index-usp-banner'>
          <div className='inner-div'>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/usps/icon-british-made-small.svg'
                  alt='British Design'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>British Design</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/usps/icon-trade-in-small.svg'
                  alt='Trade In Offer'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>Trade In Offer</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/usps/icon-free-delivery-small.svg'
                  alt='Free Delivery'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>Free Delivery</p>
            </div>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/usps/icon-warranty-small.svg'
                  alt='10 Year Warranty'
                  layout='responsive'
                  width='60'
                  height='60'
                />
              </div>
              <p>10 Year Warranty</p>
            </div>
          </div>
      </div>
        </header>
    )
}

export default Header;