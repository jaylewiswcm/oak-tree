import React, { useState } from 'react'
// data 
import testimonials from '../../../data/testimonials/testimonials.json';
// components 
import Testimonial from './Testimonial';

interface ComponentProps {
    location : string,
}

const Testimonials = ({location}:  ComponentProps) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [selected, setSelection] = useState(false);

    const selectTestimonial = (item: string) => {
        if(selectedItem === '') {
            setSelectedItem(item)
            setSelection(true)
        }else {
            setSelectedItem('')
            setSelection(false)
        }
    }
    
    return (
        <div className={`${location}-testimonials`}>
        <p className='subheading'>Our Testimonials</p>
        <h3 className='heading'>Oak Tree Customer Stories</h3>  
        <div className='cx-story-grid'>
            { testimonials.map(item => 
                <Testimonial 
                    key={item.name}
                    name={item.name}
                    location={item.location}
                    product={item.product}
                    img={item.img}
                    onClick={() => selectTestimonial(item.name)}
                    selectedClass={selected && selectedItem === item.name ? 'selected-item' : selected && selectedItem !== item.name ? 'not-selected-item': 'item-can-hover'}
                />
                )}
          {/* <div className='cx-item'>
            <div className='overlay'></div>
            <Image src='/images/testimonials/cx-1.png' alt='Mr Andrews'
                    layout="fill"  
                    objectFit='cover' 
                    objectPosition='center'
              />
            <div className='item-bottom'>
              <div className='cx-info'>
                <p className='cx-name'>Mr Andrews</p>
                <p  className='product'>The Oak Chair</p>
              </div>
              <div className='play-btn'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
              </div>
            </div>
          </div>
          <div className='cx-item'>
            <div className='overlay'></div>
            <Image src='/images/testimonials/cx-2.png' alt='Mrs Atkins'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            <div className='item-bottom'>
              <div className='cx-info'>
                <p className='cx-name'>Mrs Atkins</p>
                <p  className='product'>The Oak Chair</p>
              </div>
              <div className='play-btn'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
              </div>
            </div>
          </div>
          <div className='cx-item'>
            <div className='overlay'></div>
            <Image src='/images/testimonials/cx-3.png' alt='Mr Parks'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            <div className='item-bottom'>
              <div className='cx-info'>
                <p className='cx-name'>Mr Parks</p>
                <p  className='product'>The Riviera Bath Lift</p>
              </div>
              <div className='play-btn'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
              </div>
            </div>
          </div>
          <div className='cx-item'>
            <div className='overlay'></div>
            <Image src='/images/testimonials/cx-4.png' alt='Mr Groger'
                  layout="fill"  
                  objectFit='cover' 
                  objectPosition='center'
              />
            <div className='item-bottom'>
              <div className='cx-info'>
                <p className='cx-name'>Mr Groger</p>
                <p  className='product'>The Oak Chair</p>
              </div>
              <div className='play-btn'>
              <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
}

export default Testimonials;