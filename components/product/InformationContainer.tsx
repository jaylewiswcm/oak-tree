import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// data
import chair_fabrics from '../../data/fabrics/chair_fabrics.json'
import bed_fabrics from '../../data/fabrics/bed_fabrics.json'
import chair_accessories from '../../data/accessories/chair_accessories.json'
import bed_accessories from '../../data/accessories/chair_accessories.json'

interface usp {
    text: string
    img: string
    alt: string
}

interface ComponentProps {
    productType: string
    product: {
        name: string
        category: string
        usps: Array<usp>
    }
}

export const InformationContainer = ({product, productType }:ComponentProps) => {

    const {name, category, usps} = product;

  return (
    <div className='info-container'>
    <div className='top'>
        <h4>{name}</h4>
        <p>{category}</p>
    </div>
    <div className="british-made-icon">
        <div className='icon'>
            <Image 
                src='/icons/product-usps/british-made.svg'
                alt='British made'
                layout='responsive'
                width='80'
                height='80'
            />
        </div>
        <div className='tooltip'>
            Made in Britain
            <div className='arrow'></div>
        </div>
    </div>
    <ul className='usp-list'>
        {usps.map((usp, index) => 
            <li key={index}>
              <span className='icon'>
                  <Image 
                      src={usp.img}
                      alt={usp.alt}
                      layout='responsive'
                      width='50'
                      height='50'
                  />
              </span>
              <p>{usp.text}</p>
          </li>
        )}
        {/* <li>
            <span className='icon-wrapper'>
                <Image 
                    src='/icons/product-usps/made-to-measure.svg'
                    alt='Made to Measure'
                    layout='responsive'
                    width='50'
                    height='50'
                />
            </span>
            <p>Made-to-Measure</p>
        </li>
        <li>
            <span className='icon-wrapper'>
                <Image 
                    src='/icons/product-usps/trade-in.svg'
                    alt='Trade In'
                    layout='responsive'
                    width='50'
                    height='50'
                />
            </span>
            <p>Trade In</p>
        </li>
        <li>
            <span className='icon-wrapper'>
                <Image 
                    src='/icons/product-usps/made-in-britain.svg'
                    alt='Made in Britiain'
                    layout='responsive'
                    width='50'
                    height='50'
                />
            </span>
            <p>Made in Britain</p>
        </li> */}
    </ul>
    <div className='info-section fabrics'>
        <p className='info-header'>Fabrics and Leathers:</p>
        <div className='swatch-grid'>
            {productType === 'chair' && chair_fabrics.slice(0,6).map((fabric, index) => 
                <div className='swatch' key={index}>
                    <div className='inner-swatch'>
                        <Image 
                            src={fabric.src}
                            alt={fabric.name}
                            layout='responsive'
                            width='60'
                            height='60'
                        />
                    </div>
                </div>
            ) }
            {productType === 'bed' && bed_fabrics.slice(0,6).map((fabric, index) => 
                <div className='swatch' key={index}>
                    <div className='inner-swatch'>
                        <Image 
                            src={fabric.src}
                            alt={fabric.name}
                            layout='responsive'
                            width='60'
                            height='60'
                        />
                    </div>
                </div>
            ) }
            <p className='plus-more'>+ 32 more</p>
        </div>
        
    </div>
    <div className='info-section accessories'>
        <p className='info-header'>Accessories:</p>
        <div className='accessory-grid'>
            {productType === 'chair' && chair_accessories.map((item, index) => 
                <div className='item' key={index}>
                    <Image 
                        src={item.image}
                        alt={item.name}
                        layout='responsive'
                        width='1000'
                        height='855'
                    />
                </div>
            ) }
            {productType === 'bed' && bed_accessories.map((item, index) => 
                <div className='item' key={index}>
                    <Image 
                        src={item.image}
                        alt={item.name}
                        layout='responsive'
                        width='1000'
                        height='855'
                    />
                </div>
            ) }
        </div>
    </div>
    <div className='info-section motors'>
        <p className='info-header'>Motors:</p>
        <Link href='/'><a>Choice of three motors</a></Link>
    </div>
    <div className='cta-wrapper'>
        <p>See all our options in our free brochure</p>
        <button className='main-cta'>Request a Free Brochure</button>
    </div>
</div>
  )
}
