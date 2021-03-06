import React, { useState, useRef } from 'react'
import Image from 'next/image';
import Head from 'next/head';
// data 
import mattress from '../../data/mattress/mattress.json'

interface ComponentProps {
    isOpen: string
    openAccordian: any
    reference: React.RefObject<HTMLDivElement> | null
}

const Mattress = ({isOpen, openAccordian, reference}:ComponentProps) => {
    const [mattressIndex, setMattressIndex] = useState(0);
    const openAndJumpToAccordian = (type:string) => {
        openAccordian(type);
        setTimeout(() => {reference!.current!.scrollIntoView()}, 400); 
    }
  return (
      <>
      <Head>
          { mattress.map((i, index) => <link rel="preload" as="image" key={index} href={i.src}></link>) }
     
      </Head>
    <div className={isOpen === 'mattress' ? "toc open con-reg" : "toc con-reg"} ref={reference}>
    <button className='toc-btn' onClick={() => openAndJumpToAccordian('mattress')}>
          <p>Mattress</p> 
            <span className='icon-wrapper'>
              <Image 
               src='/buttons/plus-black.svg'
                alt='Plus'
                layout='responsive'
                width={15}
                height={15} />
            </span>
        </button>
        <div className='anchor-target' id='mattress-section'></div>
        <div className='product-content'>
            <div className='content'>
                <h5 className='heading'>Choose Your Mattress</h5>
                <div className='mattress-wrapper'>
                    <div className='inner-wrapper'>
                        
                        <div className='mattress'>
                            <div className='image-wrapper'>
                                <Image 
                                    src={mattress[mattressIndex].src}
                                    alt={mattress[mattressIndex].name}
                                    layout='responsive'
                                    width={508}
                                    height={266}
                                />
                                <span className='inside-image'>
                                    <Image
                                        src={`${mattress[mattressIndex].insideImage}`}
                                        alt={`inside ${mattress[mattressIndex].name}`}
                                        layout='responsive'
                                        width={100}
                                        height={100}
                                    />
                                </span>
                            </div>
                            <div className='content-wrapper'>
                                <p className='name'>{mattress[mattressIndex].name}<br/>Mattress</p>
                                <p className='desc'>{mattress[mattressIndex].desc}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='button-wrapper'>
                        <div className='bar'>
                            <div className={`selected-bg index-${mattressIndex}`}></div>
                            <button onClick={() => setMattressIndex(0)} className={mattressIndex === 0 ? 'selected' : '' }><span>Pocket </span>Sprung</button>
                            <button onClick={() => setMattressIndex(1)} className={mattressIndex === 1 ? 'selected' : '' }><span>Memory </span>Foam</button>
                            <button onClick={() => setMattressIndex(2)} className={mattressIndex === 2 ? 'selected' : '' }>Latex</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</>
  )
}

export default Mattress;