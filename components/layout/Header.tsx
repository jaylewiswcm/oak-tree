import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import Link from 'next/link'; 
import Image from 'next/image';
// Components 
import MobileNavigation from './navigation/MobileNavigation';
import DropDown from './navigation/dropdown/DropDown';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isShown, setShow] = useState(false);
    const [menuType, setMenuType] = useState('');

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
                    <ul className='main-ul'>
                        <li><Link href='/'><a onMouseLeave={() => setMenuType('')} >Home</a></Link></li>
                        <li onMouseOver={() => setMenuType('about')} onMouseLeave={() => setMenuType('')}><Link href='/about'><a onClick={() => setMenuType('')}>About</a></Link> {menuType === 'about' && <DropDown type={menuType} keyId={0}  closeMenu={() => setMenuType('')}/>}</li>
                        <li onMouseOver={() => setMenuType('chairs')} onMouseLeave={() => setMenuType('')}><Link href='/chairs'><a onClick={() => setMenuType('')}>Chairs</a></Link> {menuType === 'chairs' && <DropDown type={menuType} keyId={1}  closeMenu={() => setMenuType('')}/>}</li>
                        <li onMouseOver={() => setMenuType('beds')} onMouseLeave={() => setMenuType('')}><Link href='/adjustable-beds'><a onClick={() => setMenuType('')}>Beds</a></Link> {menuType === 'beds' && <DropDown type={menuType} keyId={2}  closeMenu={() => setMenuType('')}/>}</li>
                        <li onMouseOver={() => setMenuType('bath-lifts')} onMouseLeave={() => setMenuType('')}><Link href='/bath-lifts'><a onClick={() => setMenuType('')}>Bath Lifts</a></Link> {menuType === 'bath-lifts' && <DropDown type={menuType} keyId={3}  closeMenu={() => setMenuType('')}/>}</li>
                        <li><Link href='/express-delivery'><a onMouseLeave={() => setMenuType('')}>Express Delivery</a></Link></li>
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