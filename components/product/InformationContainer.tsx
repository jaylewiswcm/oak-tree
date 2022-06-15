import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// data
import chair_fabrics from '../../data/fabrics/chair_fabrics.json'
import bed_fabrics from '../../data/fabrics/bed_fabrics.json'
import chair_accessories from '../../data/accessories/chair_accessories.json'
import bed_accessories from '../../data/accessories/chair_accessories.json'

type Image = {
    node: {
        originalSrc: string
        altText: string | null
    }
  }
  
  type Product = {
      handle: string
      id: string
      images: {
        edges: Array<Image>
      }
      description: string
      title: string
      productLeaf: {
        type: string
        value: string
      }
      productSubheading:  {
        type: string
        value: string
      }
      productSwatch:  {
        type: string
        value: string
      }
      productURL:  {
        type: string
        value: string
      }
      productType: {
        type: string
        value: string 
      }
  }

interface ComponentProps {
    productType: string
    product: Product
    showForm: any
}

export const InformationContainer = ({product, showForm }:ComponentProps) => {

    const { title, productType } = product;

  return (
    <div className='product-info'>
    <div className='info-container'>
    <div className='top'>
        <h4>The {title}</h4>
        <p>{productType.value}</p>
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
        {/* {usps.map((usp, index) => 
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
        )} */}
    </ul>
    <div className='info-section fabrics'>
        <p className='info-header'>Fabrics and Leathers:</p>
        <div className='swatch-grid'>
            {productType.value === 'Rise and Recline Chair' && chair_fabrics.slice(0,6).map((fabric, index) => 
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
            {productType.value === 'Adjustable Bed' && bed_fabrics.slice(0,6).map((fabric, index) => 
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
            {productType.value === 'Rise and Recline Chair' && chair_accessories.map((item, index) => 
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
            {productType.value === 'Adjustable Bed' && bed_accessories.map((item, index) => 
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
