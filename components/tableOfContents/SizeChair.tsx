import React, {useRef} from 'react'
import Image from 'next/image';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const SizeChair = ({isOpen, openAccordian}:ComponentProps) => {
  const tocElement = useRef<HTMLDivElement>(null)
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {tocElement.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'size' ? "toc open con-reg" : "toc con-reg"} ref={tocElement}>
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
        <div className='product-content'>
            <div className='content'>
                <p className='subheading oaktree-green'>Step Two</p>
                <h5 className='heading'>Choose Your Size</h5>
                {/* <div className='flex-row'>
                    <div className="image-wrapper size-image">
             
                    </div>
                   
                </div> */}
                  <div className='detail'>
                      <div className="image-wrapper">
                        <Image 
                          src='/images/lifestyle/rep-and-chair.png'
                          alt='Rep and chair'
                          width={1000}
                          height={673}
                        />
                      </div>
                      <div className='content'>
                          <h3>Choose Your Size</h3>
                          <p>One of the most important choices you will make when buying your chair is its size. During your home consultation, you can try out one of our chairs and see how it feels. Then we will take your exact measurements and help you choose a chair that will fit you perfectly and offer supreme comfort.</p>
                      </div>
                  </div>
            </div>
        </div>
</div>
  )
}

export default SizeChair;