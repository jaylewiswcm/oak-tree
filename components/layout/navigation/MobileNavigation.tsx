import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ComponentProps {
    isOpen : boolean
    toggleMobileMenu : any
}

const MobileNavigation = ({isOpen, toggleMobileMenu} : ComponentProps) => {
    const [subMenuOpen, setSubMenuOpen] = useState(999)

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
            {link: '/about', text: 'About Oak Tree Mobility' },
            { link: '/occupational-therapist', text: 'Our Occupational Therapist' },
            { link: '/british-made', text: 'British Made' },
            { link: '/trade-in', text: 'Trade In' },
            { link: '/price-guide', text: 'Price Guide' },
            { link: '/testimonials-and-reviews', text: 'Testimonials And Reviews' },
            { link: '/delivery-and-installation', text: 'Delivery and Installation' },
            { link: '/vat-exempt', text: 'VAT Exempt Eligibilty' },
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
            {link: '/adjustable-beds/the-lilac', text: 'The Lilac' },
            {link: '/adjustable-beds/the-hazel', text: 'The Hazel' },
            {link: '/adjustable-beds/the-hesper', text: 'The Hesper' },
            {link: '/adjustable-beds/the-oysterwood', text: 'The Oysterwood' },
        ]},
        { subMenuHeader: 'Bath Lifts', submenu: [
            {link: '/bath-lifts', text: 'Bath Lifts' },
            {link: '/bath-lifts/the-lilac', text: 'Oak Tree Bath Lifts' },
            {link: '/bath-lifts/the-riviera-plus', text: 'The Riviera Plus' },
            {link: '/bath-lifts/home-visit', text: 'Home Visit Bath Lifts' },
        ]},
      ];
    
    
  return (
    <div className={isOpen === true ?  'mobile-navigation' : 'mobile-navigation hide-mobile-navigation'}>
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
                    <button className='icon-btn' onClick={() => toggleMobileMenu()}>
                        <Image
                            src='/buttons/menu-close.svg'
                            alt='Open Menu'
                            width='40'
                            height='30'
                        />
                    </button>
                </div> 
        </div>
        <ul className='main-nav'>
            <li><Link href='/'><a onClick={() => toggleMobileMenu()}>Home</a></Link></li>
            { navigation.map((listItem, index) => 
                 <li className={subMenuOpen === index ? 'open-submenu' : ''} key={index}>
                        <button onClick={() => openDropDownSubMenu(index)}>{listItem.subMenuHeader}<span className='arrow'><Image src='/vectors/down-arrow-black.svg' alt='Down Arrow' width='21' height='11'/></span></button>
                        <ul className='subNav'>
                            {listItem.submenu?.map( link => 
                                <li key={link.link}><Link href={link.link}><a onClick={() => toggleMobileMenu()}>{link.text}</a></Link></li>
                            )}
                        </ul>
                 </li>
            )}
            <li><Link href='/express-delivery'><a onClick={() => toggleMobileMenu()}>Express</a></Link></li>
        </ul>

        <div className='button-wrapper'>
            <div className='phone-number'>
            <p>Questions? Call us free today:</p>
            <a href='tel:0800094999' className='number'>0800 094 999</a>
            </div>
            <button className='bg-green'>
                <p>Request a Free Brochure</p>
            </button>
        </div> 
    </div>
  )
}

export default MobileNavigation;