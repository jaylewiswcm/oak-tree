import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import Link from 'next/link'; 
import Image from 'next/image';
// Components
import HeaderDD from '../navigation/DropDownBg';
import HeaderDropDown from '../navigation/HeaderDropDown';

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [menuType, setMenuType] = useState('');
    const [shadow, setShadow] = useState('');
    const [hideNavbar, setHiddenNavbar] = useState(false);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setHiddenNavbar(false)
            } else {
                setHiddenNavbar(true)
            }
            prevScrollpos = currentScrollPos;

            if(window.scrollY > 5 ) { 
                setShadow('header-shadow');
            } else {
                setShadow('');
            }
        });
    }, []);

    const expandMenu = (type:string) => {
        setDropdown(true)
        setMenuType(type);
    }
    const hideMenu = () => {
        // setMenuType('');
        setDropdown(false)
    }
    return (  
        <header>
            <div className='top-header con-reg'>
                <div className='mobile-menu-btn'>
                    <button className='icon-btn'>
                        <Image
                            src='/buttons/menu-open.svg'
                            alt='Open Menu'
                            width='40'
                            height='30'
                        />
                    </button>
                </div>
                <div className="header-logo">
                    <div className="logo">
                        <Image 
                            src='/logo/logo.svg'
                            alt='Oak Tree Mobility'
                            width='240'
                            height='60'
                        />
                    </div>
                </div>
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
                <div className='header-cta'>
                    <button className='cta main-cta'>
                        <p>Request Free Brochure</p>
                    </button>
                </div>  
            </div>
            <div className='top-cta-banner hide'>
                <div className='inner-wrapper con-reg flex-row-end'>
                    <div className='mobile-logo'>
                        <div className='logo-mid'>
                            <Image 
                                src='/logo/logo-white.svg'
                                alt='Oak Tree Mobility'
                                width='185'
                                height='38'
                            />
                        </div>
                        <div className='logo-mob'> 
                            <Image 
                                src='/logo/logo-mobile.svg'
                                alt='Oak Tree Mobility'
                                width='88'
                                height='39'
                            />
                        </div>
                      
                    </div>
                    <p className='desktop-call-cta'>Call us free on:</p>
                    <a className='desktop-call-cta' href="tel:0800908679">0800 908 679</a>
                    <a className='mobile-call-cta' href="tel:0800908679">Call Us Today</a>
                </div>              
            </div>
        </header>
    )
}

export default Header;