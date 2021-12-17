import React from 'react'
import Link from 'next/link'

interface ComponentProps {
type: string
}

const DropDownBg = ({type} : ComponentProps) => {
    return (
        <div className={`header-dropdown`}>
        
        {type === 'about' && 
        <div className='dd-inner-wrapper about-dd'>
            <nav className='dd-nav'>
                <p className='list-heading'>About</p>
                    <ul className={`dd-nav-list grid-nav-list`}>
                        <li>
                            <Link href="/about">
                                <a><span className='link-text'>About Oak Tree Mobility</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/occupational-therapist">
                                <a><span className='link-text'>Our Occupational Therapist</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimonials-and-reviews">
                                <a><span className='link-text'>Testimonials and Reviews</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/delivery-and-installation">
                                <a><span className='link-text'>Delivery and Installation</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/british-made">
                                <a><span className='link-text'>British Made</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/prices-explained">
                                <a><span className='link-text'>Prices Explained</span></a>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </div>
        }
        {type === 'chairs' && 
        <div className='dd-inner-wrapper chairs-dd'>
                        <nav className='dd-nav'>
                            <p className='list-heading'>Chairs</p>
                            <ul className={`dd-nav-list`}>
                                    <li>
                                        <Link href="/rise-and-recline-chairs/the-oak">
                                            <a><span className='link-text'>The Oak</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rise-and-recline-chairs/the-maple">
                                            <a><span className='link-text'>The Maple</span></a>
                                        </Link>    
                                    </li>
                                    <li>
                                        <Link href="/rise-and-recline-chairs/the-rowan">
                                            <a><span className='link-text'>The Rowan</span></a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <Link href="/rise-and-recline-chairs/the-cedar">
                                            <a><span className='link-text'>The Cedar</span></a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <Link href="/rise-and-recline-chairs/the-tulip">
                                            <a><span className='link-text'>The Tulip</span></a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <Link href="/rise-and-recline-chairs">
                                            <a><span className='link-text'>All Chairs</span></a>
                                        </Link>      
                                    </li>
                                </ul>
                            </nav>
                        <nav className='dd-nav'>
                            <p className='list-heading'>Information</p>
                            <ul className={`dd-nav-list`}>
                                    <li>
                                        <Link href="/british-made">
                                            <a><span className='link-text'>British Made</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/help-and-advice">
                                            <a><span className='link-text'>Help & Advice</span></a>
                                        </Link>
                                     </li>
                                    <li>
                                        <Link href="/trade-in">
                                            <a><span className='link-text'>£200 Trade in</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/offers">
                                            <a><span className='link-text'>Offers</span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        <div className='dd-menu-image'></div>
        </div>
        }
        {type === 'beds' && 
        <div className='dd-inner-wrapper beds-dd'>
                        <nav className='dd-nav'>
                            <p className='list-heading'>Beds</p>
                            <ul className={`dd-nav-list`}>
                                    <li>
                                        <Link href="/adjustable-beds/the-lilac">
                                            <a><span className='link-text'>The Lilac</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds/the-hazel">
                                            <a><span className='link-text'>The Hazel</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds/the-hesper">
                                            <a><span className='link-text'>The Hesper</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds/the-oysterwood">
                                            <a><span className='link-text'>The Oysterwood</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds/the-poplar">
                                            <a><span className='link-text'>The Poplar</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds/the-birch">
                                            <a><span className='link-text'>The Birch</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/adjustable-beds">
                                            <a><span className='link-text'>All Beds</span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        <nav className='dd-nav'>
                            <p className='list-heading'>Information</p>
                            <ul className={`dd-nav-list`}>
                                    <li>
                                        <Link href="/british-made">
                                            <a> <span className='link-text'>British Made</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/help-and-advice">
                                            <a><span className='link-text'>Help & Advice</span></a>
                                        </Link>
                                    </li>
                                    <li>  
                                        <Link href="/trade-in">
                                            <a><span className='link-text'>£200 Trade in</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/offers">
                                            <a><span className='link-text'>Offers</span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        <div className='dd-menu-image'></div>
                    </div>
        }
        {type === 'bath-lifts' && 
                    <div className='dd-inner-wrapper bath-lifts-dd'>
                        <nav className='dd-nav'>
                            <p className='list-heading'>Bath Lifts</p>
                            <ul className={`dd-nav-list`}>
                                    <li>
                                        <Link href="/bath-lifts">
                                            <a><span className='link-text'>Bath Lift Range</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bath-lifts/the-riviera">
                                            <a><span className='link-text'>The Riviera Plus</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bath-lifts/oak-tree-bath-lifts">
                                            <a><span className='link-text'>Oak Tree Bath Lifts</span></a>
                                        </Link> 
                                    </li>
                                </ul>
                            </nav>
                        <div className='dd-menu-image'></div>
                    </div>
        }
            </div>
        
    )
}
export default DropDownBg;