import React,{ useState } from 'react'
import Image from 'next/image';

interface ComponentProps {
    question: string
    answer: string
}

export const Accordion = ({question, answer}: ComponentProps) => {
    const [className, setClassName ] = useState('')
    const [buttonIcon, setButtonIcon ] = useState('plus')

    const toggleAccordion = () => {
        if(className === '') {
            setClassName('active')
            setButtonIcon('minus')
        }else {
            setClassName('')
            setButtonIcon('plus')
        }
    }
    
  return (
    <div className={`accordion ${className}`}>
        <button className='top' onClick={() => toggleAccordion()}>
            <p className='question'>{question}</p>
            <div className='icon'>
                <Image 
                    src={`/buttons/accordion-${buttonIcon}.svg`}
                    alt='Accordion Plus'
                    layout='responsive'
                    width='60'
                    height='60'
                />
            </div>
        </button>
        <p className='answer'>{answer}</p>   
    </div>
  )
}
