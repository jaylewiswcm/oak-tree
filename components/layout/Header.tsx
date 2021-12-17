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
        <header className={`${shadow} ${hideNavbar === true && 'hide-navbar'}`}>
             <div className="container-regular header-inner" id="desktop-header">
                 <Link  href='/'>
                    <a className='header-logo'>
                        <Logo colour='original'/>
                    </a>
                </Link>
                <nav className='header-nav'>
                    <ul className='nav-list'>
                        <li className='nav-li' onMouseOver={() => expandMenu('')} onMouseOut={() => hideMenu()}>
                            <Link href='/'>
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('about')} onMouseOut={() => hideMenu()}>
                            <Link href="/about">
                                <a  className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>About</span>
                                </a>
                            </Link>
                            <HeaderDD type={menuType}  />
                            {/* <HeaderDropDown type={menuType}/> */}
                            {/* {menuType === 'about' && <HeaderDropDown dropdown={dropdown} type={menuType}/>} */}
                        </li> 
                        <li  className='nav-li' onMouseOver={() => expandMenu('chairs')} onMouseOut={() => hideMenu()}>
                            <Link href="/rise-and-recline-chairs" >
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Chairs</span>
                                </a>
                            </Link>
                            <HeaderDD type={menuType}  />
                            {/* {menuType === 'chairs' && <HeaderDropDown dropdown={dropdown} type={menuType}/>} */}
                            {/* { menuType === 'chairs' && <HeaderDropDown type={menuType}/>} */}
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('beds')} onMouseOut={() => hideMenu()}>
                            <Link href="/adjustable-beds" >
                                <a className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Beds</span>
                                </a>
                            </Link>
                            <HeaderDD type={menuType}  />
                            {/* <HeaderDropDown type={menuType}/> */}
                            {/* { menuType === 'beds' && <HeaderDropDown dropdown={dropdown} type={menuType}/>} */}
                        </li>
                        <li className='nav-li' onMouseOver={() => expandMenu('bath-lifts')} onMouseOut={() => hideMenu()}>
                            <Link href="/bath-lifts" >
                                <a  className='nav-a'>
                                    <span className='btn-bg'></span>
                                    <span className='btn-text'>Bath Lifts</span>
                                </a>
                            </Link>
                            <HeaderDD type={menuType}  />
                            {/* { menuType === 'bath-lifts' && <HeaderDropDown dropdown={dropdown} type={menuType}/>} */}
                        </li>
                    </ul>
                </nav>
           
                 <button className='header-cta'>
                     <span className='btn-bg'></span>
                     <span className='btn-text'>Request Your Brochure</span>
                 </button>
            </div>
            <div className='header-inner' id="mobile-header">
                <Link  href='/'>
                    <a className='header-logo'>
                        <Logo colour='original'/>
                    </a>
                </Link>
                <button className='burger-menu'>
                    <Image 
                        src='/images/icons/burger-menu.svg'
                        alt='Menu'  
                        width='40'
                        height='40'  
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;