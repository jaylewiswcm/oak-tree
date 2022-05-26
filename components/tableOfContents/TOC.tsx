import React, { useEffect, useState } from 'react'
import Link from 'next/link';

interface ComponentProps {
    reference: any
}

export const TOC = ({reference}: ComponentProps) => {
const [hideClass, setHideClass] = useState('')
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [reference]);
      
      const handleScroll = () => {
        const ref = reference.current.getBoundingClientRect().top;
        const position = window.pageYOffset;
          if(position < ref) {
              setHideClass('hide-toc');
          } else {
              setHideClass('')
          }
      };

  return (
    <div className={`table-of-contents-nav ${hideClass}`}>
        <nav className='inner-div con-reg' aria-label="Table of contents">
        <ul>
            <li>
                <Link href="#material-section">
                    <a>Material</a>
                </Link>
            </li>
            <li>
                <Link href="#size-section">
                    <a className='active'>Size</a>
                </Link>
            </li>
            <li>
                <Link href="#motor-section">
                    <a>Motor</a>
                </Link>
            </li>
            <li>
                <Link  href="#accessories-section">
                    <a>Accessories</a>
                </Link>
            </li>    
        </ul>
        <button className='cta-btn'>Request Your Brochure</button>
        </nav>
    </div>

  )
}
