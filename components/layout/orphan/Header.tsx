import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Assets
import Logo from '../../assets/Logo';

const Header = () => {
    return (
        <header>
            <div className='header-inner con-reg'>
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
                    <Link  href="/"> 
                        <a className="mobile-logo">
                        <Image 
                            src='/logo/logo-mobile.svg'
                            alt='Oak Tree Mobility'
                            width='100'
                            height='37'
                        />
                        </a>
                    </Link>
                </div>
                <div className='header-bhf'>
                    <Image 
                          src='/bhf/supporting-bhf.svg'
                          alt='Oak Tree Mobility'
                          width='117.07'
                          height='49.84'
                    />
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