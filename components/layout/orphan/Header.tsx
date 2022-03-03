import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Assets
import Logo from '../../assets/Logo';

const Header = () => {
    return (
           <header>
           <div className='top-header con-reg'>
               <div className="header-logo">
               <Link href="/">
                    <a className="logo">
                       <Image 
                           src='/logo/logo.svg'
                           alt='Oak Tree Mobility'
                           width='240'
                           height='60'
                       />
                   </a>
                </Link>
                <Link href="/"> 
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
               <div className="phone-number orphan-number-d">
                    <p>Call us Free Now</p>
                    <span className="number">0808 258 3061</span>
                </div>
                <a className="phone-cta orphan-number-m" href='tel:08082583061'>Call Us</a>   
           </div>
       </header>
    )
}

export default Header;