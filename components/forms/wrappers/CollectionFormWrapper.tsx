import React from 'react'
import Image from 'next/image';
// Components
import CollectionForm from '../brochure/CollectionForm';

interface ComponentProps {
    productType: string
}

export const CollectionFormWrapper = ({productType}: ComponentProps) => {
  return (
    <>
    <div className='form-top'>
        <h2>Request Your <span className='yellow-3'>Free</span> Brochure</h2>
    </div>
    <div className='brochure-form-usps'>
    <ul>
    <li>
    <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
    <p>See our full collections</p>
    </li>
    <li>
    <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
    <p>Brand new products</p>
    </li>
    <li>
    <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
    <p>Useful help & advice</p>
    </li>
    <li>
    <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
    <p>Completely FREE!</p>
    </li>
    </ul>
    <div className="brochure-section">
    <div className='brochure-image'>
    <Image 
    src='/brochures/chair-brochure.png'
    alt='Brochure'
    layout='responsive'
    width={1000}
    height={1412}
    />
    </div>
    <div className='brochure-open'>
    <Image 
    src='/brochures/chair-brochure-open.png'
    alt='Brochure'
    layout='responsive'
    width={1000} 
    height={708}
    />
    </div>
    </div>
    </div>
    <CollectionForm productType={productType}/>
    </>
  )
}
