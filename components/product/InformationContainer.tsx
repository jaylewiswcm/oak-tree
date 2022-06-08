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
    showForm: any
}

export const InformationContainer = ({product, productType, showForm }:ComponentProps) => {

    const {name, category, usps} = product;

  return (
    <div className='product-info'>
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
                      width='28'
                      height='25'
                  />
              </span>
              <p>{usp.text}</p>
          </li>
        )}
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
        <p className='info-header'>Personalise with Accessories:</p>
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
        <p className='info-header'>Motor Options:</p>
        <p className='desc'>Choice of three motors</p>
    </div>
    <div className='cta-wrapper'>
        <p>Find your perfect chair, Request your Free Brochure</p>
        <button className='main-cta' onClick={showForm}>Request a Free Brochure</button>
    </div>
</div>
</div>
  )
}
