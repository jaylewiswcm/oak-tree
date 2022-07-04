import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Assets
import Logo from '../../assets/Logo';

const Header = () => {
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

            <div className='header-inner orphan-header con-reg'>
                <div className="header-logo">
                    <Link  href="/">
                        <a className="logo">
                        <Image 
                            src='/logo/logo.svg'
                            alt='Oak Tree Mobility'
                            width='215.42'
                            height='44.89'
                        />
                         </a>
                    </Link>
                </div>
                
                <div className='header-phone-number orphan-header-number'>
                   <p className='number-support'>Questions? Call us <b>free</b> today:</p>
                   <p className='number'>0800 094 999</p>
                </div> 
                
                <a href="tel:0800094999" className='mobile-call-btn'>Call Us</a>
            </div>
           
        </header>
    )
}

export default Header;