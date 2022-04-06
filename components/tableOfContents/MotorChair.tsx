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
        <div className='product-content'>
            <div className='content'>
                <p className='subheading oaktree-green'>Step Three</p>
                <h5 className='heading'>Choose Your Motor</h5>
                <div className='flex-row'>
                <div className="image-wrapper size-image"></div>
                <p className='desc'>The motor in your chair will determine exactly how it rises and reclines. We offer a number of motors, each of which suits a particular requirement. If you have limited space, for instance, or if you like to sleep on a chair that reclines completely, you’ll need a special motor.</p>
            </div>
            </div>
        </div>
</div>
  )
}

export default MotorChair;