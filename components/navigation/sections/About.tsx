import React from 'react'

const Chairs = () => {
    return (
        <div className='dd-content' id='price-section'>
            <div className='dd-navigation'>
                <p className='nav-header'>About</p>
                <ul className='nav-list extend-list'>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>About Oak Tree Mobility</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Meet our Occupational Therapist</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Testimonials and Reviews</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>Delivery and Installation</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className='icon'></span>
                            <span>British Made</span>
                        </a>
                    </li>
                </ul> 
            </div>
        </div>
    )
}

export default Chairs;