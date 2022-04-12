import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const MotorChair = ({isOpen, openAccordian}:ComponentProps) => {
  return (
    <div className={isOpen === 'motor' ? "toc open" : "toc"}>
    <button className='toc-btn' onClick={() => openAccordian('motor')}>
          <p>Motor</p> 
            <span className='icon-wrapper'>
              <Image 
             src='/buttons/plus-black.svg'
                alt='Plus'
                layout='responsive'
                width={15}
                height={15} />
            </span>
        </button>
        <div className='product-content motor-container'>
            <div className='content con-reg'>
                <p className='subheading oaktree-green'>Step Three</p>
                <h5 className='heading'>Choose Your Motor</h5>
                <p className='desc'>We offer a number of motors, each of which suits a particular requirement. If you like to sleep on a chair that reclines.</p>
                <div className='comp-table'>
                  <div className='motor'>
                    <p className='motor-name'>Dual Motor</p>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Can operate footrest and back independently</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back can be dropped down to almost flat position</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Allows a complete upright back when footrest moves</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Additional back support especially in lumbar region</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                    </ul>

                  </div>
                  <div className='motor'>
                    <p className='motor-name'>Unique High Leg Lift</p>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Elevates feet 6” above hips</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back and footrest works together in tilt in space action meaning no pressure on joints</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Additional back support especially in lumbar region</p>
                      </li>
                      <li className="not-included">
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-cross.svg'
                            alt='Tick'
                            layout='responsive'
                            width='10'
                            height='10'
                          />
                        </div>
                        <p>Extra Motor to allow the backrest to move independently</p>
                      </li>
                    </ul>

                  </div>
                  <div className='motor stand-out'>
                    <div className='flex-row'>
                      <p className='motor-name'>Unique High Leg Lift PLUS</p>
                      <div className='most-popular'>Most Popular</div>
                    </div>
                    <ul>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Elevates feet 6” above hips</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Back and footrest works together in tilt in space action meaning no pressure on joints</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Natural bend in the knee joint</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>Extra Motor to allow the backrest to move independently</p>
                      </li>
                      <li>
                        <div className="tick">
                          <Image 
                            src='/vectors/comp-tick-yellow.svg'
                            alt='Tick'
                            layout='responsive'
                            width='14'
                            height='11'
                          />
                        </div>
                        <p>This Extra feature can be used when footrest raised or not</p>
                      </li>
    
                    </ul>

                  </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default MotorChair;