import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const Headboard = ({isOpen, openAccordian}:ComponentProps) => {
  return (
    <div className={isOpen === 'headboard' ? "toc open" : "toc"}>
    <button className='toc-btn' onClick={() => openAccordian('headboard')}>
          <p>Headboard</p> 
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
                <p className='subheading oaktree-green'>Step Two</p>
                <h5 className='heading'>Choose Your Headboard</h5>
                <div className='flex-row'>
                    <div className="image-wrapper size-image"></div>
                    <p className='desc'>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                </div>
            </div>
        </div>
</div>
  )
}

export default Headboard;