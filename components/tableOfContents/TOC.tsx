import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// Context
import { useAppContext } from '../../context/state'

interface ComponentProps {
    reference: React.RefObject<HTMLDivElement>
    type: string
    references: React.RefObject<HTMLDivElement> 
}

export const TOC = ({reference, type, references}: ComponentProps) => {
const [hideClass, setHideClass] = useState('hide-toc')
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [reference, references]);
      
      const handleScroll = () => {
        const ref = reference.current!.getBoundingClientRect().top;
          if(ref > 150) {
              setHideClass('hide-toc');
          } else {
              setHideClass('')
          }
          checkIfSectionIsInViewAndAssignActive()
      };

      const checkIfSectionIsInViewAndAssignActive = () => {
        const sectionPos = references!.current!.getBoundingClientRect().top
        if(sectionPos < 0) {
            console.log('Below 0')
        }
      }

      const { setFormModal } = useAppContext();

      const chairLinks = [
          {
              "name": "Material",
              "href" : "#material-section"
          },
          {
              "name": "Size",
              "href" : "#size-section"
          },
          {
              "name": "Motor",
              "href" : "#motor-section"
          },
          {
              "name": "Accessories",
              "href" : "#accessories-section"
          }
      ]
      const bedLinks = [
          {
              "name": "Material",
              "href" : "#material-section"
          },
          {
              "name": "Mattress",
              "href" : "#mattress-section"
          },
          {
              "name": "Headboard",
              "href" : "#headboard-section"
          },
          {
              "name": "Accessories",
              "href" : "#accessories-section"
          }
      ]

  return (
    <div className={`table-of-contents-nav ${hideClass}`}>
        <nav className='inner-div con-reg' aria-label="Table of contents">
        <ul>
            { type === 'chair' && chairLinks.map((link, index) => 
                <li key={index}>
                 <Link href={link.href}>
                     <a>{link.name}</a>
                 </Link>
                </li>
            ) }
            { type === 'bed' && bedLinks.map((link, index) => 
                <li key={index}>
                 <Link href={link.href}>
                     <a>{link.name}</a>
                 </Link>
                </li>
            ) }
        </ul>
        <button className='cta-btn' onClick={() => setFormModal(true)}>Request Your Brochure</button>
        </nav>
    </div>

  )
}
