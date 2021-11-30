import React from 'react'

const Chairs = () => {
    return (
        <div className='dd-content' id='price-section'>
            <div className='dd-navigation'>
                <p className='nav-header'>Prices explained</p>
                <ul className='nav-list extend-list'>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Price Guide for Chairs</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Price Guide for Beds</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Trade In</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>VAT Exempt</span>
                        </a>
                    </li>
                </ul> 
        </div>
    </div>
    )
}

export default Chairs;