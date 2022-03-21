import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import Link from 'next/link'; 
import Image from 'next/image';

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
        setDropdown(false)
    }
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
                <div className='header-phone-number'>
                   <p className='number-support'>Questions? Call us <b>free</b> today:</p>
                   <p className='number'>0800 094 999</p>
                </div> 
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