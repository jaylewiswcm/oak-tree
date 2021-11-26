import React, {useState} from 'react'
import Logo from '../assets/Logo';
import HeaderDropDown from '../elements/navigation/HeaderDropDown';
const Header = () => {
    const [dropdownClass, setDropdownClass] = useState('');

    const expandMenu = () => {
        setDropdownClass('dropdown')
    }
    const hideMenu = () => {
        setDropdownClass('')
    }
    return (  
        <header>
            <div className="container-regular">
                <div className="header-top header-padding ">
                    <Logo colour='original'/>
                    <div className="phone-number">
                        <p>Call us Free Now</p>
                        <span className="number">0808 258 3061</span>
                    </div>
                </div>
                <div className="header-nav header-padding ">
                    <nav>
                        <ul>
                            <li><a href="/" className="header-link">Home</a></li>
                            <li><a href="/" className="header-link" onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>About</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Prices Explained</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Chairs</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Beds</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Bath Lifts</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Blog</a></li>
                            <li><a href="/" className="header-link"  onMouseOver={() => expandMenu()} onMouseOut={() => hideMenu()}>Offers</a></li>
                        </ul>
                    </nav> 
                </div>
                <HeaderDropDown dropdown={dropdownClass} /> 
            </div>
        </header>
    )
}

export default Header;