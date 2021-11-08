import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header-top header-padding">
                <h1 className="logo-type">Oak Tree</h1>
                <nav>
                    <ul>
                        <li><a href="/" className='active-link'>Products</a></li>
                        <li><a href="/">Help & Advice</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>
                <div className="phone-number">
                    <p>Call us Free Now</p>
                    <span className="number">0808 258 3061</span>
                </div>
            </div>
            <div className="header-bottom header-padding">
                <nav>
                    <ul>
                        <li><a href="/">Rise and Recline Chairs</a></li>
                        <li><a href="/">Adjustable Beds</a></li>
                        <li><a href="/">Bath Lifts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;