import React, {useRef} from 'react'
import Image from 'next/image';

interface ComponentProps {
    isOpen: string
    openAccordian: any
    reference: React.RefObject<HTMLDivElement> | null
}

const SizeChair = ({isOpen, openAccordian, reference}:ComponentProps) => {

  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {reference!.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'size' ? "toc open con-reg" : "toc con-reg"} ref={reference}>
    <button className='toc-btn' onClick={() => openAndJumpToAccordian('size')}>
          <p>Size</p> 
            <span className='icon-wrapper'>
              <Image 
                src='/buttons/plus-black.svg'
                alt='Plus'
                layout='responsive'
                width={15}
                height={15} />
            </span>
        </button>
        <div className='anchor-target' id='size-section'></div>
        <div className='product-content size-section'>
            <div className='content'>
                {/* <p className='subheading oaktree-green'>Step Two</p> */}
                {/* <h5 className='heading'>Choose Your Size</h5> */}
                  <div className='detail'>
                      <div className="image-wrapper">
                        <Image 
                          src='/images/lifestyle/rep-and-chair.png'
                          alt='Rep and chair'
                          width={1000}
                          height={673}
                        />
                      </div>
                      <div className='content size-content'>
                        <div className='icon-wrapper'>
                          <Image
                            src='/icons/collection-process/customisation-new.svg'
                            alt='Made To Measure'
                            layout='responsive'
                            width='136'
                            height='114'
                          />
                        </div>
                          <h3>Made to Measure</h3>
                          <p>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                      </div>
                  </div>
            </div>
        </div>
</div>
  )
}

export default SizeChair;