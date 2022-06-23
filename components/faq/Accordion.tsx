import React,{ useState } from 'react'

interface ComponentProps {
    question: string
    answer: string
}

export const Accordion = ({question, answer}: ComponentProps) => {
    const [className, setClassName ] = useState('')

    const toggleAccordion = () => {
        if(className === '') {
            setClassName('active')
        }else {
            setClassName('')
        }
    }
  return (
    <div className={`accordion ${className}`}>
        <button className='top' onClick={() => toggleAccordion()}>
            <p className='question'>{question}</p>
            <div className='icon'></div>
        </button>
        <p className='answer'>{answer}</p>   
    </div>
  )
}
