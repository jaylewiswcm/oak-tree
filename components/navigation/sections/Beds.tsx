import React from 'react'
import Image from 'next/image';

const Beds = () => {
    return (
        <div className='dd-content' id='bed-section'>
        <div className='dd-navigation'>
         <p className='nav-header'>Our Beds</p>
            <ul className='nav-list'>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Lilac</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Hazel</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Hesper</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Oysterwood</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Poplar</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>The Birch</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className='icon'></span>
                        <span>All Beds</span>
                    </a>
                </li>
            </ul> 
        </div>
        <div className='dd-image'>
            <Image 
                src='/images/navigation/beds.png'
                alt='Bed Collection'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
        </div>
    </div>
    )
}

export default Beds;