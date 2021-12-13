import React , {useState}  from 'react'
import Image from 'next/image';
import ExpInfo from './info/ExpInfo';

const OTExperience = () => {
    const [itemToFocus, setItemToFocus] = useState('');
    const [chosenItem, setChosenItem] = useState('');
    return (
        <div className='index-experience'>
        <p className='subheading'>Why Oak Tree</p>
            <h3 className='heading'>The Oak Tree Experience</h3>  
            <div className='exp-inner'> 
              <div className='exp-imagery'>
                {chosenItem === "" ? <Image 
                      src='/images/usps/british-made.png'
                      alt='British Made'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                  /> : chosenItem === 'gb' &&  <Image 
                      src='/images/usps/british-made.png'
                      alt='British Made'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                  />}
            
                {chosenItem === 'tp' &&  <Image 
                      src='/images/usps/tp-imagery.png'
                      alt='Our Service'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                  />}
            
                {chosenItem === 'ot' &&  <Image 
                      src='/images/usps/ot-imagery.png'
                      alt='Occupational Therapist'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                  />}
            
                  <div className='overlay-bg'></div>
              </div>
              <div className='exp-grid'>
                <div className={`exp-item gb-item ${itemToFocus === 'gb' && 'item-hover'} ${chosenItem === 'gb' && 'item-focused'}`}>
                  <div className='icon-wrapper'>
                    <Image 
                      src='/images/usps/british-made.svg'
                      alt='British Made'
                      layout='intrinsic'
                      width='70'
                      height='64'
                    />
                  </div>
                  <p className='exp-sub'>Handmade in</p>
                  <p className='exp-head'>Great Britian</p>
                  { chosenItem === 'gb' ? <button className='acting-btn' onClick={() => setChosenItem('')} onMouseOver={() => setItemToFocus('gb')} onMouseOut={() => setItemToFocus('')}>Show Less</button>: <button className='acting-btn' onClick={() => setChosenItem('gb')} onMouseOver={() => setItemToFocus('gb')} onMouseOut={() => setItemToFocus('')}>Learn More</button> }
                  
                </div>
                <div className={`exp-item tp-item ${itemToFocus === 'tp' && 'item-hover'} ${chosenItem === 'tp' && 'item-focused'}`}>
                  <div className='icon-wrapper'>
                    <Image 
                        src='/trustpilot/trustpilot-logo.svg'
                        alt='Trustpilot'
                        layout='intrinsic'
                        width='140'
                        height='80'
                    />
                  </div>
                  <p className='exp-sub'>Satisfaction</p>
                  <p className='exp-head'>Rated Five Star</p>
                  { chosenItem === 'tp' ? <button className='acting-btn' onClick={() => setChosenItem('')} onMouseOver={() => setItemToFocus('tp')} onMouseOut={() => setItemToFocus('')}>Show Less</button> : <button className='acting-btn' onClick={() => setChosenItem('tp')} onMouseOver={() => setItemToFocus('tp')} onMouseOut={() => setItemToFocus('')}>Learn More</button> }
                </div>
                <ExpInfo item={chosenItem}/>
                <div className={`exp-item ot-item ${itemToFocus === 'ot' && 'item-hover'} ${chosenItem === 'ot' && 'item-focused'}`}>
                  <div className='icon-wrapper'>
                    <Image 
                        src='/images/usps/ot-logo.svg'
                        alt='Occupational Therapist'
                        layout='intrinsic'
                        width='140'
                        height='70'
                    />
                  </div>
                  <p className='exp-sub'>Occupational Therapist</p>
                  <p className='exp-head'>Approved </p>
                  { chosenItem === 'ot' ? <button className='acting-btn' onClick={() => setChosenItem('')} onMouseOver={() => setItemToFocus('ot')}  onMouseOut={() => setItemToFocus('')}>Show Less</button>: <button className='acting-btn' onClick={() => setChosenItem('ot')} onMouseOver={() => setItemToFocus('ot')}  onMouseOut={() => setItemToFocus('')}>Learn More</button>}
                </div>
           
              </div>
            </div>
        </div>
    )
}

export default OTExperience;