import React, { useState, useEffect } from 'react'
import Link from 'next/link';

interface ComponentProps {
    dropdown: boolean,
    type: string 
}

const HeaderDropDown = ({dropdown, type}:ComponentProps) => {
    const [menuType, resetMenuType] = useState('');

    useEffect(() => {
        if(type !== '' && dropdown !== false) {
            resetMenuType(type)
        }
        console.log(`The type is ${type}`)
        console.log(`Component Type is ${menuType}`)
        console.log(dropdown);
    }, [type, dropdown, menuType])

    return (
            <div className={`header-dropdown ${type && type + '-dd'}`} onMouseOut={() => resetMenuType('')}>
                <div className={`dd-inner-wrapper  ${menuType === 'about' ? 'isVisible' : ''}`}>
                    <nav className='dd-nav'>
                        <p className='list-heading'>About</p>
                            <ul className={`dd-nav-list grid-nav-list`}>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>About Oak Tree Mobility</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>Our Occupational Therapist</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>Testimonials and Reviews</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>Delivery and Installation</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>British Made</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>Prices Explained</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a><span className='link-text'>Blog</span></a>
                                    </Link>
                                </li>
                            </ul>
                    </nav>
                </div>
                <div className={`dd-inner-wrapper ${menuType === 'chairs' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Chairs</p>
                                    <ul className={`dd-nav-list`}>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Oak</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Maple</span></a>
                                                </Link>    
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Rowan</span></a>
                                                </Link>  
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Cedar</span></a>
                                                </Link>  
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Tulip</span></a>
                                                </Link>  
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>All Chairs</span></a>
                                                </Link>      
                                            </li>
                                        </ul>
                                    </nav>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Information</p>
                                    <ul className={`dd-nav-list`}>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>British Made</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>Help & Advice</span></a>
                                                </Link>
                                             </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>£200 Trade in</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>Offers</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                </div>
                <div className={`dd-inner-wrapper ${menuType === 'beds' ? 'isVisible' : ''}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Beds</p>
                                    <ul className={`dd-nav-list`}>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Lilac</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Hazel</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Hesper</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Oysterwood</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Poplar</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Birch</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>All Beds</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Information</p>
                                    <ul className={`dd-nav-list`}>
                                            <li>
                                                <Link href="/">
                                                    <a> <span className='link-text'>British Made</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>Help & Advice</span></a>
                                                </Link>
                                            </li>
                                            <li>  
                                                <Link href="/">
                                                    <a><span className='link-text'>£200 Trade in</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>Offers</span></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div>
                            <div className={`dd-inner-wrapper ${menuType === 'bath-lifts' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Bath Lifts</p>
                                    <ul className={`dd-nav-list`}>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>Bath Lift Range</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><span className='link-text'>The Riviera Plus</span></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a ><span className='link-text'>Oak Tree Bath Lifts</span></a>
                                                </Link> 
                                            </li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div>
                        {/* <div className={`dd-inner`}> */}
                            {/* <div className={`dd-inner-wrapper ${type === 'about' ? 'isVisible' : ''}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>About</p>
                                    <ul className={`dd-nav-list grid-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>About Oak Tree Mobility</span></a></li>
                                            <li><a href="/"><span className='link-text'>Our Occupational Therapist</span></a></li>
                                            <li><a href="/"><span className='link-text'>Testimonials and Reviews</span></a></li>
                                            <li><a href="/"><span className='link-text'>Delivery and Installation</span></a></li>
                                            <li><a href="/"><span className='link-text'>British Made</span></a></li>
                                            <li><a href="/"><span className='link-text'>Prices Explained</span></a></li>
                                            <li><a href="/"><span className='link-text'>Blog</span></a></li>
                                        </ul>
                                    </nav>
                            </div> 
                            <div className={`dd-inner-wrapper ${menuType === 'chairs' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Chairs</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>The Oak</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Maple</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Rowan</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Cedar</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Tulip</span></a></li>
                                            <li><a href="/"><span className='link-text'>All Chairs</span></a></li>
                                        </ul>
                                    </nav>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Information</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>British Made</span></a></li>
                                            <li><a href="/"><span className='link-text'>Help & Advice</span></a></li>
                                            <li><a href="/"><span className='link-text'>£200 Trade in</span></a></li>
                                            <li><a href="/"><span className='link-text'>Offers</span></a></li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div> */}
                        {/* </div> */}
                            {/* <div className={`dd-inner-wrapper ${menuType === 'chairs' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Chairs</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>The Oak</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Maple</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Rowan</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Cedar</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Tulip</span></a></li>
                                            <li><a href="/"><span className='link-text'>All Chairs</span></a></li>
                                        </ul>
                                    </nav>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Information</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>British Made</span></a></li>
                                            <li><a href="/"><span className='link-text'>Help & Advice</span></a></li>
                                            <li><a href="/"><span className='link-text'>£200 Trade in</span></a></li>
                                            <li><a href="/"><span className='link-text'>Offers</span></a></li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div>
                            <div className={`dd-inner-wrapper ${menuType === 'beds' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Beds</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"><span className='link-text'>The Lilac</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Hazel</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Hesper</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Oysterwood</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Poplar</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Birch</span></a></li>
                                            <li><a href="/"><span className='link-text'>All Beds</span></a></li>
                                        </ul>
                                    </nav>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Information</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"> <span className='link-text'>British Made</span></a></li>
                                            <li><a href="/"><span className='link-text'>Help & Advice</span></a></li>
                                            <li><a href="/"><span className='link-text'>£200 Trade in</span></a></li>
                                            <li><a href="/"><span className='link-text'>Offers</span></a></li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div>
                            <div className={`dd-inner-wrapper ${menuType === 'bath-lifts' && 'isVisible'}`}>
                                <nav className='dd-nav'>
                                    <p className='list-heading'>Bath Lifts</p>
                                    <ul className={`dd-nav-list`}>
                                            <li><a href="/"><span className='link-text'>Bath Lift Range</span></a></li>
                                            <li><a href="/"><span className='link-text'>The Riviera Plus</span></a></li>
                                            <li><a href="/"><span className='link-text'>Oak Tree Bath Lifts</span></a></li>
                                        </ul>
                                    </nav>
                                <div className='dd-menu-image'></div>
                            </div>
                        </div> */}
                                {/* <nav>
                                <ul className={`dd-nav-list ${menuType === 'chairs' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oak</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Rowan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Cedar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Tulip</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Chairs</span>
                                        </a>
                                    </li>
                                </ul> 
                                <ul className={`dd-nav-list ${menuType === 'beds' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Lilac</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hazel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hesper</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oysterwood</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Poplar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Birch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Beds</span>
                                        </a>
                                    </li>
                                </ul> 
                                <ul className={`dd-nav-list ${menuType === 'bath-lifts' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Bath Lift Range</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Riviera Plus</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Oak Tree Bath Lifts</span>
                                        </a>
                                    </li>
                                </ul> 
                            </nav>
                  */}
                    
                    
                            {/* <nav  className='dd-nav'>
                                <ul className={`dd-nav-list ${menuType === 'about' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>About Oak Tree Mobility</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Meet our Occupational Therapist</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Testimonials and Reviews</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Delivery and Installation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>British Made</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Prices Explained</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Blog</span>
                                        </a>
                                    </li>
                                </ul> 
                                <ul className={`dd-nav-list ${menuType === 'chairs' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oak</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Rowan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Cedar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Tulip</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Chairs</span>
                                        </a>
                                    </li>
                                </ul> 
                                <ul className={`dd-nav-list ${menuType === 'beds' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Lilac</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hazel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hesper</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oysterwood</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Poplar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Birch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Beds</span>
                                        </a>
                                    </li>
                                </ul> 
                                <ul className={`dd-nav-list ${menuType === 'bath-lifts' && 'isVisible'}`}>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Bath Lift Range</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Riviera Plus</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Oak Tree Bath Lifts</span>
                                        </a>
                                    </li>
                                </ul> 
                            </nav> */}
                    
                        {/* <div className={`dd-inner nav-chairs-dd ${menuType !== 'chairs' && 'hide'}`}>
                            <nav  className='dd-nav'>
                                <ul className='dd-nav-list'>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oak</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Rowan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Cedar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Tulip</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Chairs</span>
                                        </a>
                                    </li>
                                </ul> 
                            </nav>
                        </div>
                        <div className={`dd-inner nav-chairs-dd ${menuType !== 'beds' && 'hide'}`}>
                            <nav  className='dd-nav'>
                                <ul className='dd-nav-list'>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Lilac</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hazel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Hesper</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Oysterwood</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Poplar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Birch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>All Beds</span>
                                        </a>
                                    </li>
                                </ul> 
                            </nav>
                        </div>
                        <div className={`dd-inner nav-chairs-dd ${menuType !== 'bath-lifts' && 'hide'}`}>
                            <nav  className='dd-nav'>
                                <ul className='dd-nav-list'>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Bath Lift Range</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>The Riviera Plus</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className='icon'></span>
                                            <span className='link-text'>Oak Tree Bath Lifts</span>
                                        </a>
                                    </li>
                                </ul> 
                            </nav>
                        </div> */}
                    </div>
    )
}

export default HeaderDropDown;