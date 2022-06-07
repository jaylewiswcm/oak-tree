import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// Context
import { useAppContext } from '../../context/state'

interface ComponentProps {
    reference: React.RefObject<HTMLDivElement>
    type: string
    sectionOneRef: React.RefObject<HTMLDivElement>
    sectionTwoRef: React.RefObject<HTMLDivElement>
    sectionThreeRef: React.RefObject<HTMLDivElement>
    sectionFourRef: React.RefObject<HTMLDivElement>
}

export const TOC = ({reference, type, sectionOneRef, sectionTwoRef, sectionThreeRef, sectionFourRef}: ComponentProps) => {
const [hideClass, setHideClass] = useState('hide-toc')
const [active, setActive] = useState(99);

    useEffect(() => {
        const handleScroll = () => {
            if(reference.current) {
              const ref = reference.current!.getBoundingClientRect().top;
              if(ref > 150) {
                  setHideClass('hide-toc');
              } else {
                  setHideClass('')
              }
            }
         
            checkIfSectionIsInViewAndAssignActive()
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [reference, setHideClass]);
      
  
      const checkIfSectionIsInViewAndAssignActive = () => {
        if(sectionOneRef.current) {
            const sectionOnePos = sectionOneRef!.current!.getBoundingClientRect()
            const sectionTwoPos = sectionTwoRef!.current!.getBoundingClientRect()
            const sectionThreePos = sectionThreeRef!.current!.getBoundingClientRect()
            const sectionFourPos = sectionFourRef!.current!.getBoundingClientRect()
            // Check if section's position is within the window if so assign active
            if(sectionOnePos.top > 0 ) {
                setActive(0)
            } else if(sectionOnePos.bottom > 110) {
                setActive(0)
            } else if(sectionTwoPos.top > 0 ) {
                setActive(1)
            } else if(sectionTwoPos.bottom > 110) {
                setActive(1)
            } else if(sectionThreePos.top > 0 ) {
                setActive(2)
            } else if(sectionThreePos.bottom > 110) {
                setActive(2)
            } else if(sectionFourPos.top > 0 ) {
                setActive(3)
            } else if(sectionFourPos.bottom > 110) {
                setActive(3)
            } else {
                setActive(99)
            }
        }
      }

      const { setFormModal } = useAppContext();

  return (
    <div className={`table-of-contents-nav ${hideClass}`}>
        <nav className='inner-div con-reg' aria-label="Table of contents">
        <ul>
            { type === 'chair' && chairLinks.map((link, index) => 
                <li key={index}>
                 <Link href={link.href}>
                     <a className={active === index ? 'active': ''}>{link.name}</a>
                 </Link>
                </li>
            ) }
            { type === 'bed' && bedLinks.map((link, index) => 
                <li key={index}>
                 <Link href={link.href}>
                     <a className={active === index ? 'active': ''}>{link.name}</a>
                 </Link>
                </li>
            ) }
        </ul>
        <button className='cta-btn' onClick={() => setFormModal(true)}>Request Your Brochure</button>
        </nav>
    </div>

  )
}


const chairLinks = [
    {
        "name": "Material",
        "href" : "#material-section",
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