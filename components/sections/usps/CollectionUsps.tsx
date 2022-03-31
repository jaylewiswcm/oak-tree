import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const CollectionUsps = () => {
    const [uspIndex, setUspIndex] = useState(0) 
  return (
    <div className='usp-grid con-reg'>
    <div className={uspIndex === 1 ? 'usp-item show-desc': 'usp-item'}>
        <div className='icon-wrapper'>
            <Image 
              src='/icons/collection-usps/made-in-britain.svg'
              alt='Made in Britain'
              layout='responsive'
              width={137}
              height={137}
            />
        </div>
        <h3 className='usp-title'>Handmade in Great Britain</h3>
        <p className='usp-desc'>At Oak Tree Mobility, we celebrate British manufacturing. All our electric rise and recline armchairs are made in Britain.</p>
        <Link href='/british-made'>
          <a className='learn-more'><p>Learn More</p></a>
        </Link>
          {/* <button className='learn-more' onClick={() => { uspIndex !== 1 ? setUspIndex(1) : setUspIndex(0) }}>
            <p>{uspIndex === 1 ? 'Learn More' : 'Show Less'}</p>
              <span className="arrow"><Image src='/vectors/arrow-down-learn-more-blue.svg' alt='arrow down' layout='responsive' width={6} height={3} /></span>
          </button> */}
    </div>
    <div className={uspIndex === 2 ? 'usp-item show-desc': 'usp-item'}>
        <div className='icon-wrapper'>
            <Image 
              src='/icons/collection-usps/trade-in.svg'
              alt='Made in Britain'
              layout='responsive'
              width={137}
              height={137}
            />
        </div>
        <h3 className='usp-title'>£200 Trade In Offer</h3>
        <p className='usp-desc'>We will collect any old furniture and donate all the furniture that we collect to the <span className='bhf-red'>British Heart Foundation</span> and give you £200 off.</p>
        <Link href='/trade-in'>
          <a className='learn-more'><p>Learn More</p></a>
        </Link>
        {/* <button className='learn-more' onClick={() => { uspIndex !== 2 ? setUspIndex(2) : setUspIndex(0) }}>
            <p>{uspIndex === 2 ? 'Show Less' : 'Learn More'}</p>
              <span className="arrow"><Image src='/vectors/arrow-down-learn-more-blue.svg' alt='arrow down' layout='responsive' width={6} height={3} /></span>
          </button> */}
    </div>
    <div className={uspIndex === 3 ? 'usp-item show-desc': 'usp-item'}>
        <div className='icon-wrapper'>
            <Image 
              src='/icons/collection-usps/customer-service.svg'
              alt='Customer Service'
              layout='responsive'
              width={137}
              height={137}
            />
        </div>
        <h3 className='usp-title'>Incredible Customer Service</h3>
        <p className='usp-desc'>All our recliner chairs are available with a warranty and come with a 14 day satisfaction guarantee. We offer a 24/7 local call out, 365 days a year.</p>
        <Link href='/testimonials-and-reviews'>
          <a className='learn-more'><p>Learn More</p></a>
        </Link>
        {/* <button className='learn-more' onClick={() => { uspIndex !== 3 ? setUspIndex(3) : setUspIndex(0) }}>
            <p>{uspIndex === 3 ? 'Show Less' : 'Learn More'}</p>
              <span className="arrow"><Image src='/vectors/arrow-down-learn-more-blue.svg' alt='arrow down' layout='responsive' width={6} height={3} /></span>
          </button> */}
    </div>
</div>
  )
}
