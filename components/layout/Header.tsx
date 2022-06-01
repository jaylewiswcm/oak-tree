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
                <div className='trustpilot-logo'>
                    <Image
                      src='/trustpilot/trustpilot-header-logo.svg'
                      alt='Trust pilot rated 4.5 stars'
                      layout='responsive'
                      width='106.78'
                      height='39.12'
                    />
                </div>
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
                <div className='search-bar'>
                    <form action="">
                        <div className='input-wrapper'>
                        <input type="text" id='search-bar' placeholder='Search Products, Posts and Pages...'/>
                        <label htmlFor='search-bar'>Search</label>
                        <input type="submit" value=''/>
                        </div>
                    </form>
                </div>
                <div className='header-phone-number'>
                   <p className='number-support'>Questions? Call us <b>free</b> today:</p>
                   <p className='number'>0800 094 999</p>
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
                {/* <div className='header-phone-number'>
                   <p className='number-support'>Call us <b>free</b> on:</p>
                   <p className='number'>0800 094 999</p>
                </div>  */}
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
            <div className='index-usp-banner'>
          <div className='inner-div'>
            <div className='usp-item'>
              <div className='icon-wrapper'>
                <Image 
                  src='/icons/collection-usps/made-in-britain-new.svg'
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
                  src='/icons/collection-usps/trade-in-new.svg'
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
                  src='/icons/collection-usps/free-delivery.svg'
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
                  src='/icons/collection-usps/warranty.svg'
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