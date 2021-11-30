import React from 'react'
import Image from 'next/image'
const Chairs = () => {
    return (
        <div className='dd-content' id='chair-section'>
        <div className='dd-navigation'>
         <p className='nav-header'>Our Chairs</p>
            <ul className='nav-list'>
                <li>
                    <a href="/rise-and-recline-chairs/the-oak">
                        <span className='icon'></span>
                        <span>The Oak</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Rowan</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Cedar</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Tulip</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Maple</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>All Chairs</span>
                    </a>
                </li>
            </ul> 
        </div>
        <div className='dd-image'>
            <Image 
                src='/images/navigation/chairs.png'
                alt='Chair Collection'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
        </div>
    </div>
    )
}

export default Chairs;