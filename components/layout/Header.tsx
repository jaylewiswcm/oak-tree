import React, {useState} from 'react'
import Logo from '../assets/Logo';
import HeaderDropDown from '../navigation/HeaderDropDown';
import Link from 'next/link';

const Header = () => {
    const [dropdownClass, setDropdownClass] = useState('');
    const [menuType, setMenuType] = useState('');

    const expandMenu = (type:string) => {
        setDropdownClass('dropdown')
        setMenuType(type);
    }
    const hideMenu = () => {
        setDropdownClass('')
    }
    return (  
        <header>
            <div className="container-regular">
                <div className="header-top header-padding ">
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
                            <li className='header-li'><a href="/" className="header-link">Home</a></li>
                            <li className='header-li'><a href="/" className="header-link" onMouseOver={() => expandMenu('about')} onMouseOut={() => hideMenu()}>About</a></li>
                            <li className='header-li'><a href="/" className="header-link"  onMouseOver={() => expandMenu('prices')} onMouseOut={() => hideMenu()}>Prices Explained</a></li>
                            <li className='header-li'><a href="/" className="header-link"  onMouseOver={() => expandMenu('chairs')} onMouseOut={() => hideMenu()}>Chairs</a></li>
                            <li className='header-li'><a href="/" className="header-link"  onMouseOver={() => expandMenu('beds')} onMouseOut={() => hideMenu()}>Beds</a></li>
                            <li className='header-li'><a href="/" className="header-link"  onMouseOver={() => expandMenu('bathlifts')} onMouseOut={() => hideMenu()}>Bath Lifts</a></li>
                            <li className='header-li'><a href="/" className="header-link"  onMouseOver={() => expandMenu('blog')} onMouseOut={() => hideMenu()}>Blog</a></li>
                            <li className='header-li'><a href="/request-our-chair-brochure" className="header-link"  onMouseOver={() => expandMenu('offers')} onMouseOut={() => hideMenu()}>Offers</a></li>
                        </ul>
                        <HeaderDropDown dropdown={dropdownClass} type={menuType}  /> 
                    </nav> 
                </div>
  
            </div>
        </header>
    )
}

export default Header;