import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo';
import HeaderDropDown from '../navigation/HeaderDropDown';
import Link from 'next/link'; 

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
        setMenuType('');
        setDropdown(false)
    }
    return (  
        <header className={`${shadow} ${hideNavbar === true && 'hide-navbar'}`}>
             <div className="container-regular header-inner">
                 <Link  href='/'>
                    <a className='header-logo'>
                        <Logo colour='original'/>
                    </a>
                </Link>
                <nav className='header-nav'>
                    <ul className='nav-list'>
                        <li className='nav-li'>
                            <Link href='/'>
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('about')} onMouseOut={() => setMenuType('')}>
                            <Link href="/about">
                                <a  className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>About</span>
                                </a>
                            </Link>
                            {menuType === 'about' && <HeaderDropDown type={menuType}/>}
                        </li> 
                        <li  className='nav-li' onMouseOver={() => expandMenu('chairs')} onMouseOut={() => setMenuType('')}>
                            <Link href="/rise-and-recline-chairs" >
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Chairs</span>
                                </a>
                            </Link>
                            {menuType === 'chairs' && <HeaderDropDown type={menuType}/>}
                            {/* { menuType === 'chairs' && <HeaderDropDown type={menuType}/>} */}
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('beds')} onMouseOut={() => setMenuType('')}>
                            <Link href="/adjustable-beds" >
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Beds</span>
                                </a>
                            </Link>
                            { menuType === 'beds' && <HeaderDropDown type={menuType}/>}
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('bath-lifts')} onMouseOut={() => setMenuType('')}>
                            <Link href="/bath-lifts" >
                                <a  className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Bath Lifts</span>
                                </a>
                            </Link>
                            { menuType === 'bath-lifts' && <HeaderDropDown type={menuType}/>}
                        </li>
                    </ul>
                </nav>
           
                 <button className='header-cta'>
                     <span className='btn-bg'></span>
                     <span className='btn-text'>Request Your Brochure</span>
                 </button>
               {/* <div className="header-top header-padding ">
                    <a href='/'>
                        <Logo colour='original'/>
                    </a>
                    <div className="phone-number">
                        <p>Call us Free Now</p>
                        <span className="number">0808 258 3061</span>
                    </div>
                </div>
                <div className="header-nav header-padding">
                    <nav>
                        <ul>
                            <li className='header-li'><Link href="/" ><a className="header-link">Home</a></Link></li>
                            <li className='header-li'><Link href="/" ><a className={`header-link`} onMouseOver={() => expandMenu('about')} onMouseOut={() => hideMenu()}>About</a></Link></li>
                            <li className='header-li'><Link href="/" ><a className={`header-link`}  onMouseOver={() => expandMenu('prices')} onMouseOut={() => hideMenu()}>Prices Explained</a></Link></li>
                            <li className='header-li'><Link href="/rise-and-recline-chairs" ><a className={`header-link`}  onMouseOver={() => expandMenu('chairs')} onMouseOut={() => hideMenu()}>Chairs</a></Link></li>
                            <li className='header-li'><Link href="/adjustable-beds" ><a className={`header-link`}  onMouseOver={() => expandMenu('beds')} onMouseOut={() => hideMenu()}>Beds</a></Link></li>
                            <li className='header-li'><Link href="/bath-lifts" ><a className={`header-link`}  onMouseOver={() => expandMenu('bathlifts')} onMouseOut={() => hideMenu()}>Bath Lifts</a></Link></li>
                            <li className='header-li'><Link href="/" ><a className={`header-link`}  onMouseOver={() => expandMenu('blog')} onMouseOut={() => hideMenu()}>Blog</a></Link></li>
                            <li className='header-li'><Link href="/request-our-chair-brochure" ><a className={`header-link`}  onMouseOver={() => expandMenu('offers')} onMouseOut={() => hideMenu()}>Offers</a></Link></li>
                        </ul>
                        <HeaderDropDown dropdown={dropdownClass} type={menuType}  /> 
                    </nav> 
                </div> */}
                  <div className='dropdown-bg'></div>
            </div>
          
        </header>
    )
}

export default Header;