import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Context 
import { useAppContext } from '../../../context/state';

interface ComponentProps {
    isOpen : boolean
    toggleMobileMenu : any
}

const MobileNavigation = ({isOpen, toggleMobileMenu} : ComponentProps) => {
    const [subMenuOpen, setSubMenuOpen] = useState(999)

    const { setFormModal } = useAppContext()

    useEffect(() => {
        if(isOpen === false) {
            setSubMenuOpen(999)
        }
    },[isOpen])
    
    const openDropDownSubMenu = (index: number) => {
        if(subMenuOpen !== index) {
            setSubMenuOpen(index);
        }else {
            setSubMenuOpen(999);
        }
    }

    const navigation = [
        { subMenuHeader: 'About', submenu: [
            {link: '/about', text: 'About Us' },
            { link: '/occupational-therapist', text: 'Our Occupational Therapist' },
            { link: '/trade-in', text: 'Trade In' },
            { link: '/testimonials-and-reviews', text: 'Testimonials And Reviews' },
            { link: '/british-made', text: 'British Made' },
            { link: '/price-guide-chair', text: 'Chair Price Guide' },
            { link: '/price-guide-bed', text: 'Bed Price Guide' },
            { link: '/delivery-and-installation', text: 'Delivery and Installation' },
            { link: '/vat-exempt-eligibility', text: 'VAT Exempt Eligibilty' },
            { link: '/frequently-asked-questions', text: 'Frequently Asked Questions' },
        ]},
        { subMenuHeader: 'Chairs', submenu: [
            {link: '/chairs', text: 'All Chairs' },
            {link: '/chairs/the-oak', text: 'The Oak' },
            {link: '/chairs/the-maple', text: 'The Maple' },
            {link: '/chairs/the-cedar', text: 'The Cedar' },
            {link: '/chairs/the-rowan', text: 'The Rowan' },
            {link: '/chairs/the-tulip', text: 'The Tulip' },
        ]},
        { subMenuHeader: 'Beds', submenu: [
            {link: '/adjustable-beds', text: 'All Beds' },
            {link: '/adjustable-beds/the-poplar', text: 'The Poplar' },
            {link: '/adjustable-beds/the-lilac', text: 'The Lilac' },
            {link: '/adjustable-beds/the-hazel', text: 'The Hazel' },
            {link: '/adjustable-beds/the-hesper', text: 'The Hesper' },
            {link: '/adjustable-beds/the-oysterwood', text: 'The Oysterwood' },
         ,
        ]},

      ];

    //   { subMenuHeader: 'Bath Lifts', submenu: [
    //     {link: '/bath-lifts', text: 'Oak Tree Bath Lifts' },
    //     {link: '/bath-lifts/the-riviera-plus', text: 'The Riviera Plus' },  
    // ]},
    
    
  return (
    <div className={`navigation-wrapper ${isOpen ? '' : 'hide-mobile-navigation'}`}>
       <div className={`mobile-menu-bg ${isOpen ? '' : 'hide-mobile-navigation'}`} onClick={() => toggleMobileMenu()}></div>
       <div className={isOpen ?  'mobile-navigation' : 'mobile-navigation hide-mobile-navigation'}>      
        <div className='top-wrapper'>
            <div className='logo-wrapper'>
                <Image 
                    src='/logo/logo.svg'
                    alt='Oak Tree Mobility'
                    layout='responsive'
                    width={185.02}
                    height={38.55}
                />
            </div>      
            <div className='mobile-menu-btn'>
                <button onClick={() => toggleMobileMenu()}>
                    <div className='icon'>
                                <Image
                                    src='/buttons/menu-close.svg'
                                    alt='Open Menu'
                                    width='40'
                                    height='40'
                                />
                    </div>
                </button>
            </div> 
        </div>
        <ul className='main-nav'>
            <li><Link href='/'><a onClick={() => toggleMobileMenu()}>Home</a></Link></li>
            { navigation.map((listItem, index) => 
                 <li className={subMenuOpen === index ? 'open-submenu' : ''} key={index}>
                        <button onClick={() => openDropDownSubMenu(index)}>{listItem.subMenuHeader}<span className='arrow'><Image src='/vectors/down-arrow-black.svg' alt='Down Arrow' layout='responsive' width='21' height='11'/></span></button>
                        <ul className='subNav'>
                            {listItem.submenu?.map(link => 
                                <li key={link!.text}><Link href={link!.link}><a onClick={() => toggleMobileMenu()}>{link!.text}</a></Link></li>
                            )}
                        </ul>
                 </li>
            )}
            <li><Link href='/bath-lifts'><a onClick={() => toggleMobileMenu()}>Bath Lifts</a></Link></li>
            <li><Link href='/express-delivery'><a onClick={() => toggleMobileMenu()}>Express</a></Link></li>
        </ul>

        <div className='button-wrapper'> 
            <div className='phone-number'>
            <p>Questions? Call us free today:</p>
            <a href='tel:0800094999' className='number'>0800 094 999</a>
            </div>
            <button className='bg-green' onClick={() => setFormModal(true)}>
                <p>Request a Free Brochure</p>
            </button>
        </div> 
 
    </div>
    {/* <div className={`menu-close ${isOpen ? '' : 'hide-mobile-navigation'}`}>
            <button onClick={() => toggleMobileMenu()}>
                <div className='icon'>
                            <Image
                                src='/buttons/menu-close.svg'
                                alt='Open Menu'
                                width='40'
                                height='40'
                            />
                </div>
            </button>
        </div> */}
    </div>
  )
}

export default MobileNavigation;