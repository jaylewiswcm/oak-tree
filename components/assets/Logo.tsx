import React from 'react'
import Image from 'next/image';
// assets 
import logoOriginal from '../../public/logo/logo.svg';
import logoWhite from '../../public/logo/logo-white.svg';

interface ComponentProps {
    colour: string
}

const Logo = ({colour}: ComponentProps) => {

    if(colour === 'white') {
        return (
            <div className="logo">
                <Image 
                    src={logoWhite}
                    alt="Oak Tree Mobility"
              
                />
            </div>
        )
    }

    return (
        <div className="logo">
            <Image 
                src={logoOriginal}
                alt="Oak Tree Mobility"
          
            />
        </div>
    )
}

export default Logo;