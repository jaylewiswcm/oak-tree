import React from 'react'
import Image from 'next/image'
import { setCookie } from 'cookies-next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Autoplay } from "swiper";

interface ComponentProps {
    hideOverlay: any
    className:string
}

export const UspOverlay = ({hideOverlay, className}:ComponentProps) => {

    const closeOverlayAndSetCookie = () => {
      setCookie('UspOverlayHidden', true,{ maxAge: 60 * 60 * 24 });    
      hideOverlay(false);
    }

  return (
    <div className={`usp-overlay ${className}`}>
            <div className='usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/icons/usps/icon-british-made-small.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='60'
                        height='60'
                    />
                </div>
                <p>Handmade in<br/>Great Britain</p>
            </div>
            <div className='usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/icons/usps/icon-trade-in-small.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='60'
                        height='60'
                    />
                </div>
                <p>Minimum<br/>£200 Trade In</p>
            </div>
            <div className='usp trustpilot-usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/trustpilot/trustpilot-logo-usp.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='81.15'
                        height='34.06'
                    />
                </div>
                <p>Five Star<br/>Satisfaction</p>
            </div>
            <div className='close-button' onClick={() => closeOverlayAndSetCookie()}>
                <div className='inner-button'>
                    <div className='cross'>
                        <Image
                            src='/buttons/red-exit-cross.svg'
                            alt='British Made'
                            layout='responsive'
                            width='9'
                            height='9'
                        />
                    </div>
                </div>
        </div>
    </div>
  )
}
