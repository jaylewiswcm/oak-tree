import React from 'react'
// Assets
import Logo from '../../assets/Logo';

const Header = () => {
    return (
        <header className='orphan-header'>
            <div className="container-regular">
                    <div className="header-top header-padding ">
                        <a href='/'>
                            <Logo colour="white"/>
                        </a>
                        <div className="phone-number">
                            <p>Call us Free Now</p>
                            <span className="number">0808 258 3061</span>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header;