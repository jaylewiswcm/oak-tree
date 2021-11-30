import React from 'react'
import Image from 'next/image';

const BathLifts = () => {
    return (
        <div className='dd-content' id='bed-section'>
        <div className='dd-navigation'>
         <p className='nav-header'>Our Bath Lifts</p>
            <ul className='nav-list'>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>Bath Lift Range</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Riviera Plus</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>Oak Tree Bath Lifts</span>
                    </a>
                </li>
            </ul> 
        </div>
        <div className='dd-image'>
            <Image 
                src='/images/navigation/bathlifts.png'
                alt='Bathlift Collection'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
        </div>
    </div>

    )
}

export default BathLifts;